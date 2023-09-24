import styles from './Advertising.module.scss';

const Advertising = () => {
    return(
        <div className={styles.Advertising}>
            <div className={styles.title}>
                <div className={styles.link}>Ссылка на сайт</div>
                <p>РЕКЛАМА</p>
            </div>
            <div className={styles.main}>
                <span>Реклама</span>
            </div>
            <div className={styles.footer}>
                <p>Текст длинного рекламного объявления</p>
            </div>
        </div>
    )
}

export default Advertising;