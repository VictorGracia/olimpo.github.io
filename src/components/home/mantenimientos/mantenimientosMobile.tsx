import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { MantinimientoAvanzado, MantinimientoBasico, MantinimientoEspecializado, MantinimientoPrevioCompetencia } from './mantenimientos';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

const data = [
    {
        src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
        title: 'Night view',
        description: '4.21M views',
    },
    {
        src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
        title: 'Lake view',
        description: '4.74M views',
    },
    {
        src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
        title: 'Mountain view',
        description: '3.98M views',
    },
];

export default function CarruselMobile() {
    const [index, setIndex] = React.useState<number | null>(0);
    return (
        <Box >
            <Box sx={{ p: 5, pb:0}}>
                <Typography level="h2">
                    Servicios de mantenimiento
                </Typography>
            </Box>
            <Box sx={{ p: 4 }}>
                <AccordionGroup sx={{ maxWidth: 400 }}>
                    <Accordion
                        expanded={index === 0}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 0 : null);
                        }}
                    >
                        <AccordionSummary sx={{fontWeight:600, fontSize:'18px'}}>Básico</AccordionSummary>
                        <AccordionDetails>
                            <Card orientation="vertical" size="sm" variant="outlined">
                                <MantinimientoBasico />
                            </Card>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={index === 1}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 1 : null);
                        }}
                    >
                        <AccordionSummary sx={{fontWeight:600, fontSize:'18px'}}>Avanzado</AccordionSummary>
                        <AccordionDetails>
                            <Card orientation="vertical" size="sm" variant="outlined">
                                <MantinimientoAvanzado />
                            </Card>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={index === 2}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 2 : null);
                        }}
                    >
                        <AccordionSummary sx={{fontWeight:600, fontSize:'18px'}}>Especializado</AccordionSummary>
                        <AccordionDetails>
                            <Card orientation="vertical" size="sm" variant="outlined">
                                <MantinimientoEspecializado />
                            </Card>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={index === 3}
                        onChange={(event, expanded) => {
                            setIndex(expanded ? 3 : null);
                        }}
                    >
                        <AccordionSummary sx={{fontWeight:600, fontSize:'18px'}}>Previo a competencia</AccordionSummary>
                        <AccordionDetails>
                            <Card orientation="vertical" size="sm" variant="outlined">
                                <MantinimientoPrevioCompetencia />
                            </Card>
                        </AccordionDetails>
                    </Accordion>
                </AccordionGroup>
            </Box>
        </Box>
    );
}
