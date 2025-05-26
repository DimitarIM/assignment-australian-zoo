import styles from "./Home.module.css";

function Home() {
    return (
        <>
            <div className={styles.home}>
                <div className={styles.top_content}>
                    <div className={styles.texts}>
                        <h1>Zooland for The New Experience of Joy</h1>
                        <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</h4>
                        <a href="/mammals" className="btn">Click me</a>
                    </div>
                    <img className={styles.background_img} src={"/img/background-img_2.jpg"} alt="" />
                    <div className="overlay"></div>
                    <div className={styles.divider}>
                        <div className={styles.kangaroo}>
                            <img src={"/img/fabulous_kangaroo.png"} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.middle_content}>
                    <div className={styles.card_container}>
                        <div className={styles.card}>
                            <div className="fade"></div>
                            <img src="/img/mammals.jpg" alt="" />
                            <h3 className={styles.title}>Mammals</h3>
                            <a href="/mammals">Learn More &rarr;</a>
                        </div>
                        <div className={styles.card}>
                            <div className="fade"></div>
                            <img src="/img/reptiles.jpg" alt="" />
                            <h3 className={styles.title}>Reptiles</h3>
                            <a href="/reptiles">Learn More &rarr;</a>
                        </div>
                        <div className={styles.card}>
                            <div className="fade"></div>
                            <img src="/img/birds.jpg" alt="" />
                            <h3 className={styles.title}>Birds</h3>
                            <a href="/birds">Learn More &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;