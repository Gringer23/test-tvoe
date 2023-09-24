import {SideBarMenuItems} from './SideBarMenuItems';
import SideBarItem from "@/app/components/sidebar/SideBarItem/SideBarItem";
import styles from './SideBar.module.scss';

const SideBar = () => {
    return(
        <ul className={styles.ul}>
            {
                SideBarMenuItems.map(item => (
                    <SideBarItem menu={item} key={item.id}/>
                ))
            }
        </ul>
    )
}

export default SideBar;