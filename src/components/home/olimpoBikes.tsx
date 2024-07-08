import { Box, Typography, styled } from "@mui/joy";
import { Grid } from "@mui/material";
import img from '../../media/pexels-run-ffwpu-18424637.jpg';

const AcercaOlimpoBikes = () => {
    const Img = styled("img")({
        width: '100%',
        height: '100%', // Ajusta la altura dinámicamente
        objectFit: "scale-down",
        pt:5
    });
    return (
        <Box sx={{ p: 5 }}>
            <Typography level="h2">
                Olimpobikes
            </Typography>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ textAlign: 'justify', pt: 5 }}>
                        ¡Bienvenido a Olimpo, tu destino completo para el mundo de las bicicletas! Con más de cinco años de experiencia dedicada, en Olimpo no solo ofrecemos una cuidada selección de bicicletas de alta calidad y accesorios. También somos especialistas en mantenimiento de bicicletas. Nuestro equipo altamente capacitado está comprometido con brindar servicios excepcionales, desde ajustes básicos hasta reparaciones especializadas. Fusionamos la venta de productos de primera categoría con un servicio de mantenimiento experto, asegurando que cada ciclista encuentre todo lo necesario para una experiencia ciclista inigualable. Descubre el mundo del ciclismo con nosotros y pedalea hacia la excelencia en Olimpo.
                    </Typography>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                    <Box sx={{ height: '100%'}}>
                        <Img src={img} alt="" />
                    </Box>
                </Grid> */}
            </Grid>
        </Box>
    );
}

export default AcercaOlimpoBikes;