import React from "react";
import Header from "../components/Header";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Guide from "../components/Guide";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.scss";

function Home() {
    return (
        <div className={styles.home}>
            <main>
                <Header></Header>
                <CTA></CTA>
                <Features></Features>
                <Guide></Guide>
                <Pricing></Pricing>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Home;