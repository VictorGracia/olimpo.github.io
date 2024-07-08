import { Grid, useMediaQuery } from "@mui/material";
import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Menu from '@mui/icons-material/Menu';
import HeaderMobile from "./headerMobile/headerMobile";
import { Divider, Typography } from "@mui/joy";
import LogoImage from '../../../media/logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderComponent = () => {
    const isMobile = useMediaQuery('(max-width: 600px)');
    const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
    const [open, setOpen] = React.useState(false);
    const GridItemCommonStyle = {
        display: "flex", justifyContent: "center", alignItems: "center"
    }
    return (
        <>
            {(isMobile || isTablet) && (
                <>
                    <Box p={3}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Box sx={{display:"flex", flexWrap:"wrap"}}>
                                    <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
                                        <Menu />
                                    </IconButton>
                                    <Box sx={{ width: '50px', pl:2}}>
                                        <img src={LogoImage} alt="Logo" style={{ width: '50px' }} />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sx={{display:"flex", justifyContent:"right"}}>
                                <Typography level="body-sm" >
                                    <IconButton>
                                        <ShoppingCartIcon />
                                    </IconButton>
                                </Typography>
                            </Grid>
                        </Grid>


                        <Drawer open={open} onClose={() => setOpen(false)}>
                            <HeaderMobile />
                        </Drawer>
                    </Box>
                    <Divider />
                </>
            )}
            {(!isMobile && !isTablet) && (
                <>
                    <Box sx={{ height: "8vh", boxShadow: "lg", display: "flex", alignItems: "center" }}>
                        <Grid container>
                            <Grid item xs={3} >
                                <Box pl={2}>
                                    <img src={LogoImage} alt="Logo" style={{ width: '50px' }} />
                                </Box>
                            </Grid>
                            <Grid item xs={2} sx={GridItemCommonStyle}>
                                <Box>
                                    <Typography level="body-md" sx={{ textAlign: "center", fontWeight:600 }}>
                                        Tienda
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2} sx={GridItemCommonStyle}>
                                <Box>
                                    <Typography level="body-md" sx={{ textAlign: "center", fontWeight:600 }}>
                                        Mantenimientos
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2} sx={GridItemCommonStyle}>
                                <Box>
                                    <Typography level="body-md" sx={{ textAlign: "center", fontWeight:600 }}>
                                        Acerca de nosotros
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2} sx={GridItemCommonStyle}>
                                <Box>
                                    <Typography level="body-md" sx={{ textAlign: "center", fontWeight:600 }}>
                                        Contacto
                                    </Typography>
                                </Box>
                            </Grid>
                            <Divider />
                            <Grid item xs={1} sx={GridItemCommonStyle}>
                                <Box>
                                    <Typography level="body-md" sx={{ textAlign: "center" }}>
                                        <IconButton
                                        >
                                            <ShoppingCartIcon />
                                        </IconButton>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </>
            )}
        </>
    );
}
export default HeaderComponent;