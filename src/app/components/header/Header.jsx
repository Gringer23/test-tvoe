import styles from './Header.module.scss'
import Menu from "@/app/components/header/header-menu/Menu";
import SearchAndProfile from "@/app/components/header/searchAndProfile/SearchAndProfile";

const Header = () => {

    return (
        <div className={styles.Header}>
            <h1>ЛОГО</h1>
            <Menu/>
            <SearchAndProfile/>
        </div>
    )
}

export default Header