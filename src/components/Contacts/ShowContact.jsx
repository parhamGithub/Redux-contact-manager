import { useParams } from "react-router"

import Grid from '@mui/material/Unstable_Grid2'
import { Box, Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material"

import { useGetContactQuery } from "../../slices/contactApi"

import { useNavigate } from "react-router"
import { Helmet } from "react-helmet-async"
import { Spinner } from "../Spinner"


export const ShowContact = () => {
    const { contactId } = useParams()

    const { data: contact, isLoading } = useGetContactQuery(contactId)

    const navigate = useNavigate()

    console.log(contact, isLoading)

    let name = ""
    if (!isLoading) {
        name = contact.fullname
    }

    return (
        <>
            <Helmet>
                <title>نمایش مخاطب</title>
            </Helmet>
            <Grid container component="main" width={1}>
                <Grid xs={12} sx={{ paddingTop: "1em", paddingX: "20%" }}>
                    <Grid xs={12} component="header">
                        <Typography variant="h4"
                            sx={{
                                textAlign: "center",
                                color: "success.main",
                                pb: 2
                            }}>
                            نمایش مخاطب {name}
                        </Typography>
                        <Divider sx={{ borderColor: "success.main" }} />
                        {
                            isLoading ? (
                                <Spinner />
                            ) : (
                                <Grid columns={12} container>
                                    <Grid xs={12} md={6}>
                                        <Card>
                                            <CardContent>
                                                <Grid container spacing={4}>
                                                    <Grid xs={12}>
                                                        <Typography variant="body1" color="whitesmoke">
                                                            نام و نام خانوادگی: {contact.fullname}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid xs={12}>
                                                        <Typography variant="body1" color="whitesmoke">
                                                            موبایل: {contact.mobile}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid xs={12}>
                                                        <Typography variant="body1" color="whitesmoke">
                                                            ایمیل: {contact.email}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid xs={12}>
                                                        <Typography variant="body1" color="whitesmoke">
                                                            شغل: {contact.job}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid xs={12}>
                                                        <Typography variant="body1" color="whitesmoke">
                                                            گروه: {contact.group}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <CardActions
                                                sx={{ display: "flex", justifyContent: "center" }}
                                            >
                                                <Grid container spacing={2}>
                                                    <Grid>
                                                        <Button
                                                            size="large"
                                                            type="button"
                                                            variant="contained"
                                                            sx={{ backgroundColor: "secondary.main" }}
                                                            onClick={() => navigate("/")}
                                                        >
                                                            بازگشت به صفحه مخاطبین
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <Box
                                            component="img"
                                            src={contact.photo}
                                            alt={contact.fullname}
                                            sx={{
                                                width: 576
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>

    )
}