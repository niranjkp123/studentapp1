import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
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
  return (
   <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Grade</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {Students.map((value,index)=>{
                return<TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.grade}</TableCell>
                    <TableCell><Button onClick={()=>deleteValue(value.id)}>Delete</Button>
                    </TableCell>
                </TableRow>
            })
            }
        </TableBody>
    </Table>
   </TableContainer>
  )
}
export default View
