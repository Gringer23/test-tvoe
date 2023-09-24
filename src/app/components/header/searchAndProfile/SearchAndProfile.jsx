import {IoSearchCircle} from "react-icons/io5";
import {FaUserCircle} from "react-icons/fa";
import styles from './SearchAndProfile.module.scss'

const SearchAndProfile = () => {
    return (
        <div className={styles.SearchAndProfile}>
            <div className={styles.search}>
                <IoSearchCircle size={44}/>
            </div>
            <div className={styles.profile}>
                <FaUserCircle size={36}/>
            </div>

        </div>

    )
}

export default SearchAndProfile;