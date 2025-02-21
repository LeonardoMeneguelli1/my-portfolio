import { Box, Container, Grid, styled, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import StyledButton from "../../../../assets/images/StyledButton";
import Project1 from "../../../../assets/images/project1.gif";
import Project2 from "../../../../assets/images/myPortfolio.gif";
import { Link } from "@mui/material";

const Projects = () => {
    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        padding: "50px 0",
    }));

    const Card = styled(Box)(({ theme }) => ({
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "left",
        width: "100%",
        maxWidth: "none",
        minHeight: "500px",
        backgroundColor: "transparent",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "0.3s",
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
        [theme.breakpoints.down("md")]: {
            padding: "15px",
        },
    }));

    const ContentWrapper = styled(Box)({
        flexGrow: 1,
        overflow: "hidden",
        textOverflow: "ellipsis",
    });

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        height: "auto",
        borderRadius: "10px",
        marginBottom: "15px",
        [theme.breakpoints.down("md")]: {
            maxHeight: "300px",
        },
    }));

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const leftCardVariants = {
        offscreen: {
            x: isMobile ? 200 : -400,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };

    const rightCardVariants = {
        offscreen: {
            x: 400,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <StyledProjects id="projects">
            <Container maxWidth="lg">
                <Typography color="white" variant="h2" textAlign="center" mb={4}>
                    Projects
                </Typography>
                <Grid container justifyContent="center" spacing={3}>
                    <Grid item xs={12} md={6} display="flex" justifyContent="center">
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            variants={leftCardVariants}
                        >
                            <Card>
                                <ContentWrapper>
                                    <Typography variant="h6" fontWeight="bold">Excursion Website</Typography>
                                    <Typography color="gray" mb={1}>Out 2023 - Ago 2023</Typography>
                                    <StyledImg src={Project1} alt="Profile" />
                                    <Typography sx={{ wordBreak: "break-word", overflowWrap: "break-word" }}>
                                        This is a frontend project for a travel and tourism website. It was developed using HTML, CSS, JavaScript, with the implementation of responsive design, coding standards, React-Bootstrap, React, SEO, and animations. The goal was to create a simple and functional interface to present information related to tourist destinations.                                    </Typography>
                                </ContentWrapper>
                                <Typography fontWeight="bold" mt={2}>
                                    Technologies: JavaScript, HTML, CSS, React, React-Bootstrap
                                </Typography>

                                <Grid container spacing={2} pt={4}>
                                    {/* <Grid item xs={6} md={6} display="flex" justifyContent="center">
                                            <StyledButton>
                                                <Typography>View Project</Typography>
                                            </StyledButton>
                                    </Grid> */}
                                    <Grid item xs={12} md={12} display="flex" justifyContent="center">
                                        <Link href="https://github.com/LeonardoMeneguelli1/front-end-developer-test" style={{ display: "contents", textDecoration: "none" }}>
                                            <StyledButton>
                                                <Typography>View Code</Typography>
                                            </StyledButton>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Card>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6} display="flex" justifyContent="center">
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            variants={rightCardVariants}
                        >
                            <Card>
                                <ContentWrapper>
                                    <Typography variant="h6" fontWeight="bold">My Portfolio</Typography>
                                    <Typography color="gray" mb={1}>fev 2025 - fev 2025</Typography>
                                    <StyledImg src={Project2} />
                                    <Typography sx={{ wordBreak: "break-word", overflowWrap: "break-word" }}>
                                        This is a frontend project for a travel and tourism website. It was developed using HTML, CSS, JavaScript, with the implementation of responsive design, coding standards, React-Bootstrap, React, SEO, and animations. The goal was to create a simple and functional interface to present information related to tourist destinations.
                                    </Typography>
                                </ContentWrapper>
                                <Typography fontWeight="bold" mt={2}>
                                    Technologies: TypeScript, HTML, CSS, React, MUI
                                </Typography>

                                <Grid container spacing={2} pt={4}>
                                    {/* <Grid item xs={6} md={6} display="flex" justifyContent="center">
                                        <StyledButton>
                                            <Typography>View Project</Typography>
                                        </StyledButton>
                                    </Grid> */}
                                    <Grid item xs={12} md={12} display="flex" justifyContent="center">
                                        <Link href="https://github.com/LeonardoMeneguelli1/my-portfolio" style={{ display: "contents", textDecoration: "none" }}>
                                            <StyledButton>
                                                <Typography>View Code</Typography>
                                            </StyledButton>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Card>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </StyledProjects>
    );
};

export default Projects;