import React from 'react';
import { DataTable } from '@civicactions/data-catalog-components';
import { ResourceDispatch } from '@civicactions/data-catalog-services';

export function prepareColumns(columns, schema) {
  return columns.map((column) => ({
    Header: schema && schema.fields[column].description ? schema.fields[column].description : column,
    accessor: column,
  }));
}

const ResourceContent = ({id}) => {
  const value = React.useContext(ResourceDispatch);
  return(
    <div>
      <DataTable
        data={value.items}
        columns={prepareColumns(value.columns, value.schema[id])}
        schema={value.schema}
        totalRows={value.totalRows}
        limit={value.limit}
        offset={value.offset}
        loading={value.loading}
      />
    </div>
  )
}

export default ResourceContent;
