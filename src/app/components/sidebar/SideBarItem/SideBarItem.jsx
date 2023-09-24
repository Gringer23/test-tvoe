import styles from './SideBarItem.module.scss';

const SideBarItem = ({menu, key}) => {
    return (
        <>
            {
                menu.isActive === true ? (
                    <li className={styles.active} key={key}>
                        <div className={styles.icon}>{menu.pic}</div>
                        <span className={styles.name}>{menu.name}</span>
                    </li>
                ) : (
                    <li className={styles.SideBarItem} key={key}>
                        <div className={styles.icon}>{menu.pic}</div>
                        <span className={styles.name}>{menu.name}</span>
                    </li>
                )
            }
        </>
    )
}

export default SideBarItem;