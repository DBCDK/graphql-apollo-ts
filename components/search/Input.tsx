import PropTypes from "prop-types";
import { useState } from "react";



export default function Input({
}) {
const [value,setValue] = useState('')
  return (
    <input
    style={{padding:'10px', width:'400px'}}
    id="help-suggester-input"
    type="text"
    value={value}
    onChange={(e)=>{
        setValue( e.target.value)
        console.log(' e.target.value', e.target.value)

    }}
    placeholder="Søg"
    aria-label={'Søg'}
  ></input>
  );
}

