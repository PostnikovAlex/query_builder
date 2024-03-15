//@ts-nocheck
import React, { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/pages/_app'
import classNames from 'classnames'
import { getTypographyClassNames } from '@/libs/typography'
import { Dropdown } from '@/components/ui/Dropdown'
import { useDispatch, useSelector } from 'react-redux';
import { setEntity, setFields, setFieldOrRelatedEntity, addDummyField, setSelectedCondition, resetSelectedConfiguration, setFieldValue } from '@/store/schemaSlice'

const Main: NextPageWithLayout = () => {

  const dispatch = useDispatch();
  const { selectedEntity, selectedFields, entityList, relatedEntityList, columns } = useSelector((state) => state.schema);

  const generateQueryString = () => {

    const conditions = [];
  
    selectedFields.forEach((selectedField) => {
      const { field, selectedCondition, value } = selectedField;
      if (field && selectedCondition && value !== undefined && value !== null) {
        const conditionString = `${field.ColumnName} ${selectedCondition.ConditionSymbol} '${value}'`;
        conditions.push(conditionString);
      }
    });
  
    // Create the final query string by joining all conditions with 'AND'
    const queryString = `SELECT * FROM ${selectedEntity.EntityName} WHERE ${conditions.join(' AND ')}`;
  
    console.log('Generated query:', queryString);
  };

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
  useEffect(() => {
    console.log(selectedFields)
  }, [selectedFields])

  const renderValueInputComponent = (field, index, condition) => {
    console.log(condition)
    const selectedField = selectedFields[index];
    const selectedCondition = selectedField.selectedCondition;
    if (!selectedCondition) return null;
    if (selectedCondition?.OperandCount == 0) {
      return null;
    }
    const handleInputChange = (e, fieldIndex) => {
      const { value } = e.target;
      dispatch(setFieldValue({ value, index: fieldIndex }));
    };
    const dataType = field.DataType.toLowerCase();
  if (condition.OperandCount == 2) {
    // Render two inputs based on data type
    if (dataType.includes("nvarchar") || dataType === "char") {
      return (
        <>
          <input className={classNames('bg-transparent border-1 border-gray-light')} type="text" onChange={(e) => handleInputChange(e, index)} placeholder="First value" />
          <input className={classNames('bg-transparent border-1 border-gray-light')} type="text" onChange={(e) => handleInputChange(e, index)} placeholder="Second value" />
        </>
      );
    } else if (dataType.includes("decimal") || dataType.includes("numeric")) {
      return (
        <>
          <input type="number" onChange={(e) => handleInputChange(e, index)} className={classNames('bg-transparent border-1 border-gray-light')} step="any" placeholder="First value" />
          <input type="number" onChange={(e) => handleInputChange(e, index)} className={classNames('bg-transparent border-1 border-gray-light')} step="any" placeholder="Second value" />
        </>
      );
    } else if (dataType.includes("date") || dataType.includes("time")) {
      return (
        <>
          <input type="date" onChange={(e) => handleInputChange(e, index)} className={classNames('bg-transparent border-1 border-gray-light')} placeholder="First value" />
          <input type="date" onChange={(e) => handleInputChange(e, index)} className={classNames('bg-transparent border-1 border-gray-light')} placeholder="Second value" />
        </>
      );
    } else {
      return (
        <>
          <input onChange={(e) => handleInputChange(e, index)} className={classNames('bg-transparent border-1 border-gray-light')} type="text" placeholder="First value" />
          <input onChange={(e) => handleInputChange(e, index)} className={classNames('bg-transparent border-1 border-gray-light')} type="text" placeholder="Second value" />
        </>
      );
    }
  } else if (condition.OperandCount == 1) {
    // Render single input based on data type
    if (dataType.includes("nvarchar") || dataType === "char") {
      return <input onChange={(e) => handleInputChange(e, index)} className={classNames('bg-transparent border-1 border-gray-light')} type="text" maxLength={getMaxLengthFromDataType(dataType)} />;
    } else if (dataType.includes("decimal") || dataType.includes("numeric")) {
      return <input onChange={(e) => handleInputChange(e, index)} className={classNames('bg-transparent border-1 border-gray-light')} type="number" step="any" />;
    } else if (dataType.includes("date") || dataType.includes("time")) {
      return <input onChange={(e) => handleInputChange(e, index)} className={classNames('bg-transparent border-1 border-gray-light')} type="date" />;
    } else if (dataType === "bit") {
      return (
        <select>
          <option className={classNames('bg-transparent border-1 border-gray-light')} value={true}>Yes</option>
          <option className={classNames('bg-transparent border-1 border-gray-light')} value={false}>No</option>
        </select>
      );
    } else {
      return <input className={classNames('bg-transparent border-1 border-gray-light')} type="text" />;
    }
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
                {renderValueInputComponent(selectedField.field, index, selectedField.selectedCondition)}
              </div>
              
            </div>
          ))}
          <button onClick={handleAddDummyField}>Add Field</button>
        </div>
      )}
    <div className="flex items-center justify-center">
      <button onClick={generateQueryString}>Generate Query</button>
    </div>
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
