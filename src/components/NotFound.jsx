import Grid from '@mui/material/Unstable_Grid2'

import { Box, Typography } from "@mui/material"
import NotFoundGif from "../assets/no-found.gif"

export const NotFound = () => {
    console.log("NotFound")
    return (
        <Grid
            xs={12}
            component="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 5
            }}
        >
            <Typography variant="h2" color="initial" pb={1}>
                مخاطب یافت نشد...
            </Typography>
            <Box
                component="img"
                src={NotFoundGif}
                alt="NotFound"
                sx={{ width: "40em" }}
            />
        </Grid>
    )
}