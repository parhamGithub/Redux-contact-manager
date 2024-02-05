import { Box } from '@mui/material'


export const MainLayout = ({ children }) => {
    return (
        <Box
            sx={{
                backgroundColor: "secondary.dark",
                minHeight: "100vh",
            }}
        >
            {children}
        </Box>
    )
}