import React from 'react';
import { DataTable } from '@civicactions/data-catalog-components';
import { ResourceDispatch, transformTableFilterToQueryCondition, transformTableSortToQuerySort } from '@civicactions/data-catalog-services';

export function prepareColumns(columns, schema) {
  return columns.map((column) => ({
    Header: schema && schema.fields[column].description ? schema.fields[column].description : column,
    accessor: column,
  }));
}

const ResourceContent = ({id}) => {
  const value = React.useContext(ResourceDispatch);
  return(
    <DataTable
      className="overflow-x-scroll"
      data={value.items}
      columns={prepareColumns(value.columns, value.schema[id])}
      schema={value.schema}
      totalRows={value.totalRows}
      limit={value.limit}
      offset={value.offset}
      loading={value.loading}
      setSort={value.actions.setSort}
      setConditions={value.actions.setConditions}
      conditionsTransform={transformTableFilterToQueryCondition}
      sortTransform={transformTableSortToQuerySort}
    />
  )
}

export default ResourceContent;
