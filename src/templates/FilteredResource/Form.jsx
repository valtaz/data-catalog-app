import React from 'react';
import { ResourceDispatch } from '@civicactions/data-catalog-services';

function updateCond(newValues, index, cond, setCond) {
  cond[index] = newValues;
  setCond(cond)
}

const Form = ({id}) => {
  const value = React.useContext(ResourceDispatch);
  // Each cond = {id: 'foo', value: 'bar'}
  const [cond, setCond] = React.useState([{id: '', value: ''}]);
  return(
    <form>
      <fieldset>
        <legend>Conditions</legend>
        {cond.map((c, index) => {
          return (
            <div>
              <select value={c[index]} onChange={(e) => console.log(e)}>
                {value.schema[id] && Object.keys(value.schema[id].fields).map((field) => {
                  return(
                    <option value={field} key={value.schema[id].fields[field].description}>
                      {value.schema[id].fields[field].description}
                    </option>
                  )
                })}
              </select>
              <input type="text" onChange={(e) => {e.preventDefault();}}/>
            </div>
          )
        })}
        <button onClick={(e) => {e.preventDefault(); setCond([...cond, {id: '', value: ''}]);}}>Add condition</button>
      </fieldset>
      <fieldset>
        <legend>Sort</legend>
      </fieldset>
      <button type="submit">Update resource</button>
    </form>
  );
}

export default Form;