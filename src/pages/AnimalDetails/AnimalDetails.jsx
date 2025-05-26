import styles from "./AnimalDetails.module.css";
import { useLocation } from "react-router-dom";

function AnimalDetails() {
    const animal = useLocation().state.animal;
    return <div className={styles.animal_details}>
        <h1>{animal.name}</h1>
        <img src={`/img/animals/${animal.imageFilename}`} alt="" />
        <ul>
            <li>{animal.description}</li>
            <li><span>Food: </span> {animal.food}</li>
            <li><span>Lifespan: </span> {animal.lifespan}</li>
            <li><span>Weight: </span> {animal.weight}</li>
            <li><span>Habitat: </span> {animal.habitat}</li>
            <li><span>Group: </span> <a href={`/${animal.group}`}>{animal.group}</a></li>
        </ul>
    </div>
}

export default AnimalDetails;