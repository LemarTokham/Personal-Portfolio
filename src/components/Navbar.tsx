import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


interface NavBarProps {
    openDrawer:() => void;
}

function Navbar(props: NavBarProps){

    return (
    <AppBar position="static">
        <Toolbar>
          <IconButton
          onClick={props.openDrawer}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lemar
          </Typography>
        </Toolbar>
    </AppBar>
)}

export default Navbar