import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import { Resource, transformURLtoDatastoreQuery } from "@civicactions/data-catalog-services"
import ResourceContent from './ResourceContent'
import Form from './Form'

const FilteredResource = ({id, dist_id, location}) => {
  const { search } = location;
  const { conditions } = transformURLtoDatastoreQuery(search);
  return (
    <Layout title="Filtered Resource">
      <Resource
        distribution={{identifier: dist_id}}
        rootUrl={process.env.REACT_APP_ROOT_URL}
        options={{
          conditions: conditions
        }}
      >
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <ResourceContent id={dist_id}/>
          <Form id={dist_id} />
        </div>
      </Resource>
      
    </Layout>
  )
}

FilteredResource.propTypes = {
  id: PropTypes.string,
  dist_id: PropTypes.string,
}

export default FilteredResource;
