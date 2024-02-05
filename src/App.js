import Grid from '@mui/material/Unstable_Grid2'
import { Button } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint'

import { Helmet } from "react-helmet-async"
import { useNavigate } from 'react-router-dom'
import { useGetContactsQuery } from "./slices/contactApi"

import { Contacts } from "./components/Contacts/"
import { Spinner } from './components/Spinner'


const App = () => {
  const navigate = useNavigate()

  const {
    isLoading: getLoading,
    isSuccess: getSuccess
  } = useGetContactsQuery()

  let showContacts
  if (getLoading) {
    showContacts = <Spinner />
  } else if (getSuccess) {
    showContacts = <Contacts />
  } else {
    showContacts = null
  }

  return (
    <>
      <Helmet>
        <title>وبسایت مدیریت مخاطبین</title>
      </Helmet>
      <Grid container width={1}>
        <Grid xs={12}
          component="header"
          pt={3}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "primary.light" }}
            onClick={() => navigate("/add-contact")}
          >
            ساخت مخاطب جدید
            <ControlPointIcon />
          </Button>
        </Grid>
        <Grid xs={12} component="main">
          {
            showContacts
          }
        </Grid>
      </Grid>
    </>
  )
}

export default App