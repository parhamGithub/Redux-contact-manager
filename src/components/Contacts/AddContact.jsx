import { Helmet } from 'react-helmet-async'

import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Divider } from '@mui/material'

import { AddContactForm } from '../forms/AddContactForm'


export const AddContact = () => {
    return (
        <>
            <Helmet>
                <title>ساخت مخاطب جدید</title>
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
                            ساخت مخاطب جدید
                        </Typography>
                        <Divider sx={{ borderColor: "success.main" }} />
                        <Grid columns={12} container>
                            <Grid xs={12} md={6}>
                                <AddContactForm />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}