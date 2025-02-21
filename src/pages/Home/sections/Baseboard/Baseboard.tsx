import { Box, Link, styled, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Baseboard = () => {
    const StyledBaseboard = styled("div")(() => ({
        backgroundColor: "white",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 0",
    }));

    return (
        <StyledBaseboard>
            <Box textAlign="center">

                <Box
                    display="flex"
                    justifyContent="center"
                    gap={{ xs: 10, sm: 15, md: 25 }}
                    flexWrap="wrap"
                >
                    <Box>
                        <Link href="https://www.linkedin.com/in/leonardo-meneguelli-de-rezende-camara-pinheiro-62198a1bb/" style={{ textDecoration: "none" }}>
                            <LinkedInIcon sx={{ color: "primary.light", fontSize: { xs: "exlarge", sm: "exlarge" } }} />
                        </Link>
                    </Box>
                    <Box>
                        <Link href="https://github.com/LeonardoMeneguelli1" style={{ textDecoration: "none" }}>
                            <GitHubIcon sx={{ color: "primary.light", fontSize: { xs: "exlarge", sm: "exlarge" } }} />
                        </Link>
                    </Box>
                    <Box>
                        <Link href="mailto:leonardomeneguelli1@gmail.com" style={{ textDecoration: "none" }}>
                            <EmailIcon sx={{ color: "primary.light", fontSize: { xs: "exlarge", sm: "exlarge" } }} />
                        </Link>
                    </Box>
                </Box>
                <Typography
                    color="primary.light"
                    variant="body1"
                    mt={2}
                    sx={{
                        fontSize: { xs: "0.8rem", sm: "1rem" },
                    }}
                >
                    2025 Leonardo Meneguelli - All rights reserved
                </Typography>
            </Box>
        </StyledBaseboard>
    );
};

export default Baseboard;