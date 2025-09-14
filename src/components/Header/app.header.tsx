import { IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
interface IProps {
    open: boolean,
    setOpen: any
}

const Header = (props: IProps) => {
    const { open, setOpen } = props

    return (
        <div style={{ background: "red" }}>
            <IconButton
                onClick={() => setOpen(!open)}
                sx={{
                    marginTop: 2,
                    color: "#fff",
                    background: "#254075",
                    "&:hover": { background: "#4e8cff" },
                }}
            >
                <MenuOpenOutlinedIcon />
            </IconButton>
        </div>
    )
}

export default Header