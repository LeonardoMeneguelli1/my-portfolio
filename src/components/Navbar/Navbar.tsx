import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"


const Navbar = () => {

    const StyledToolbar = styled(Toolbar)(({theme}) => ({
        display: 'flex',
        justifyContent: 'space-evenly',
      }));
      
    return (
      <>
        <AppBar position="absolute">
            <StyledToolbar>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Projects</MenuItem>
            </StyledToolbar>
        </AppBar>
      </>
    )
  }
  
  export default Navbar
  