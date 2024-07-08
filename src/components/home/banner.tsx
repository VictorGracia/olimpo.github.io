import { Box, Button, Card, CardContent, CardCover, Typography, useTheme } from "@mui/joy";
import { Grid, useMediaQuery } from "@mui/material";
import video from '../../media/ezgif-7-b69c787b64.gif';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Banner = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box sx={{ width: '100vw' }}>
            <Card sx={{ border: "none", boxShadow: "lg", height: '40vh', borderRadius: '0', display: 'flex', alignItems: 'center' }}>
                <CardCover sx={{ boxShadow: "lg", width: '100%', height: '100%' }}>
                    <video autoPlay loop muted poster={video} style={{ width: '100%', height: '100%' }}>
                        <source src={video} type="video/mp4" />
                    </video>
                </CardCover>
                <CardContent sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
                    <Typography level="h1" sx={{ color: '#ffffff', maxWidth: isMobile ? '90%' : '50%', textAlign: 'center', fontSize: isMobile ? '23px' : '' }}>
                        Descubre mantenimientos de calidad para tu bicicleta en OlimpoBikes
                    </Typography>
                    <Button sx={{ background: "#000000", padding: 2, mt: 3, color: "#fafafa", textAlign: "center"}} startDecorator={<CalendarMonthIcon/>}>
                        Agendar mi mantenimiento ahora
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Banner;