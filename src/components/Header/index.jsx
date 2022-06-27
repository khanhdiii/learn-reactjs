import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';
import Register from './../../features/Auth/components/Register/index';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <FavoriteBorderIcon />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="navlink" to="/">
              KDstore
            </Link>
          </Typography>

          <NavLink to="/todos " className="navlink">
            <Button color="inherit" variant="outlined">
              Todo
            </Button>
          </NavLink>

          <NavLink to="/albums" className="navlink">
            <Button color="inherit" variant="outlined">
              Album
            </Button>
          </NavLink>

          <Button color="inherit" variant="outlined" onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
