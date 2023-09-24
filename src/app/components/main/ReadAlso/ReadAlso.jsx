import styles from './ReadAlso.module.scss';
import FeedBack from "@/app/components/main/ReadAlso/Feedback/FeedBack";
import {ReadItems} from "@/app/components/main/ReadAlso/ReadItems/ReadItems";
import {GrFormNext} from "react-icons/gr";


const ReadAlso = () => {
    return(
       <div className={styles.ReadAlso}>
           <div className={styles.title}>
               <h1 style={{paddingRight: '10px'}}>Читайте также</h1>
               <GrFormNext size={28}/>
           </div>
           <div className={styles.ReadItems}>
               {
                   ReadItems.map(item => (
                       <div className={styles.readItem} key={item.id}>
                           <div className={styles.header}>
                               <span className={styles.type}>{item.type}</span>
                               <span className={styles.time}>1.01.2023, 13:53</span>
                           </div>
                           <div>{item.name}</div>
                           <div className={styles.feedBack}>
                               <FeedBack/>
                           </div>

                       </div>
                   ))
                }
           </div>
       </div>
    )
}

export default ReadAlso;