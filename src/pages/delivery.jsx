import DeliveryTable from "../components/DeliveryTable.jsx";
import Layout from "../components/layout.jsx";
import instruction from "../assets/images/instruction.svg";
import {Box, Button, IconButton, Menu, MenuItem, TextField, Typography} from "@mui/material";
import {Add, Search as SearchIcon} from "@mui/icons-material";
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useState} from "react";

function DeliveryPage() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Layout>
            <img src={instruction} alt="" className={`w-full`}/>
            <div className={`w-full bg-black flex justify-between p-[15px] border-b border-white items-center`}>
                <div className={"flex gap-2"}>
                    <div className="flex items-center max-w-[250px] w-full px-2 bg-[white] rounded-[20px]">
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
                            <SearchIcon className="w-4 h-4"/>
                        </IconButton>
                    </div>
                    <Button
                        onClick={handleClick}
                        sx={{
                            backgroundColor: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingX: 2,
                            paddingY: 1,
                            borderRadius: '24px',
                            boxShadow: 1,
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: 'white',
                                boxShadow: 1,
                            }
                        }}
                    >
                        <FilterListIcon sx={{ color: '#FF5722' }} />
                        <Typography sx={{ marginLeft: 1, color: 'black' }}>Действующие</Typography>
                        <ArrowDropDownIcon sx={{ marginLeft: 1, color: 'black' }} />
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Samayryn 1</MenuItem>
                        <MenuItem onClick={handleClose}>Samayryn 2</MenuItem>
                        <MenuItem onClick={handleClose}>Samayryn 3</MenuItem>
                    </Menu>
                    </div>

                <button className={`w-full max-w-[190px] bg-[#EF7214] flex items-center p-4 rounded-[15px] text-white font-bold text-[15px]`}>
                    <Add color={"white"}/>
                    <p>Создать поставку</p>
                </button>
            </div>
            <DeliveryTable/>
        </Layout>
    );
}

export default DeliveryPage;