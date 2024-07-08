import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import { Box } from '@mui/joy';
import { MantinimientoAvanzado, MantinimientoBasico, MantinimientoEspecializado, MantinimientoPrevioCompetencia } from './mantenimientos';

const Mantenimietos = () => {
    return (
        <Box sx={{ p: 5 }}>
            <Typography level="h2">
                Servicios de mantenimiento
            </Typography>
            <Tabs
                variant="outlined"
                aria-label="Pricing plan"
                defaultValue={0}
                sx={{
                    borderRadius: 'lg',
                    boxShadow: 'sm',
                    overflow: 'auto',
                    mt: 5
                }}
            >
                <TabList
                    disableUnderline
                    tabFlex={1}
                    sx={{
                        [`& .${tabClasses.root}`]: {
                            fontSize: 'sm',
                            fontWeight: 'lg',
                            [`&[aria-selected="true"]`]: {
                                color: 'primary.500',
                                bgcolor: 'background.surface',
                            },
                            [`&.${tabClasses.focusVisible}`]: {
                                outlineOffset: '-4px',
                            },
                        },
                    }}
                >
                    <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
                        Básico
                    </Tab>
                    <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
                        Avanzado
                    </Tab>
                    <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
                        Especializado
                    </Tab>
                    <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
                        Inspección previa a competencia
                    </Tab>
                </TabList>
                <TabPanel value={0}>
                    <MantinimientoBasico />
                </TabPanel>
                <TabPanel value={1}>
                    <MantinimientoAvanzado />
                </TabPanel>
                <TabPanel value={2}>
                    <MantinimientoEspecializado />
                </TabPanel>
                <TabPanel value={3}>
                    <MantinimientoPrevioCompetencia />
                </TabPanel>
            </Tabs>
        </Box>
    );
}


export default Mantenimietos;