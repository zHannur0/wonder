import { Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Logo2 from '../assets/images/logo2.svg';

const Footer = () => {
    return (
        <Box className="bg-[#191A1B] text-white w-full">
            <Box className="container mx-auto flex justify-between items-start h-[250px] px-[10%] py-[1%]  ">
                <Box className={`flex flex-col justify-between h-full`}>
                    <Box >
                        <Box className="flex items-center mb-2">
                            <LocationOnIcon style={{ color: '#EF7214' }} />
                            <p className="text-lg">Алматы, ул. Масанчи 23/1</p>
                        </Box>
                        <Box className="flex items-center mb-2">
                            <LocationOnIcon style={{ color: '#EF7214' }} />
                            <p className="text-lg">Астана, ул. Жубанова 31, 2 этаж, 201 офис</p>
                        </Box>
                    </Box>
                    <Box className="flex items-center mb-2">
                        <PhoneIcon style={{ color: '#EF7214' }} />
                        <p className="text-lg">+7 (747) 231-52-29</p>
                    </Box>
                </Box>
                <Box className="flex flex-col h-full items-start justify-between w-[15%]">
                    <Box className="flex space-x-4 w-full">
                        <Box className={`flex justify-center rounded-full bg-[#F0F1F3] p-1`}>
                            <WhatsAppIcon style={{ color: '#EF7214' }} />
                        </Box>
                        <Box className={`flex justify-center rounded-full bg-[#F0F1F3] p-1`}>
                        <InstagramIcon style={{ color: '#EF7214' }} />
                        </Box>
                        <Box className={`flex justify-center rounded-full bg-[#F0F1F3] p-1`}>
                        <TelegramIcon style={{ color: '#EF7214' }} />
                        </Box>

                    </Box>
                    <p className="text-[13px]">
                        Wander Fulfillment © Все права защищены. Любая информация, представленная на данном сайте,
                        носит исключительно информационный характер, не является публичной офертой.
                    </p>
                    <p className="text-[12px] font-bold">Политика конфиденциальности</p>
                </Box>
            </Box>
            <Box className={"bg-[#EF7214] flex justify-center"}>
                <img src={Logo2} alt=""/>
            </Box>
        </Box>
    );
};

export default Footer;
