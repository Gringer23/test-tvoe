import {LentaItems} from "@/app/components/main/Lenta/LentaItems";
import styles from './Lenta.module.scss'
import {BsFillLightningChargeFill} from "react-icons/bs";
import {AiTwotoneFire} from "react-icons/ai";

const Lenta = () => {
    return(
        <div className={styles.Lenta}>
           <h1>Лента</h1>
            <div className={styles.news}>
                {
                    LentaItems.map(item => (
                        <div className={styles.newsItem} key={item.id}>
                            <BsFillLightningChargeFill size={20}/>
                            <div className={styles.newsDesc}>
                                <p>{item.name}</p>
                                <span className={styles.time}>14:59</span>
                                <span className={styles.type}>Политика</span>
                            </div>

                        </div>
                    ))
                }
            </div>
            <div className={styles.runText}>
                <div>
                    <div>
                        <span>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</span>
                        <AiTwotoneFire size={25} color={'#fa5902'}/>
                    </div>
                    <div>
                        <span>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</span>
                        <AiTwotoneFire size={25} color={'#fa5902'}/>
                    </div>
                    <div>
                        <span>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</span>
                        <AiTwotoneFire size={25} color={'#fa5902'}/>
                    </div>
                    <div>
                        <span>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</span>
                        <AiTwotoneFire size={25} color={'#fa5902'}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Lenta;