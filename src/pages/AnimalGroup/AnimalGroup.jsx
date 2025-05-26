import GroupInfo from "../../components/GroupInfo/GroupInfo";
import styles from "./AnimalGroup.module.css";

function AnimalGroup({groupType}) {
    return (
        <>
            <div className={styles.animal_group}>
                {
                    <GroupInfo groupType = {groupType}/>
                }
            </div>
        </>
    )
}

export default AnimalGroup;