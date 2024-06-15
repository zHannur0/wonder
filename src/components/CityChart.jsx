import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area, CartesianGrid } from 'recharts';
import { Box, Select, MenuItem } from '@mui/material';
import {useState} from "react";

const data = [
    { day: 'Пн', turnover: 50000 },
    { day: 'Вт', turnover: 40000 },
    { day: 'Ср', turnover: 70000 },
    { day: 'Чт', turnover: 60000 },
    { day: 'Пт', turnover: 114345 },
    { day: 'Сб', turnover: 90000 },
    { day: 'Вс', turnover: 80000 },
];

const CityChart = () => {
    const [city, setCity] = useState('Алматы');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <Box className="p-4 bg-white rounded-[30px] shadow-xl w-[65%]">
            <Box className="flex justify-between items-center mb-4 ">
                <p className="text-[24px]">Оборачиваемость в днях</p>
                <Select
                    value={city}
                    onChange={handleChange}
                    className="bg-white border rounded-md shadow-sm"
                    displayEmpty
                >
                    <MenuItem value="Алматы">Алматы</MenuItem>
                    <MenuItem value="Нур-Султан">Астана</MenuItem>
                    <MenuItem value="Шымкент">Шымкент</MenuItem>
                </Select>
            </Box>
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorTurnover" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0B2256" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#00287E" stopOpacity={0.8} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} />

                    <XAxis dataKey="day" tickLine={false}/>
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                    <Tooltip formatter={(value) => `${value.toLocaleString()}₸`} />
                    <Area type="linear" dataKey="turnover" stroke="#3366cc" fillOpacity={1} fill="url(#colorTurnover)" />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default CityChart;
