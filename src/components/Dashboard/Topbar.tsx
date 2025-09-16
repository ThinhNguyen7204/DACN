'use client'

import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MenuIcon from '@mui/icons-material/Menu'
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
    useColorScheme,
} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
    const [age, setAge] = React.useState('');
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null

    const handleChange = (event: SelectChangeEvent) => {
        const selectedMode = event.target.value
        setMode(selectedMode as 'light' | 'dark' | 'system')
    };

    return (
        <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="label-select-light-dark-mode">Mode</InputLabel>
            <Select
                labelId="label-select-light-dark-mode"
                id="select-light-dark-mode"
                value={mode}
                label="Mode"
                onChange={handleChange}
            >
                <MenuItem value="light">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LightModeIcon fontSize='small' /> Light
                    </Box>
                </MenuItem>
                <MenuItem value="dark">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <DarkModeOutlinedIcon fontSize='small' /> Dark
                    </Box>
                </MenuItem>
                <MenuItem value="system">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SettingsBrightnessIcon fontSize='small' /> System
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    );
}

function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null

    return (
        <Button
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light');
            }}
        >
            {mode === 'light' ? 'Turn dark' : 'Turn light'}
        </Button>
    );
}


const Topbar: React.FC = () => {
    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                bgcolor: '#ffffff',
                borderBottom: '1px solid #e0e0e0',
                color: '#333',
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
                <ModeToggle />
                <ModeSelect />

                {/* Right - Actions */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                    <Avatar alt="User" src="" sx={{ width: 32, height: 32 }} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}


export default Topbar