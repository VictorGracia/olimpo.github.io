import { Box, Typography, Button, useTheme, AspectRatio } from '@mui/joy';
import { Grid, useMediaQuery } from '@mui/material';

const MantinimientoBasico = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box>
            <Grid container>
                {(!isMobile) && (
                    <Grid item xs={6}>
                        {/* <AspectRatio ratio="1" sx={{ minWidth: 60, maxHeight: 40, pr: 5 }}>
                            <img
                                src={`https://images.unsplash.com/photo-1502657877623-f66bf489d236`}
                            />
                        </AspectRatio> */}
                    </Grid>
                )}
                <Grid item xs={isMobile ? 12 : 6}>
                    <Typography level='h3' mb={3} color='primary'>
                        Mantenimiento básico
                    </Typography>
                    <Typography>
                        Nuestro servicio de mantenimiento básico es esencial para mantener tu bicicleta en óptimas condiciones de funcionamiento. Realizamos ajustes precisos en cambios y frenos para garantizar un rendimiento suave y seguro en cada paseo. Además, lubricamos la cadena y revisamos minuciosamente todos los componentes para detectar y solucionar cualquier problema potencial. Confía en nosotros para mantener tu bicicleta en su mejor forma, lista para tus aventuras en cualquier momento.
                    </Typography>
                    <Typography color='primary' fontSize="xl3" fontWeight="bold" mt={2}>
                        $36.000{' '}
                        <Typography component='span' color='primary' fontSize="sm" fontWeight="medium">
                            － COP
                        </Typography>
                    </Typography>
                    <Box mt={2}>
                        <Button sx={{ background: "#000000" }}>
                            Agendar mi mantenimiento básico ahora
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

const MantinimientoAvanzado = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box>
            <Grid container>
            {(!isMobile) && (
                    <Grid item xs={6}>
                        {/* <AspectRatio ratio="1" sx={{ minWidth: 60, maxHeight: 40, pr: 5 }}>
                            <img
                                src={`https://images.unsplash.com/photo-1502657877623-f66bf489d236`}
                            />
                        </AspectRatio> */}
                    </Grid>
                )}
                <Grid item xs={isMobile ? 12 : 6}>
                    <Typography level='h3' mb={3} color='primary'>
                        Mantenimiento avanzado
                    </Typography>
                    <Typography>
                        Nuestro servicio de mantenimiento avanzado va más allá para ofrecerte una experiencia de conducción excepcional. Realizamos ajustes detallados en cambios y frenos, asegurando un rendimiento óptimo en todas las condiciones. Además, llevamos a cabo una limpieza profunda de todos los componentes para eliminar la suciedad y prolongar la vida útil de tu bicicleta. Con una verificación meticulosa de la tensión de los radios, garantizamos una conducción suave y segura en cada kilómetro.
                    </Typography>
                    <Typography color='primary' fontSize="xl3" fontWeight="bold" mt={2}>
                        $36.000{' '}
                        <Typography component='span' color='primary' fontSize="sm" fontWeight="medium">
                            － COP
                        </Typography>
                    </Typography>
                    <Box mt={2}>
                        <Button sx={{ background: "#000000" }}>
                            Agendar mi mantenimiento avanzado ahora
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

const MantinimientoEspecializado = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box>
            <Grid container>
            {(!isMobile) && (
                    <Grid item xs={6}>
                        {/* <AspectRatio ratio="1" sx={{ minWidth: 60, maxHeight: 40, pr: 5 }}>
                            <img
                                src={`https://images.unsplash.com/photo-1502657877623-f66bf489d236`}
                            />
                        </AspectRatio> */}
                    </Grid>
                )}
                <Grid item xs={isMobile ? 12 : 6}>
                    <Typography level='h3' mb={3} color='primary'>
                        Mantenimiento especializado
                    </Typography>
                    <Typography>
                        Nuestro servicio de mantenimiento especializado se adapta a tus necesidades individuales y preferencias de conducción. Ya sea que seas un entusiasta de la montaña, ciclista de carretera o urbano, personalizamos ajustes y lubricación para maximizar tu comodidad y eficiencia en cada viaje. Con nuestro enfoque meticuloso y atención al detalle, puedes confiar en nosotros para mantener tu bicicleta en perfectas condiciones, listas para cualquier aventura que te depare el camino.
                    </Typography>
                    <Typography color='primary' fontSize="xl3" fontWeight="bold" mt={2}>
                        $36.000{' '}
                        <Typography component='span' color='primary' fontSize="sm" fontWeight="medium">
                            － COP
                        </Typography>
                    </Typography>
                    <Box mt={2}>
                        <Button sx={{ background: "#000000" }}>
                            Agendar mi mantenimiento especializado ahora
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

const MantinimientoPrevioCompetencia = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box>
            <Grid container>
                 {(!isMobile) && (
                    <Grid item xs={6}>
                        {/* <AspectRatio ratio="1" sx={{ minWidth: 60, maxHeight: 40, pr: 5 }}>
                            <img
                                src={`https://images.unsplash.com/photo-1502657877623-f66bf489d236`}
                            />
                        </AspectRatio> */}
                    </Grid>
                )}
                <Grid item xs={isMobile ? 12 : 6}>
                    <Typography level='h3' mb={3} color='primary'>
                        Mantenimiento previo a competencia
                    </Typography>
                    <Typography>
                        Nuestra inspección previa a la competición es fundamental para los ciclistas serios que buscan el máximo rendimiento. Realizamos ajustes específicos, comprobamos el estado de los neumáticos, frenos y transmisión, y garantizamos que tu bicicleta esté en su mejor forma para enfrentar cualquier desafío en la competición. Con nuestra experiencia y atención meticulosa a cada detalle, puedes confiar en nosotros para preparar tu bicicleta para el éxito en la carretera o en la pista.
                    </Typography>
                    <Typography color='primary' fontSize="xl3" fontWeight="bold" mt={2}>
                        $36.000{' '}
                        <Typography component='span' color='primary' fontSize="sm" fontWeight="medium">
                            － COP
                        </Typography>
                    </Typography>
                    <Box mt={2}>
                        <Button sx={{ background: "#000000" }}>
                            Agendar mi mantenimiento previo a competencia ahora
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export { MantinimientoBasico, MantinimientoAvanzado, MantinimientoEspecializado, MantinimientoPrevioCompetencia };
