import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

const View = () => {
    var[update,setUpdate]= useState(false)
    var[selected,setSelected] = useState([])
    var[Students,setStudents]= useState([])
    useEffect(()=>{
        axios.get("  http://localhost:3005/students")
        .then(response=>{
            setStudents(Students=response.data)
        console.log(Students)
        })
        .catch(error=>console.log(error))
        
    },[])
    const deleteValue=(id)=>{
        console.log(id)
        axios.delete(" http://localhost:3005/students/"+id)
        .then(response=>{
            alert("succesfully delete")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }
    const updateValue=(value)=>{
        setSelected(value)
        setUpdate(true)
    }
    var finalJSX=<TableContainer>
    <Table>
        <TableHead>
            <TableRow><br></br><br />
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>delete</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
            Students.map((value,index)=>{
                return<TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.grade}</TableCell>
                    <TableCell><Button onClick={()=>deleteValue(value.id)}>Delete</Button></TableCell>
                    <TableCell><Button onClick={()=>updateValue(value)}>update</Button></TableCell>
                </TableRow>
            })
            }
        </TableBody>
    </Table>
   </TableContainer>

   if(update)
   finalJSX = <Add data={selected} method="put" />
  return (
    finalJSX
   
  )
}
export default View
