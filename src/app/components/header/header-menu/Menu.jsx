import {BsCalendarEvent, BsCurrencyBitcoin, BsCurrencyDollar, BsCurrencyEuro} from "react-icons/bs";
import MenuItem from "@/app/components/header/header-menu/MenuItem";
import styles from './Menu.module.scss'

export const MenuItems = [
    {
        id: 0,
        item: 'ПН, 4.08.2023',
        pic: <BsCalendarEvent/>,
        desc: 'Сегодня'
    },
    {
        id: 1,
        item: 96.34,
        pic: <BsCurrencyDollar/>,
        desc: 'Курс доллара к рублю'
    },
    {
        id: 2,
        item: 104.61,
        pic: <BsCurrencyEuro/>,
        desc: 'Курс евро к рублю'
    },
    {
        id: 3,
        item: 25.725,
        pic: <BsCurrencyBitcoin/>,
        desc: 'Курс биткоина'
    }
]

const Menu = () => {

    return(
       <div className={styles.Menu}>
           {
               MenuItems.map(item => (
                   <MenuItem menu={item} key={item.id}/>
               ))
           }
       </div>
    )
}

export default Menu;