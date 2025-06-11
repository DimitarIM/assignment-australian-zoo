import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AnimalTab.module.css";

function AnimalTab({NavClicked, SetNavClicked, setPrevIndex, setActiveIndex, activeIndex, animal, location }) {
    const [isActiveState, setActiveState] = useState(false);
    
    useEffect(() => {
        if (animal.id !== activeIndex && NavClicked) {
            setActiveState(false);
            SetNavClicked(false)
        } 
    })

    const activeStyle = animal.id === activeIndex && isActiveState === true ? styles.active : "";
    
    const choosePath = () => {
        return location.pathname === "/" || location.pathname.split("/")[1] !== animal.group.toLowerCase()
            ? isActiveState === false ? `/${animal.id}` : "/"
            : isActiveState === false ? `/${animal.group.toLowerCase()}/${animal.id}` : location.pathname.split("/")[1]
        }

    return (
        <>
            <Link onClick={() => {
                setActiveState(!isActiveState);
                setActiveIndex((currentIndex) => {
                    setPrevIndex(currentIndex);
                    return animal.id;
                })
            }}
                to={choosePath()}
                state={{ animal }}
                className={`${styles.animal_tab} ${activeStyle}`}>
                <img src={`/img/icons/${animal.iconFilename}`} alt="" />
            </Link>
        </>

    )
}

export default AnimalTab;