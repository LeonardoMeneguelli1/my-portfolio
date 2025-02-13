import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-evenly",
  });

  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    cursor: "pointer",
    color: "inherit",
    transition: "0.3s",
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  }));

  const handleSmoothScroll = (targetId) => {
    setTimeout(() => {
      document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
    },);
  };

  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <StyledMenuItem onClick={() => handleSmoothScroll("#about")}>
          About
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleSmoothScroll("#skills")}>
          Skills
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleSmoothScroll("#projects")}>
          Projects
        </StyledMenuItem>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
