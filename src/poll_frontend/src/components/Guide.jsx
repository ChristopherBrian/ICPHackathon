import React from "react";
import styles from "../styles/Guide.module.scss";

function Guide() {
    const steps = [
        {
          number: 1,
          title: "Create Your Event",
          description: "Set up your event in minutes with our intuitive interface.",
        },
        {
          number: 2,
          title: "Engage Your Audience",
          description: "Launch polls, quizzes, and Q&As to interact with your participants.",
        },
        { number: 3, title: "Analyze Results", description: "Review insights and export data to improve future events." },
    ]

    return (
        <section id="how-it-works" className={styles.howItWorks}>
        <h2>How It Works</h2>
        <div className={styles.steps}>
            {steps.map((step) => (
            <div key={step.number} className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
            </div>
            ))}
        </div>
        </section>
    );
}

export default Guide;