import styles from './Incidents.module.scss'
import {GrFormNext} from "react-icons/gr";
import FeedBack from "@/app/components/main/ReadAlso/Feedback/FeedBack";
import {IncidentsItems} from "@/app/components/main/Incidents/IncidentsItems/IncidentsItems";
import Image from "next/image";


const Incidents = () => {
    return(
        <div className={styles.Incidents}>
            <div className={styles.title}>
                <h1 style={{paddingRight: '10px'}}>Происшествия</h1>
                <GrFormNext size={28}/>
            </div>
            <div className={styles.IncidentsItems}>
                {
                    IncidentsItems.map(item => (
                        <div className={styles.IncidentsItem} key={item.id}>
                            <Image src={item.pic}/>
                            <div className={styles.info}>
                                <div className={styles.time}>1.01.2023, 13:53</div>
                                <div>{item.name}</div>
                                <div className={styles.feedBack}>
                                    <FeedBack/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Incidents;