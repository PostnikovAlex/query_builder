//@ts-nocheck
import React, { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/pages/_app'
import classNames from 'classnames'
import { getTypographyClassNames } from '@/libs/typography'
import { Dropdown } from '@/components/ui/Dropdown'
import { useDispatch, useSelector } from 'react-redux';
import { setEntity, setFields, setFieldOrRelatedEntity, addDummyField, setSelectedCondition, resetSelectedConfiguration } from '@/store/schemaSlice'

const Main: NextPageWithLayout = () => {

  const dispatch = useDispatch();
  const { selectedEntity, selectedFields, entityList, relatedEntityList, columns } = useSelector((state) => state.schema);
  const handleEntityChange = (selectedEntity, RelatedEntityId) => {
    dispatch(resetSelectedConfiguration())
    dispatch(setEntity(selectedEntity, RelatedEntityId));
  };
  const handleFieldChange = (value, index) => {
    dispatch(setFieldOrRelatedEntity({ value, index }));
  }

  const handleAddDummyField = () => {
    dispatch(addDummyField());
  };

  const handleConditionChange = (condition, index) => {
    dispatch(setSelectedCondition({ condition, index }));
  };

  const renderValueInputComponent = (field, index) => {
    const selectedField = selectedFields[index];
    const selectedCondition = selectedField.selectedCondition;
    if (!selectedCondition) return null;
    if (selectedCondition?.OperandCount == 0) {
      return null;
    }

    const dataType = field.DataType.toLowerCase();
    if (dataType.includes('nvarchar') || dataType === 'char') {
      // Render text input with a maxLength
      return <input type="text" maxLength={getMaxLengthFromDataType(dataType)} />;
    } else if (dataType.includes('decimal') || dataType.includes('numeric')) {
      // Render number input for decimal and numeric types
      return <input type="number" step="any" />;
    } else if (dataType.includes('date') || dataType.includes('time')) {
      // Render datepicker for date and time types
      return <input type="date" />;
    } else if (dataType === 'bit') {
      // Render dropdown with Yes and No options for bit type
      return (
        <select>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      );
    } else {
      // For other types, render a text input as a fallback
      return <input type="text" />;
    }
  };

  const getMaxLengthFromDataType = (dataType) => {
    // Extracts the allowed length from nvarchar data type
    const match = dataType.match(/\d+/);
    return match ? parseInt(match[0]) : 100; // Default to 100 if no length is specified
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-1 items-center py-2 border-b-1 border-gray-light'>
        <h2 className={classNames(getTypographyClassNames('h2'))}>Select Entity</h2>
        <Dropdown 
          className='min-w-[200px]'
          value={selectedEntity}
          placeholder='Select entity from DB'
          items={entityList.map((entity) => ({
            label: entity.EntityName,
            value: entity
          }))}
          onValueChange={(value, RelatedEntityId) => handleEntityChange(value, RelatedEntityId)}
        />
      </div>
      {selectedEntity && (
        <div className='flex flex-col gap-2 py-2'>
          <div className="flex">
            <h2 className={classNames(getTypographyClassNames('h2'))}>Select Field or Related Entity</h2>
          </div>

          {selectedFields.map((selectedField, index) => (
            <div key={index}>
              <h3>{selectedField.ColumnName}</h3>
              <div className="flex border-b-1 border-t-1 border-gray-light py-2 gap-2">
                <Dropdown 
                  className='min-w-[200px]'
                  value={selectedField.field}
                  placeholder='Field Name'
                  items={columns.map((column) => ({
                    label: column.ColumnName,
                    value: column
                  }))}
                  relatedEntityList={relatedEntityList.map((relatedEntity) => ({
                    label: relatedEntity.EntityName,
                    value: relatedEntity
                  }))}
                  onValueChange={(value) => {handleFieldChange(value, index)}}
                />

                {selectedField?.condition?.length && <Dropdown 
                  className='min-w-[200px]'
                  value={selectedField.selectedCondition}
                  placeholder='Field Name'
                  items={selectedField.condition.map((field) => ({
                    label: field.ConditionName,
                    value: field
                  }))}
                  onValueChange={(value) => { handleConditionChange(value, index) }}
                />}
                {renderValueInputComponent(selectedField.field, index)}
              </div>
              
            </div>
          ))}
          <button onClick={handleAddDummyField}>Add Field</button>
        </div>
      )}
    </div>
  )
}

Main.getLayout = (page) => {
  return (
    <Layout
      ContainerProps={{
        className: 'py-3 min-w-[1280px] max-w-[1280px] mx-auto',
      }}
    >
      {page}
    </Layout>
  )
}

export default Main
