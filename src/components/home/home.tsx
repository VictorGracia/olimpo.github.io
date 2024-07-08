import { Divider, useTheme } from "@mui/joy";
import Banner from "./banner";
import AcercaOlimpoBikes from "./olimpoBikes";
import Mantenimietos from "./mantenimientos/mantenimientosDesktop";
import CarruselMobile from "./mantenimientos/mantenimientosMobile";
import { useMediaQuery } from "@mui/material";
import NuestrosProductos from "./nuestrosProductos";
import Footer from "../layout/footer";

const HomeContent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <>
            <Banner />
            <AcercaOlimpoBikes />
            <Divider sx={{ m: 2 }} />
            {(!isMobile) && (
                <Mantenimietos />
            )}
            {(isMobile) && (
                <CarruselMobile />
            )}
            <Divider sx={{ m: 2 }} />
            <NuestrosProductos/>
            <Divider sx={{ m: 2 }} />
            <Footer/>
            {/* <Ubicacion/> */}
        </>
    );
}

export default HomeContent;