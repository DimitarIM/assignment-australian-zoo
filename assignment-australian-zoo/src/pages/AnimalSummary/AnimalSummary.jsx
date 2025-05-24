import styles from "./AnimalSummary.module.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function AnimalSummary() {
    const animal = useLocation().state.animal;
    const [isActive, setActive] = useState(false);
    const ToggleMenu = () => setActive(!isActive);
    return (
        <>
            <div className={!isActive ? styles.animal_summary : styles.animal_summary_hidden}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{animal.name}</h1>
                    <img className={styles.animal_img} src={`/img/animals/${animal.imageFilename}`} alt="" />
                </div>

                <ul>
                    <li>{animal.description.substring(0,200)}</li>
                    <li><span>Food: </span>{animal.food}</li>
                    <li><span>Group: </span> <a href={`/${animal.group}`}>{animal.group}</a></li>
                </ul>
                <button className={styles.menu_button} onClick={ToggleMenu}>Button</button>

            </div>

            <div className={isActive ? styles.animal_details_menu : styles.animal_details_menu_hidden}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{animal.name}</h1>
                    <img className={styles.animal_img} src={`/img/animals/${animal.imageFilename}`} alt="" />
                </div>
                <ul>
                    <li>{animal.description}</li>
                    <li><span>Food: </span> {animal.food}</li>
                    <li><span>Lifespan: </span> {animal.lifespan}</li>
                    <li><span>Weight: </span> {animal.weight}</li>
                    <li><span>Habitat: </span> {animal.habitat}</li>
                    <li><span>Group: </span> <a href={`/${animal.group}`}>{animal.group}</a></li>
                </ul>
                <button className={styles.menu_button} onClick={ToggleMenu}>Button</button>
            </div>
        </>
        


    )
}

export default AnimalSummary;