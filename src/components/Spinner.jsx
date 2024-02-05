import Grid from '@mui/material/Unstable_Grid2'
import SpinnerGif from "../assets/Spinner.gif"
import { Box } from '@mui/material'


export const Spinner = () => {
    return (
        <Grid
            sx={{ display: "flex", justifyContent: "center" }}
        >
            <Box
                component="img"
                src={SpinnerGif}
                alt="Spinner"
            />
        </Grid>
    )
}