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
      <div className="grid-container">
        <div className="grid-row">
          <Resource
            distribution={{identifier: dist_id}}
            rootUrl={process.env.REACT_APP_ROOT_URL}
            options={{
              conditions: conditions
            }}
          >
            <div className="tablet:grid-col-9">
              <ResourceContent id={dist_id}/>
            </div>
            
            <div className="tablet:grid-col-3">
              <Form id={dist_id} />
            </div>
          </Resource>
        </div>
      </div>
    </Layout>
  )
}

FilteredResource.propTypes = {
  id: PropTypes.string,
  dist_id: PropTypes.string,
}

export default FilteredResource;
