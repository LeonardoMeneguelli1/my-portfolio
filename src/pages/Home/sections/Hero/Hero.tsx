import { useEffect, useRef } from "react";
import { Box, Container, Grid, Link, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/perfil.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../assets/images/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import Typed from "typed.js";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: { // <= mobile
      paddingTop: "10px",
    },
    [theme.breakpoints.up('md')]: { // <= desktop
      paddingTop: "0px",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: [
          "I'm a Front-End Developer",
        ],
        typeSpeed: 50,
        backSpeed: 30,
      };

      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width="150%" right={0} top={-100}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} alt="Profile" />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography color="secondary.contrastText" variant="h2" textAlign="center" pb={2}>
                Leonardo Meneguelli
              </Typography>
              <Typography color="secondary.main" variant="h2" textAlign="center">
                <span ref={typedRef}></span>
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={4}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Link href="/Pdf/Leonardo_Curriculo.pdf" download="Leonardo_Curriculo.pdf" style={{ display:"contents", textDecoration: "none" }}>
                    <StyledButton>
                      <DownloadIcon color="secondary" />
                      <Typography>Download CV</Typography>
                    </StyledButton>
                  </Link>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Link href="mailto:leonardomeneguelli1@gmail.com" style={{ display:"contents", textDecoration: "none" }} >
                    <StyledButton>
                      <EmailIcon color="secondary" />
                      <Typography>Contact me</Typography>
                    </StyledButton>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;