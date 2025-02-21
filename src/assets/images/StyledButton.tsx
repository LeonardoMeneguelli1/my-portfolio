import { styled } from "@mui/material";
import theme from "../../theme";

const StyledButton = styled("button")(() => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    justifyContent: "center",
    gap: "10px",
    transition: "0.3s",
    '&:hover': {
        backgroundColor: theme.palette.secondary.light
    }
}));



export default StyledButton