import styles from "./GroupInfo.module.css";
import { allAnimals } from "../../../public/data/animals"
import { groups } from "../../../public/data/groups"

function GroupInfo({groupType}) {
    const group  = groups.find(group => group.type === groupType);
    return (
        <div className={styles.group_info}>
            <h1 className={styles.title}>{groupType}</h1>
            <div className={styles.container}>
                <img src={group.imageFilepath} alt="" />
                <h3 className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis minus nam dolor ipsum at cumque atque mollitia laboriosam repellendus, porro eligendi possimus molestias magnam quasi sunt id libero praesentium nisi quos maiores asperiores fuga laborum! In, tempora amet quis ut error cupiditate dolor ipsam doloribus, iure saepe culpa corporis ullam nesciunt? Atque, eos quisquam a nam quidem sit quos, animi reprehenderit aperiam illo accusamus possimus tenetur, nulla quo dignissimos. Consequuntur neque totam consectetur ratione inventore dignissimos saepe, alias sit nulla eaque, cupiditate labore cumque. Tenetur, non dignissimos, vero sit voluptatum provident beatae exercitationem quisquam dolor iusto harum unde illo illum?.</h3>
            </div>
            
        </div>
    )
}

export default GroupInfo;