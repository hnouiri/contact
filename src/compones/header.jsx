import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <div>
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary"  >
        <Toolbar variant="dense">
          <IconButton edge="start" color="error" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
Contact Liste
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>


    </div>
  )
}
