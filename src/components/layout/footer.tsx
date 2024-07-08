import { Box, Typography } from "@mui/joy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../src/media/logo_blanco.png";
import { Grid } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#000000", color: "#ffffff", py: 4 }}>
            <Grid container justifyContent="center">
                <Grid item xs={12} textAlign="center">
                    <img src={logo} alt="Logo" style={{ width: 60 }} />
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Grid container justifyContent="center">
                        <Grid item xs={10} md={4}>
                            <Typography level="h4" sx={{ color: "#ffffff", mb: 1 }}>
                                ¿Dónde nos encontramos?
                            </Typography>
                            <Typography sx={{ color: "#ffffff" }}>
                                Dirección: Cra. 15 #3-10, Zipaquirá, Cundinamarca
                            </Typography>
                        </Grid>
                        <Grid item xs={10} md={4}>
                            <Typography level="h4" sx={{ color: "#ffffff", mb: 1 }}>
                                Contáctanos
                            </Typography>
                            <Typography sx={{ color: "#ffffff" }}>
                                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 8 }} />
                                olimpobikes@gmail.com
                            </Typography>
                            <Typography sx={{ color: "#ffffff" }}>
                                <FontAwesomeIcon icon={faPhone} style={{ marginRight: 8 }} />
                                +57 3000000000
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
