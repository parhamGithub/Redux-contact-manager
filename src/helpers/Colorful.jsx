import Grid from '@mui/material/Unstable_Grid2'


export const Colorful = (WrappedComponent) => {
    const colors = [
        "#FF0000",
        "#355E3B",
        "#0000FF",
        "#3AD274",
    ]

    let randomColor = colors[Math.floor(Math.random() * 4)]

    return (props) => {
        return (
            <Grid xs={12} container sx={{ backgroundColor: randomColor }}>
                <WrappedComponent {...props} />
            </Grid>
        )
    }
}