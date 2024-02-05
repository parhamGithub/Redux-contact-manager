import Grid from '@mui/material/Unstable_Grid2'
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Tooltip,
    IconButton,
    CardActionArea,
    Divider,
} from '@mui/material'
import { Delete, VisibilityOutlined, Edit } from '@mui/icons-material'

import { useNavigate } from 'react-router'
import { confirmAlert } from 'react-confirm-alert'

import { useDeleteContactMutation } from "../../slices/contactApi"

import { ConfirmDelete } from '../forms/ConfirmDelete'


export const Contact = ({ name, url, mobile, email, id }) => {
    const navigate = useNavigate()
    const [deleteContact] = useDeleteContactMutation()

    const handleDelete = async () => {
        await deleteContact(id)
    }

    const confirmDelete = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <ConfirmDelete
                        name={name}
                        photo={url}
                        onClose={onClose}
                        handleDelete={handleDelete}
                    />
                )
            }
        })
    }

    return (
        <Grid xs={12} lg={6}
            component="section"
            sx={{
                display: "flex",
                justifyContent: "center",
                pb: 5,
            }}
        >
            <Card
                sx={{
                    width: 700,
                    height: 200,
                    backgroundColor: "secondary.main",
                    padding: 2
                }}>
                <CardActionArea component="section">
                    <Grid columns={12} container>
                        <Grid xs={4}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={url}
                                alt={name}
                            />
                        </Grid>
                        <Grid xs={7} pl={4}>
                            <CardContent
                                sx={{
                                    height: 160,
                                    display: "flex",
                                    flexDirection: "column",
                                    backgroundColor: "primary.main",
                                    color: "black"
                                }}
                            >
                                <Typography variant="h7" pb={2}>
                                    نام و نام خانوادگی: {name}
                                </Typography>
                                <Divider sx={{ borderColor: "gray" }} />
                                <Typography variant="h7" py={2}>
                                    شماره موبایل: {mobile}
                                </Typography>
                                <Divider sx={{ borderColor: "gray" }} />
                                <Typography variant="h7" pt={2}>
                                    آدرس ایمیل: {email}
                                </Typography>

                            </CardContent>
                        </Grid>
                        <Grid xs={1}>
                            <CardActions
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                }}>
                                <Tooltip title="مشاهده">
                                    <IconButton onClick={() =>
                                        navigate(`/show-contact/${id}`)
                                    }>
                                        <VisibilityOutlined color="success" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="ویرایش">
                                    <IconButton onClick={() =>
                                        navigate(`/edit-contact/${id}`)
                                    }>
                                        <Edit />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="خذف">
                                    <IconButton
                                        onClick={() => confirmDelete()}
                                    >
                                        <Delete color="error" />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Card>
        </Grid>
    )
}