import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar, CartesianGrid } from 'recharts';
import { Box, Typography } from '@mui/material';

const data = [
    { day: 'Пн', stock: 320 },
    { day: 'Вт', stock: 200 },
    { day: 'Ср', stock: 120 },
    { day: 'Чт', stock: 400 },
    { day: 'Пт', stock: 350 },
    { day: 'Сб', stock: 220 },
    { day: 'Вс', stock: 456 },
];

const ProductChart = () => {
    return (
        <Box className="p-4 bg-white rounded-[30px] shadow-md w-[40%] space-y-4">
            <Typography className="text-xl font-semibold mb-4">Остаток товаров</Typography>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} barSize={30}>
                    <defs>
                        <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="100%" stopColor="#DE5126" />
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="day"  tickLine={false}/>
                    <YAxis axisLine={false} tickLine={false} ticks={[100, 200, 300, 400]}/>
                    <Tooltip formatter={(value) => `${value}`} />
                    <Bar dataKey="stock" fill="url(#colorStock)" />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default ProductChart;
