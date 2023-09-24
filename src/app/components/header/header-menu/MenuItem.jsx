import styles from './MenuItem.module.scss'

const MenuItem = ({menu, key}) => {
    return(
        <div className={styles.MenuItem} key={key}>
            <div className={styles.icon}>{menu.pic}</div>
            <div className={styles.item}>{menu.item}</div>
        </div>
    )
}

export default MenuItem;