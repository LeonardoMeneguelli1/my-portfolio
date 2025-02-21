import { Box, Container, Divider, Grid, styled, Typography, useMediaQuery } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from 'framer-motion';

const About = () => {
    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "50px",
        paddingBottom: "50px",

        [theme.breakpoints.up("xs")]: {// <= mobile
            paddingTop: "0px",
        },
        [theme.breakpoints.up("md")]: {// <= desktop
            paddingTop: "0px",
        },
    }));

    const Card = styled(Box)(({ theme }) => ({
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "10px",
        borderColor: "#e0e0e0",
        padding: "20px",
        textAlign: "center",
        width: "100%",
        minWidth: "200px",
        maxWidth: "300px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        transition: "0.3s",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        },

        [theme.breakpoints.down("md")]: {// <= mobile
            marginBottom: "20px",
        },
        [theme.breakpoints.up("md")]: {// <= desktop
            marginBottom: "0px",
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
        <StyledAbout id="about">
            <Container maxWidth="lg">
                <Typography pt={10} color="primary" variant="h2" textAlign="center" mb={4}>
                    About me
                </Typography>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={3} display="flex" justifyContent="center">
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            variants={leftCardVariants}
                        >
                            <Card>
                                <WorkIcon fontSize="large" color="primary" />
                                <Typography variant="h6" fontWeight="bold">Experience</Typography>
                                <Typography>1+ years</Typography>
                                <Typography>Full stack Development</Typography>
                            </Card>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={3} display="flex" justifyContent="center">
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            variants={rightCardVariants}
                        >
                            <Card>
                                <SchoolIcon fontSize="large" color="primary" />
                                <Typography variant="h6" fontWeight="bold">Education</Typography>
                                <Typography>Bachelor's Degree</Typography>
                                <Typography>Systems Analyst</Typography>
                            </Card>
                        </motion.div>
                    </Grid>
                </Grid>
                <Typography variant="body1" mt={4} sx={{ wordBreak: "break-word", overflowWrap: "break-word" }}>
                    I am a Front-End Developer passionate about creating intuitive and responsive interfaces. I have one year of experience as a Full Stack Developer, which has given me a broad understanding of web development. I am always looking to improve my skills and stay up to date with new technologies. Additionally, I value strong teamwork, believing that collaboration is essential for building innovative and efficient solutions.                </Typography>

                <Divider sx={{ my: 3, borderColor: "#e0e0e0", borderBottomWidth: 3 }} />

                <Box id="skills" sx={{ mt: 4, textAlign: "center" }}>
                    <Typography variant="h2" color="primary.main">Skills</Typography>
                    <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
                        {[
                            "Javascript", "Typescript", "React", "Next", "Git", "Laravel", "PHP", "HTML",
                            "CSS", "AWS", "Material UI", "Figma"
                        ].map((skills, index) => (
                            <Grid item xs={6} sm={4} md={2} key={index}>
                                <Box
                                    sx={{
                                        border: "1px solid",
                                        borderColor: "#e0e0e0",
                                        borderRadius: "5px",
                                        padding: "10px 20px",
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        transition: "0.3s",
                                        "&:hover": {
                                            backgroundColor: "secondary.light",
                                        }
                                    }}
                                >
                                    {skills}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </StyledAbout>
    );
};

export default About;