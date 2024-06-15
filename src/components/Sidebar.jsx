import homeIcon from '../assets/icons/home.svg';
import orderIcon from '../assets/icons/order.svg';
import productsIcon from '../assets/icons/product.svg';
import listIcon from '../assets/icons/list.svg';
import storageIcon from '../assets/icons/warehouse.svg';
import deliveryIcon from '../assets/icons/delivery.svg';
import statisticsIcon from '../assets/icons/statistics.svg';
import botIcon from '../assets/icons/bot.svg';
import helpIcon from '../assets/icons/help.svg';
import settingsIcon from '../assets/icons/settings.svg';
import logo from '../assets/images/logo.svg';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-full max-w-[300px] bg-[#191A1B] flex flex-col items-center gap-[35px] p-[25px] min-h-[100vh]">
            <img src={logo} alt="logo" className="w-full max-w-[200px] " />
            <div className="flex flex-col gap-[20px]">
                {sidebar.map((item, index) => (
                    <Link to={item.link} key={index} className="w-full">
                    <div className="flex items-end gap-[20px]">
                        <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <p className="text-white text-[18px]">{item.title}</p>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    sidebar: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const sidebar = [
    {
        title: 'Главная страница',
        icon: homeIcon,
        link: '/'
    },
    {
        title: 'Заказы',
        icon: orderIcon,
        link: '/'
    },
    {
        title: 'Товары',
        icon: productsIcon,
        link: '/'
    },
    {
        title: 'Список товаров',
        icon: listIcon,
        link: '/'
    },
    {
        title: 'Склады',
        icon: storageIcon,
        link: '/'
    },
    {
        title: 'Поставка',
        icon: deliveryIcon,
        link: '/delivery'
    },
    {
        title: 'Статистика',
        icon: statisticsIcon,
        link: '/statistics'
    },
    {
        title: 'Бот',
        icon: botIcon,
        link: '/'
    },
    {
        title: 'Помощь',
        icon: helpIcon,
        link: '/'
    },
    {
        title: 'Настройка',
        icon: settingsIcon,
        link: '/'
    }
];

export default Sidebar;
