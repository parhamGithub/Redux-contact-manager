import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { NavBar, NotFound } from "../components"
import { MainLayout } from "../components/layouts/MainLayout"
import { ShowContact, AddContact, EditContact } from "../components/Contacts"
import { Navigate } from "react-router-dom"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/contacts" />,
        errorElement: <NotFound />
    },
    {
        path: "/contacts",
        element: (
            <MainLayout>
                <NavBar />
                <App />
            </MainLayout>
        ),
        errorElement: (
            <MainLayout>
                <NotFound />
            </MainLayout>
        )
    },
    {
        path: "/show-contact/:contactId",
        element: (
            <MainLayout>
                <ShowContact />
            </MainLayout>
        ),
        errorElement: (
            <MainLayout>
                <NotFound />
            </MainLayout>
        )
    },
    {
        path: "/add-contact",
        element: (
            <MainLayout>
                <NavBar />
                <AddContact />
            </MainLayout>
        ),
    },
    {
        path: "/edit-contact/:contactId",
        element: (
            <MainLayout>
                <NavBar />
                <EditContact />
            </MainLayout>
        ),
    }
])