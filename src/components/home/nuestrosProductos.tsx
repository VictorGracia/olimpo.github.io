import { AspectRatio, Box, Typography } from "@mui/joy";
import { Grid } from "@mui/material";
import Shimano from '../../media/shimano.jpeg';

const NuestrosProductos = () => {
    return (
        <Box pb={5}>
            <Grid container spacing={3}>
                {Array.from(Array(4).keys()).map((index) => (
                    <Grid item xs={6} md={3} key={index} sx={{display:"flex", justifyContent:"center"}}>
                        <AspectRatio ratio="1" sx={{ width: 120, height: 60 }}>
                            <img
                                src={Shimano}
                                style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#ffffff' }}
                                alt={`Marca ${index + 1}`}
                            />
                        </AspectRatio>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default NuestrosProductos;
