import { allAnimals, mammals, reptiles, birds } from "../../../public/data/animals";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./Sidebar.module.css";
import AnimalTab from "../AnimalTab/AnimalTab";

function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    let location = useLocation();

    function locationChecker(location) {
        switch (location.pathname) {
            case "/mammals": case `/mammals/${location.pathname.split("/")[2]}`:
                return (
                    mammals.map(animal => {
                        return <AnimalTab key={animal.id} setPrevIndex={setPrevIndex} setActiveIndex = {setActiveIndex}  prevIndex = {prevIndex} activeIndex = {activeIndex} animal = {animal} location={location}/>
                    })
                )

            case "/reptiles": case `/reptiles/${location.pathname.split("/")[2]}`:
                return (
                    reptiles.map(animal => {
                        return <AnimalTab key={animal.id} setPrevIndex={setPrevIndex} prevIndex = {prevIndex} setActiveIndex = {setActiveIndex}activeIndex = {activeIndex} animal = {animal} location={location}/>
                    })
                )

            case "/birds": case `/birds/${location.pathname.split("/")[2]}`:
                return (
                    birds.map(animal => {
                        return <AnimalTab key={animal.id} setPrevIndex={setPrevIndex} setActiveIndex = {setActiveIndex}  prevIndex = {prevIndex} activeIndex = {activeIndex} animal = {animal} location={location}/>
                    })
                )

            default:
                return (
                    allAnimals.map(animal => {
                        return <AnimalTab key={animal.id} setPrevIndex={setPrevIndex} setActiveIndex = {setActiveIndex}  prevIndex = {prevIndex} activeIndex = {activeIndex} animal = {animal} location={location}/>
                    })
                )
        }
    }

    return (
        <div className={styles.sidebar}>
            {
                locationChecker(location)
            }
        </div>
    )
}

export default Sidebar;