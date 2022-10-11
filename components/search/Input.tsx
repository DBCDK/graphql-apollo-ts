import PropTypes from "prop-types";
import { Dispatch, FC, SetStateAction, useState } from "react";


interface Props {
    searchQuery: string,
    setSearchQuery: Dispatch<SetStateAction<string>>
  }


 const Input: FC<Props> =({searchQuery,setSearchQuery}) =>{
//const [value,setValue] = useState('')
  return (
    <input
    style={{padding:'10px', width:'400px'}}
    id="help-suggester-input"
    type="text"
    value={searchQuery}
    onChange={(e)=>{
        setSearchQuery( e.target.value)
        console.log(' e.target.value', e.target.value)

    }}
    placeholder="Søg"
    aria-label={'Søg'}
  ></input>
  );
}

export default Input;