import Grid from '@mui/material/Unstable_Grid2'
import { Button } from '@mui/material'

export const Theme = () => {
    return (
        <>
            <Grid md={4}
                sx={{ display: "flex", justifyContent: "space-around" }}
            >
                <Button variant="contained" sx={{ backgroundColor: "secondary.light", color: "whitesmoke" }}>
                    secondary
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "secondary.main", color: "whitesmoke" }}>
                    secondary
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "secondary.dark", color: "whitesmoke" }}>
                    secondary
                </Button>
            </Grid>
            <Grid md={4}
                sx={{ display: "flex", justifyContent: "space-around" }}
            >
                <Button variant="contained" sx={{ mr: 2, backgroundColor: "primary.light" }}>
                    primary
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "primary.main" }}>
                    primary
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "primary.dark" }}>
                    primary
                </Button>
            </Grid>
            <Grid md={4}
                sx={{ display: "flex", justifyContent: "space-around" }}
            >
                <Button variant="contained" sx={{ mr: 2, backgroundColor: "success.light" }}>
                    success
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "success.main" }}>
                    success
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "success.dark" }}>
                    success
                </Button>
            </Grid>
        </>
    )
}