import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    var[input,setInput]=useState({
        name:"",
        grade:""
    })
    const inputHandler =(e)=>{
        const{name,value}=e.target
        setInput({...input,[name]:value})
    }
    const readValues = ()=>{
        console.log("clicked")
        axios.post("http://localhost:3005/students",input)
        .then(response=>{
            alert("succefully added")
        })
        .catch(error=>console.log(error))
    }
  return (
    <div>
        <br></br><br /><br />
        <br></br>
      <TextField label='name' value={input.name} name='name'
      onChange={inputHandler} />
      <TextField label='grade'name='grade' value={input.grade}
      onChange={inputHandler} />
      <Button variant='contained'onClick={readValues}color='success'>submit</Button>
      <br>
    </br>

    </div>
  )
}

export default Add
