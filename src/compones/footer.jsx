import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Footer() {
  return (
    <div>
    <Box  sx={{ flexGrow: 3 }}>
      <AppBar position="static" color="secondary"  >
        <Toolbar variant="dense">
    
          <Typography variant="h6" color="inherit" component="div">

          </Typography>
        </Toolbar>
      </AppBar>
    </Box>


    </div>
  )
}
