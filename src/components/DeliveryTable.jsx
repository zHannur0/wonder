import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, } from '@mui/material';
import download from '../assets/icons/download.svg';

const deliveries = [
    { id: 54859621, city: 'Алматы', submitDate: '15.03.24', receiveDate: '20.03.24', status: 'В пути' },
    { id: 85452563, city: 'Астана', submitDate: '15.03.24', receiveDate: '20.03.24', status: 'Идет приемка' },
    { id: 84759623, city: 'Астана', submitDate: '14.03.24', receiveDate: '21.03.24', status: 'Принято' },
    { id: 25634785, city: 'Алматы', submitDate: '13.03.24', receiveDate: '21.03.24', status: 'Принято' },
    { id: 56232547, city: 'Шымкент', submitDate: '11.03.24', receiveDate: '22.03.24', status: 'В пути' },
    { id: 58965412, city: 'Шымкент', submitDate: '15.03.24', receiveDate: '22.03.24', status: 'Идет приемка' },
    { id: 36587545, city: 'Алматы', submitDate: '14.03.24', receiveDate: '23.03.24', status: 'Принято' },
    { id: 45785623, city: 'Астана', submitDate: '10.03.24', receiveDate: '23.03.24', status: 'Принято' },
    { id: 25452365, city: 'Шымкент', submitDate: '12.03.24', receiveDate: '23.03.24', status: 'Принято' },
    { id: 78456255, city: 'Астана', submitDate: '11.03.24', receiveDate: '23.03.24', status: 'Принято' },
];

const DeliveryTable = () => {
    return (
        <TableContainer component={Paper} sx={{ borderRadius: '0px' }}>
            <Table>
                <TableHead>
                    <TableRow className = {`bg-black`}>
                        <TableCell sx={{ color: 'white' }}>Номер поставки</TableCell>
                        <TableCell sx={{ color: 'white' }}>Город</TableCell>
                        <TableCell sx={{ color: 'white' }}>Дата подачи</TableCell>
                        <TableCell sx={{ color: 'white' }}>Дата приема</TableCell>
                        <TableCell sx={{ color: 'white' }}>Статус</TableCell>
                        <TableCell sx={{ color: 'white' }}>Отчет</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {deliveries.map((delivery) => (
                        <TableRow key={delivery.id}>
                            <TableCell>{delivery.id}</TableCell>
                            <TableCell>{delivery.city}</TableCell>
                            <TableCell>{delivery.submitDate}</TableCell>
                            <TableCell>{delivery.receiveDate}</TableCell>
                            <TableCell sx={{display: `flex`}}>
                <div
                    className={`flex rounded-[10px] px-3 py-1 border border-black items-center gap-[5px]`}
                >
                    <div className={`rounded-full w-2 h-2 ${getStatusColor(
                        delivery.status
                    )}`}>

                    </div>
                  {delivery.status}
                </div>
                            </TableCell>
                            <TableCell >
                                <img src={download} alt=""/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const getStatusColor = (status) => {
    switch (status) {
        case 'В пути':
            return 'bg-[#1982C4]';
        case 'Идет приемка':
            return 'bg-[#BD4089]';
        case 'Принято':
            return 'bg-[#8AC926]';
        default:
            return 'bg-[#8AC926]';
    }
};

export default DeliveryTable;
