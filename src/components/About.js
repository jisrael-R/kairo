import { useState } from 'react';
import HeroData from '../hero-data';

const About = () => {
    const [data, setData] = useState(HeroData);
    return (
        <section>
            <div className="service-title">
                <h1>About us</h1>
                <div className="underline"></div>
            </div>
            <div className="about-content">
                {data.map((item) => {
                    return (
                        <article key={item.id} className="about-card">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};
export default About;