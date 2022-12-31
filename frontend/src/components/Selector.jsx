import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function Selector( props ){

    const [value, setValue] = useState(null);

    useEffect(() => {
        props.getSelected(value);
    })
    

    return(
        <Autocomplete
            options={props.data}
            renderInput = {(params) => <TextField {...params} label = {props.text}/>}
            value = {value}
            onChange = {(event, newValue) => setValue(newValue)}
            autoHighlight
        />
    )

}

export default Selector;