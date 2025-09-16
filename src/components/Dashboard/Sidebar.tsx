"use client";

import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider, IconButton, useColorScheme } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PolicyIcon from "@mui/icons-material/Policy";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const SIDEBAR_WIDTH = 210;

const menuItems = [
    { text: "Danh sách nhân sự", icon: <PeopleIcon /> },
    { text: "Hợp đồng lao động", icon: <AssignmentIcon /> },
    { text: "Quy định & chính sách", icon: <PolicyIcon /> },
    { text: "Thành tựu & cống hiến", icon: <EmojiEventsIcon /> },
    { text: "Chính sách C&B", icon: <AttachMoneyIcon /> },
];

interface IProps {
    open: boolean,
    setOpen: (v: boolean) => void
}

export default function AdminSidebar(props: IProps) {
    const { open, setOpen } = props
    const { mode, setMode } = useColorScheme();

    return (
        <Drawer
            // variant="persistent"
            open={open}
            sx={{
                width: open ? SIDEBAR_WIDTH : 50,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: SIDEBAR_WIDTH,
                    boxSizing: "border-box",
                    background: mode === 'dark' ? "#1a2a42" : "grey",
                    color: "#fff",
                    transition: "width 0.3s",
                },
            }}
        >
            <Toolbar sx={{ justifyContent: "flex-end" }}>
                <IconButton onClick={() => setOpen(false)} sx={{ color: "#fff" }}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <List>
                {menuItems.map((item) => (
                    <ListItem button key={item.text}>
                        <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Divider sx={{ borderColor: "#2d3e5e" }} />
        </Drawer>
    );
}