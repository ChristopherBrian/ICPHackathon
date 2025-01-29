import React from 'react';
import styles from '../styles/CTA.module.scss';

function CTA() {
    return (
        <section className={styles.CTA}>
            <h1>Engage Your Audience Like Never Before</h1>
            <p>
                Create interactive presentations, polls, and Q&As that captivate your audience and provide real-time insights.
            </p>
            <form className={styles.ctaForm}>
                <button type="submit">Get Started</button>
            </form>
            <p className={styles.trialInfo}>Start your free trial. No credit card required.</p>
        </section>
    );
}

export default CTA;