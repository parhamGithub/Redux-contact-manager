import Grid from '@mui/material/Unstable_Grid2'
import {
    TextField,
    Card,
    CardContent,
    CardActions,
    Button,
    MenuItem
} from '@mui/material'

import { useNavigate } from 'react-router'

import { useFormik } from 'formik'
import { contactSchema } from "../../validation/contactValidation"

import {
    useAddContactMutation,
    useGetGroupsQuery
} from '../../slices/contactApi'

import { nanoid } from '@reduxjs/toolkit'


export const AddContactForm = () => {
    const navigate = useNavigate()

    const [addContact] = useAddContactMutation()
    const { data: groups, isLoading } = useGetGroupsQuery()

    const initialContact = {
        id: nanoid(),
        fullname: "",
        photo: "",
        mobile: "",
        email: "",
        job: "",
        group: ""
    }

    const handleSubmitForm = async (contact) => {
        try {
            await addContact(contact)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    const formik = useFormik({
        initialValues: initialContact,
        onSubmit: (values) => {
            handleSubmitForm(values)
        },
        validationSchema: contactSchema
    })

    return (
        <Card>
            <form onSubmit={formik.handleSubmit}>
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid xs={12}>
                            <TextField
                                fullWidth
                                size="small"
                                color="warning"
                                label="نام و نام خانوادگی"
                                name="fullname"
                                helperText={
                                    formik.touched.fullname ?
                                        formik.errors.fullname :
                                        null
                                }
                                error={Boolean(
                                    formik.touched.fullname &&
                                    formik.errors.fullname
                                )}
                                value={formik.values?.fullname}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                fullWidth
                                size="small"
                                color="warning"
                                label="آدرس تصویر"
                                name="photo"
                                helperText={
                                    formik.touched.photo ?
                                        formik.errors.photo :
                                        null
                                }
                                error={Boolean(
                                    formik.touched.photo &&
                                    formik.errors.photo
                                )}
                                value={formik.values?.photo}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                fullWidth
                                size="small"
                                color="warning"
                                label="شماره موبایل"
                                name="mobile"
                                helperText={
                                    formik.touched.mobile ?
                                        formik.errors.mobile :
                                        null
                                }
                                error={Boolean(
                                    formik.touched.mobile &&
                                    formik.errors.mobile
                                )}
                                value={formik.values?.mobile}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                fullWidth
                                size="small"
                                color="warning"
                                label="آدرس ایمیل"
                                name="email"
                                helperText={
                                    formik.touched.email ?
                                        formik.errors.email :
                                        null
                                }
                                error={Boolean(
                                    formik.touched.email &&
                                    formik.errors.email
                                )}
                                value={formik.values?.email}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <TextField
                                fullWidth
                                size="small"
                                color="warning"
                                label="شغل"
                                name="job"
                                helperText={
                                    formik.touched.job ?
                                        formik.errors.job :
                                        null
                                }
                                error={Boolean(
                                    formik.touched.job &&
                                    formik.errors.job
                                )}
                                value={formik.values?.job}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid xs={12}>
                            {
                                !isLoading ? (
                                    <TextField
                                        select
                                        fullWidth
                                        size="small"
                                        color="warning"
                                        label="گروه"
                                        name="group"
                                        helperText={
                                            formik.touched.group ?
                                                formik.errors.group :
                                                null
                                        }
                                        error={Boolean(
                                            formik.touched.group &&
                                            formik.errors.group
                                        )}
                                        value={formik.values?.group}
                                        onChange={formik.handleChange}
                                    >

                                        {groups.map((option) => (
                                            <MenuItem key={option.id} value={option.name}>
                                                {option.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                ) : (null)
                            }
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <Grid container spacing={2}>
                        <Grid>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ backgroundColor: "primary.light" }}
                                disabled={!formik.isValid}
                            >
                                ساخت مخاطب
                            </Button>
                        </Grid>
                        <Grid>
                            <Button
                                type="button"
                                variant="contained"
                                sx={{ backgroundColor: "secondary.main" }}
                                onClick={() => navigate("/")}
                            >
                                انصراف
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </form>
        </Card>
    )
}