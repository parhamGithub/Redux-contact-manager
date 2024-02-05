import { Helmet } from 'react-helmet-async'

import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Divider, Box } from '@mui/material'

import { useGetContactQuery } from '../../slices/contactApi'

import { useParams } from 'react-router'

import { EditContactForm } from '../forms/EditContactForm'
import { Spinner } from "../Spinner"


export const EditContact = () => {
    const { contactId } = useParams()
    const { data: contact, isLoading } = useGetContactQuery(contactId)
    console.log(contact)

    let name = ""
    if (!isLoading) {
        name = contact.fullname
    }

    return (
        <>
            <Helmet>
                <title>ویرایش مخاطب {name}</title>
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
                            ویرایش پروفایل {name}
                        </Typography>
                        <Divider sx={{ borderColor: "success.main" }} />
                        {
                            isLoading ? (
                                <Spinner />
                            ) : (
                                <Grid columns={12} container>
                                    <Grid xs={12} md={6}>
                                        <EditContactForm
                                            id={contact.id}
                                            fullname={contact.fullname}
                                            photo={contact.photo}
                                            mobile={contact.mobile}
                                            email={contact.email}
                                            job={contact.job}
                                            group={contact.group}
                                        />
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