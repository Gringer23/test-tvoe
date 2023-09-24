import styles from './Footer.module.scss'
import {BsTelegram} from "react-icons/bs";

const Footer = () => {
    return(
        <div className={styles.Footer}>
            <div className={styles.logo}>
                <h1>ЛОГО</h1>
                <p>© НАЗВАНИЕ 2023. Все права защищены</p>
            </div>
            <div className={styles.info}>
              <div className={styles.contacts}>
                  <p>Контакты</p>
                  <p>Редакция</p>
              </div>
                <div className={styles.polytics}>
                    <p>Политика конфиденциальности</p>
                    <p>Условия использования</p>
                    <p>Реклама</p>
                </div>
                <div className={styles.asking}>
                    <p>По любым вопросам пишите на <a>privet@yandex.com</a></p>
                    <div className={styles.socialLink}>
                        <BsTelegram size={20}/><p>Подписаться</p>
                    </div>

                </div>
            </div>
            <div className={styles.offerNews}>
               <button>
                   Предложить новость
               </button>
            </div>
        </div>
    )
}

export default Footer