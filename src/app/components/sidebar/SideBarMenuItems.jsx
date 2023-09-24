import {BsFillLightningFill} from "react-icons/bs";
import {SiBitcoinsv} from "react-icons/si";
import {IoHome} from "react-icons/io5";
import {MdHomeRepairService, MdOutlineComputer} from "react-icons/md";
import {BiBookBookmark, BiTrendingUp} from "react-icons/bi";
import {PiTentBold, PiWarningCircleFill} from "react-icons/pi";
import {AiFillStar} from "react-icons/ai";
import {IoIosFootball} from "react-icons/io";
import {GiFirstAidKit, GiLargeDress} from "react-icons/gi";
import {GrAnalytics} from "react-icons/gr";
import {FaCarRear} from "react-icons/fa6";

export const SideBarMenuItems = [
    {
        id: 0,
        name: 'Лента',
        pic: <BsFillLightningFill size={25}/>,
        isActive: true
    },
    {
        id: 1,
        name: 'Происшествия',
        pic: <PiWarningCircleFill size={25}/>,
    },
    {
        id: 2,
        name: 'Авто',
        pic: <FaCarRear size={25}/>,
    },
    {
        id: 3,
        name: 'Бизнес',
        pic: <MdHomeRepairService size={25}/>,
    },
    {
        id: 4,
        name: 'Здоровье',
        pic: <GiFirstAidKit size={25}/>,
    },
    {
        id: 5,
        name: 'Крипто',
        pic: <SiBitcoinsv size={25}/>,
    },
    {
        id: 6,
        name: 'Недвижимость',
        pic: <IoHome size={25}/>,
    },
    {
        id: 7,
        name: 'Образование',
        pic: <BiBookBookmark size={25}/>,
    },
    {
        id: 8,
        name: 'Политика',
        pic: <BiTrendingUp size={25}/>,
    },
    {
        id: 9,
        name: 'Туризм',
        pic: <PiTentBold size={25}/>,
    },
    {
        id: 10,
        name: 'Шоу-бизнес',
        pic: <AiFillStar size={25}/>,
    },
    {
        id: 11,
        name: 'Спорт',
        pic: <IoIosFootball size={25}/>,
    },
    {
        id: 12,
        name: 'Стиль',
        pic: <GiLargeDress size={25}/>,
    },
    {
        id: 13,
        name: 'Наука и технологии',
        pic: <MdOutlineComputer size={25}/>,
    },
    {
        id: 14,
        name: 'Экономика',
        pic: <GrAnalytics size={25}/>,
    }
]