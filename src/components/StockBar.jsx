import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    CartesianGrid,
} from 'recharts';
import { Box } from '@mui/material';

const data = [
    { month: 'Январь', turnover: 8000 },
    { month: 'Февраль', turnover: 7000 },
    { month: 'Март', turnover: 7000 },
    { month: 'Апрель', turnover: 9000 },
    { month: 'Май', turnover: 8000 },
    { month: 'Июнь', turnover: 10000 },
    { month: 'Июль', turnover: 14345 },
    { month: 'Август', turnover: 8500 },
    { month: 'Сентябрь', turnover: 9000 },
    { month: 'Октябрь', turnover: 7500 },
    { month: 'Ноябрь', turnover: 8000 },
    { month: 'Декабрь', turnover: 10000 },
];

const StockBar = () => {
    return (
        <Box className="p-4 bg-white rounded-[30px] shadow-xl w-[60%] space-y-4">
            <h2 className="text-2xl ">Оборачиваемость запасов</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} barSize={20   }>
                    <defs>
                        <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1A8CB0" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#0C546B" stopOpacity={0.8}/>
                            <stop offset="100%" stopColor="#0B3B4A" stopOpacity={0.8}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false}/>
                    <XAxis dataKey="month" tickLine={false} />
                    <YAxis tickFormatter={(value) => `${value / 1000}k`} ticks={[5000, 8000, 10000]} axisLine={false} tickLine={false} />
                    <Tooltip formatter={(value) => `${value.toLocaleString()}₸`} />
                    <Bar dataKey="turnover" fill="url(#colorA)" />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default StockBar;
