import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Features.module.scss";

function Features() {
    const navigate = useNavigate();

    const features = [
        { icon: "📊", title: "Live Polling", description: "Engage your audience with real-time polls.", path: "/live-polling" },
        { icon: "💬", title: "Q&A Sessions", description: "Facilitate interactive Q&A sessions.", path: "/qa-sessions" },
        { icon: "📈", title: "Audience Insights", description: "Gain valuable insights into your audience.", path: "/audience-insights" },
    ];
    
    return (
        <section id="features" className={styles.features}>
            <h2>Features</h2>
            <div className={styles.featureList}>
                {features.map((feature, index) => (
                    <button 
                        key={index} 
                        className={styles.featureItem} 
                        onClick={() => navigate(feature.path)}
                    >
                        <span className={styles.icon}>{feature.icon}</span>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Features;