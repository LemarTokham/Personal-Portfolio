import React from "react";
import Box from "@mui/material/Box";

interface LayoutProps {
    children:React.ReactNode
}

function Layout({children} : LayoutProps){
    return (

            <Box sx={{my:5}}>
                {children}
            </Box>
    )
}

export default Layout