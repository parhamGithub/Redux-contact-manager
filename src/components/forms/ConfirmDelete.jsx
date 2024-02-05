import {
    Backdrop,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    Tooltip,
    Typography
} from "@mui/material"


export const ConfirmDelete = ({ name, photo, onClose, handleDelete }) => {
    return (
        <Backdrop
            sx={{ zIndex: 1000 }}
            open={true}
        >
            <Grid xs={12} lg={6}
                component="section"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Card
                    sx={{
                        width: 400,
                        height: 700,
                        backgroundColor: "#43475A",
                        padding: 2
                    }}>
                    <CardActionArea component="section">
                        <Grid columns={12} container>
                            <Grid xs={12}>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={photo}
                                    alt={name}
                                />
                            </Grid>
                            <Grid xs={12}>
                                <CardContent
                                    sx={{
                                        height: 90,
                                        backgroundColor: "#BD93F9",
                                        color: "black"
                                    }}
                                >
                                    <Divider sx={{ borderColor: "gray" }} />
                                    <Typography variant="h5" py={2}>
                                        مطمعنی می‌خوای {name} رو پاک کنی؟
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid xs={12}>
                                <CardActions>
                                    <Tooltip title="آره مطمعنم">
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: "#FF5B01",
                                                width: 1,
                                                ":hover": {
                                                    backgroundColor: "red"
                                                }
                                            }}
                                            onClick={() => {
                                                handleDelete()
                                                onClose()
                                            }}
                                        >
                                            بله!
                                        </Button>
                                    </Tooltip>
                                    <Tooltip title="به هیچ عنوان">
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: "gray",
                                                width: 1
                                            }}
                                            onClick={onClose}
                                        >
                                            خیر
                                        </Button>
                                    </Tooltip>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Card>
            </Grid>
        </Backdrop>
    )
}