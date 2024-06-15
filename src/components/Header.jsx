import { TextField, IconButton, Badge, Menu, MenuItem, Avatar } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import {useState} from "react";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className="flex justify-between items-center p-4 bg-white ">
            <div className="flex items-center max-w-[250px] w-full px-2 rounded-[10px] bg-[#E8E8E8]">
                <TextField
                    placeholder="Поиск"
                    variant="standard"
                    InputProps={{
                        disableUnderline: true,
                        className: "text-sm text-[#1F384C] bg-transparent"
                    }}
                    className="w-full"
                />
                <IconButton>
                    <SearchIcon className="w-4 h-4" />
                </IconButton>
            </div>
            <div className="flex items-center space-x-4">
                <Badge badgeContent={4} color="error">
                    <NotificationsIcon />
                </Badge>
                <div className="flex items-center space-x-1 cursor-pointer" onClick={handleMenu}>
                    <span>Русский</span>
                    <ArrowDropDownIcon />
                </div>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}

                >
                    <MenuItem onClick={handleClose}>Русский</MenuItem>
                    <MenuItem onClick={handleClose}>English</MenuItem>
                </Menu>
                <div className="flex items-center space-x-2 border-l-2 border-black pl-4">
                    <Avatar alt="Samayryn" src={``} />
                    <span>Samayryn</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
