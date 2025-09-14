import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Box, Avatar } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MenuIcon from '@mui/icons-material/Menu'


const Topbar: React.FC = () => {
    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                bgcolor: '#ffffff',
                borderBottom: '1px solid #e0e0e0',
                color: '#333',
                px: 2,
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Left - Menu button (mobile) */}
                <Box sx={{ display: { sm: 'none' } }}>
                    <IconButton edge="start">
                        <MenuIcon />
                    </IconButton>
                </Box>


                {/* Middle - Title */}
                <Typography variant="h6" fontWeight="bold">Dashboard</Typography>


                {/* Right - Actions */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                    <Avatar alt="User" src="/avatar.png" sx={{ width: 32, height: 32 }} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}


export default Topbar