import Grid from '@mui/material/Unstable_Grid2'
import { Contact } from './'
import { NotFound } from "../NotFound.jsx"
import { useGetContactsQuery } from '../../slices/contactApi.js'


export const Contacts = () => {
    const { data: contacts } = useGetContactsQuery()
    let showContacts
    // console.log(contacts.length)
    if (contacts.length <= 0) {
        showContacts = <NotFound />
    } else {
        showContacts = contacts.map((contact) => (
            <Contact
                key={contact.id}
                name={contact.fullname}
                url={contact.photo}
                id={contact.id}
                mobile={contact.mobile}
                email={contact.email}
            />
        ))
    }

    return (
        <Grid container spacing={6}>
            {
                showContacts
            }
        </Grid>
    )
}