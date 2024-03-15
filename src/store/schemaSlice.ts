import { createSlice } from '@reduxjs/toolkit';

import {schema} from '@/config/Schema'

const findConditionsForField = (selectedColumn) => {
  const dataType = selectedColumn.DataType;
  const fieldDataTypeId = getDataTypeId(dataType);
  
  const conditionsRelations = schema.conditiondatatyperelations.filter(
    (relation) => relation.DataTypeId === fieldDataTypeId
  );
  const conditionIds = conditionsRelations.map((relation) => relation.ConditionId);
  const conditions = schema.conditions.filter((condition) => {
    const conditionId = parseInt(condition.ConditionId);
    return conditionIds.includes(conditionId);
  });
  return conditions;
};

const getDataTypeId = (dataType) => {
  const dataTypeParts = dataType.split('(');
  const dataTypeName = dataTypeParts[0].toLowerCase().trim();
  const dataTypeObject = schema.datatypes.find((dt) => dt.DataTypeName === dataTypeName);
  return dataTypeObject ? dataTypeObject.DataTypeId : null;
};

const schemaSlice = createSlice({
    name: 'schemaSlice',
    initialState: {
      selectedEntity: null,
      selectedRelatedEntity: null,
      selectedFields: [],
      entityList: schema.entities,
      relatedEntityList: [] as Array<any>,
      columns: [] as Array<any>,
      selectedConditions: [] as Array<any>,
    },
    reducers: {
      setEntity: (state, action) => {
        const selectedEntity = action.payload
        state.selectedEntity = selectedEntity;
        state.relatedEntityList = schema.entityrelations
          .filter(relation => {
            return relation.EntityId === action.payload.EntityId
          })
          .map(relation => {
            const relatedEntity = schema.entities.find(entity => entity.EntityId === relation.RelatedEntityId);
            return relatedEntity ? relatedEntity : null;
          })
          .filter(Boolean); // Removing nullish values
        state.columns = schema.columns.filter((column) => column.EntityId === selectedEntity.EntityId)
      },
      addDummyField: (state) => {
        state.selectedFields.push({ field: null, condition: null, selectedCondition: null });
      },
      setFieldOrRelatedEntity: (state, action) => {
        const { value, index } = action.payload;
        if ('ColumnName' in value) {
          // It's a field
          if (state.selectedFields[index]) {
            state.selectedFields[index].field = value;
            const conditionsForField = findConditionsForField(value);
            state.selectedFields[index].condition = conditionsForField;
          } else {
            state.selectedFields[index] = { field: value, condition: null };
          }
        } else {
          // It's a related entity
          state.selectedRelatedEntity = value;
        }
      },
      setSelectedCondition(state, action) {
        const { condition, index } = action.payload;
        state.selectedFields[index].selectedCondition = condition;
      },
      resetSelectedConfiguration(state) {
        state.selectedFields = [{}]; // Reset to a single dummy field
      },
    },
  });

export const { setEntity, setFieldOrRelatedEntity, addDummyField, setSelectedCondition, resetSelectedConfiguration } = schemaSlice.actions;
export default schemaSlice.reducer;