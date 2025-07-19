import React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";

interface LayoutProps {
    children:React.ReactNode
}

function Layout({children} : LayoutProps){
    return (
        <Container maxWidth="md">
            <Box sx={{my:5}}>
                {children}
            </Box>
        </Container>
    )
}

export default Layout