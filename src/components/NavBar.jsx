import { AppBar, Box, Button, IconButton,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
          <Box>
      <AppBar >
        <Toolbar>
          <Typography>Student App </Typography>
     
          <Button color="inherit"><Link to='/'style={{color:'white',textDecoration:'none'}}>view</Link> </Button>
          <Button color="inherit"><Link to='/add'style={{color:'white',textDecoration:'none'}}>Add</Link> </Button>


        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar

