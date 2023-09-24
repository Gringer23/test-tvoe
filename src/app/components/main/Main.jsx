import Lenta from "@/app/components/main/Lenta/Lenta";
import styles from './Main.module.scss'
import Advertising from "@/app/components/main/Advertising/Advertising";
import ReadAlso from "@/app/components/main/ReadAlso/ReadAlso";
import Incidents from "@/app/components/main/Incidents/Incidents";

const Main = () => {
    return(
        <div className={styles.Home}>
            <div className={styles.Main}>
                <Lenta/>
                <Advertising/>
            </div>
            <ReadAlso/>
            <Incidents/>
        </div>
    )
}

export default Main