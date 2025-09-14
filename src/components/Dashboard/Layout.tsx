import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const drawerWidth = 260


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f7f8fa' }}>
            {/* Sidebar */}
            {open ? (
                <Sidebar open={open} setOpen={setOpen} />
            ) : (
                // Mini sticky bar
                <div
                    style={{
                        width: 100,
                        height: "100vh",
                        background: "#1a2a42",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        position: "sticky",
                        top: 0,
                        zIndex: 1200,
                    }}
                >
                    <IconButton
                        onClick={() => setOpen(true)}
                        sx={{
                            marginTop: 2,
                            color: "#fff",
                            background: "#254075",
                            "&:hover": { background: "#4e8cff" },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
            )}
            {/* Main Content */}
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Topbar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}


export default Layout