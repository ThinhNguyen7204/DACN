import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Link from 'next/link'
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const menuItems = [
    { text: 'Dashboard', icon: <HomeIcon />, href: '/' },
    { text: 'Danh sách nhân sự', icon: <SettingsSharpIcon />, href: '/employees' },
    { text: 'Cấu trúc tổ chức', icon: <NotificationsSharpIcon />, href: '/organization' },
    { text: 'Cấu trúc tổ chức', icon: <AddCircleIcon />, href: '/organization' },
]

const StickySideBar = () => {

    return (
        <>
            <div
                style={{
                    width: 50,
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
                {/* <IconButton
                    sx={{
                        marginTop: 2,
                        color: "#fff",
                        background: "#254075",
                        "&:hover": { background: "#4e8cff" },
                    }}
                >
                    <MenuIcon />
                </IconButton> */}
                {menuItems.map((item) => (
                    <Link key={item.text} href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItem button>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                        </ListItem>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default StickySideBar 