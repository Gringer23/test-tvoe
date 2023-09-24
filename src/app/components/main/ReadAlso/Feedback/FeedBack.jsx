import styles from './FeedBack.module.scss'
import {BiSolidMessageRounded} from "react-icons/bi";
import {BsFillBookmarkFill} from "react-icons/bs";

const FeedBack = () => {

    return (
        <div className={styles.FeedBack}>
            <div className={styles.reaction}>
                <div>😍</div>
                <div>23</div>
            </div>
            <div className={styles.reaction}>
                <div>😡</div>
                <span>23</span>
            </div>
            <div className={styles.reaction}>
                <div>💩</div>
                <div>23</div>
            </div>
            <div className={styles.reaction}>
                <div><BiSolidMessageRounded/></div>
                <div>7</div>
            </div>
            <div className={styles.reaction}>
               <div><BsFillBookmarkFill/></div>
                <div>14</div>
            </div>
        </div>
    )
}

export default FeedBack;