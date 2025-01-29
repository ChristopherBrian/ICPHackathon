import React from "react"
import styles from "../styles/Pricing.module.scss"

function Pricing() {
    const plans = [
        {
          name: "Basic",
          price: "$19/mo",
          features: ["Up to 100 participants", "Basic polling features", "Limited analytics"],
        },
        {
          name: "Pro",
          price: "$49/mo",
          features: ["Up to 500 participants", "Advanced polling features", "Full analytics suite"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: ["Unlimited participants", "Custom features", "Dedicated support"],
        },
    ]
    
    return (
        <section id="pricing" className={styles.pricing}>
        <h2>Pricing Plans</h2>
        <div className={styles.plans}>
            {plans.map((plan, index) => (
            <div key={index} className={styles.plan}>
                <h3>{plan.name}</h3>
                <p className={styles.price}>{plan.price}</p>
                <ul>
                {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                ))}
                </ul>
                <button>Choose {plan.name}</button>
            </div>
            ))}
        </div>
        </section>
    );
}

export default Pricing;