import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout'
//process.env.REACT_APP_ROOT_URL
const resourceId = "16459f03-bc7f-5dad-9e1a-1154a8518d82"; //Gold Dataset /dataset/5dc1cfcf-8028-476c-a020-f58ec6dd621c
const DownloadTest = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function queryDatastore() {
      return await axios({
        method: 'post',
        url: `${process.env.REACT_APP_ROOT_URL}/datastore/query?format=csv`,
        data: {
          resources: [
            {
              "id": resourceId,
              "alias": "t"
            }
          ],
          conditions: [
            // {
            //   "resource": "t",
            //   "property": "price",
            //   "value": "34.73",
            //   "operator": "="
            // },
            // {
            //   "resource": "t",
            //   "property": "date",
            //   "value": "1950-04-01",
            //   "operator": "="
            // }
          ],
          // limit: 50,
          // offset: 50,
        },
        responseType: "blob"
      })
      .then((response) => {
        const { data } = response;
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${resourceId}.csv`); //or any other extension
        document.body.appendChild(link);
        link.click();
        setData(data);
        console.log(data.results)
      })
    }
    queryDatastore();
  }, []);
  return(
    <Layout title="Dowload Test">
      test
    </Layout>
  )
};

export default DownloadTest;
