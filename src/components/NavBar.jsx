import Grid from '@mui/material/Unstable_Grid2'

import { Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'

import { Colorful } from '../helpers/Colorful'


const NavBar = () => {
    return (
        <Grid xs={12} container component="nav">
            <Grid xs={5}
                sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
                py={2}
            >
                <Typography
                    variant="h4"
                    component="div"
                    color="initial">
                    <PersonIcon
                        sx={{
                            color: "primary.main",
                            display: "inline",
                            fontSize: "1em"
                        }}
                    />
                    وب اپلیکیشن مدیریت {" "}
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{ color: "primary.main", display: "inline" }}
                    >
                        مخاطبین
                    </Typography>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Colorful(NavBar)