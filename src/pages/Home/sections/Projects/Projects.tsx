import { Box, Button, Container, Grid, styled, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import StyledButton from "../../../../assets/images/StyledButton";
import Project from "../../../../assets/images/project1.gif";
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
        minHeight: "auto",
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
                                    <Typography variant="h6" fontWeight="bold">Project 1</Typography>
                                    <Typography color="gray" mb={1}>Out 2023 - Ago 2023</Typography>
                                    <StyledImg src={Project} alt="Profile" />
                                    <Typography sx={{ wordBreak: "break-word", overflowWrap: "break-word" }}>
                                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
                                    </Typography>
                                </ContentWrapper>
                                <Typography fontWeight="bold" mt={2}>
                                    Technologies: JavaScript, HTML, CSS
                                </Typography>

                                <Grid container spacing={2} pt={4}>
                                    <Grid item xs={6} md={6} display="flex" justifyContent="center">
                                        <StyledButton onClick={() => console.log("view project")}>
                                            <Typography>View Project</Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid item xs={6} md={6} display="flex" justifyContent="center">
                                        <Link href="https://github.com/LeonardoMeneguelli1/front-end-developer-test" style={{ display: "contents", textDecoration: "none" }}>
                                            <StyledButton onClick={() => console.log("view code")}>
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
                                    <Typography variant="h6" fontWeight="bold">Project 2</Typography>
                                    <Typography color="gray" mb={1}>Out 2023 - Ago 2023</Typography>
                                    <StyledImg src={Project} alt="Profile" />
                                    <Typography sx={{ wordBreak: "break-word", overflowWrap: "break-word" }}>
                                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
                                    </Typography>
                                </ContentWrapper>
                                <Typography fontWeight="bold" mt={2}>
                                    Technologies: JavaScript, HTML, CSS
                                </Typography>

                                <Grid container spacing={2} pt={4}>
                                    <Grid item xs={6} md={6} display="flex" justifyContent="center">
                                        <StyledButton onClick={() => console.log("view project")}>
                                            <Typography>View Project</Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid item xs={6} md={6} display="flex" justifyContent="center">
                                        <Link href="https://github.com/LeonardoMeneguelli1/front-end-developer-test" style={{ display: "contents", textDecoration: "none" }}>
                                            <StyledButton onClick={() => console.log("view code")}>
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