import { CircularProgress, Box, Typography } from '@mui/material';

const OrderStatistics = () => {
    return (
        <Box className="bg-white rounded-[30px] shadow-xl w-[35%] p-[20px] space-y-4 mx-auto flex flex-col justify-center">
            <h2 className="text-[24px]">Статистика заказов</h2>
            <Box className="flex items-center justify-center gap-4">
                <Box className="relative">
                    <CircularProgress
                        variant="determinate"
                        value={100}
                        size={145}
                        thickness={4}
                        sx={{ color: 'lightgrey' }}
                    />
                    <CircularProgress
                        variant="determinate"
                        value={0.9}
                        size={145}
                        thickness={4}
                        sx={{ color: '#f44336' }}
                        className="absolute left-0"
                    />
                    <Box className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <Typography className="text-2xl font-semibold text-red-500">0,9%</Typography>
                    </Box>
                </Box>
                <Box className="text-center">
                    <p className="text-[20px] font-bold">58 отменено</p>
                    <p className="text-[13px] text-gray-500">Из 6560 заказов</p>
                </Box>
            </Box>
        </Box>
    );
};

export default OrderStatistics;
