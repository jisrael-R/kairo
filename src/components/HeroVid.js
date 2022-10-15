import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

export default function HeroVid() {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch((error) => {
                console.error('Erro attempting to play', error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return (
        <div className="hero-video">
            <div className="hero-content">
                <div className="hero-section-one">
                    <h1>Multi-Service Company</h1>
                    <h6>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae dolore sunt neque temporibus, error sapiente
                        ut dolores eum cum laboriosam eos accusamus sed ad
                        quisquam harum eveniet. Corrupti, deserunt cum.
                    </h6>
                    <Link to={'/services'} className="hero-btn">
                        Our Services
                    </Link>
                </div>
                <div className="vertical"></div>
                <div className="hero-contact">
                    <h1>Got any Questions?</h1>
                    <h6>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h6>
                    <a href="mailto:info@kairostechservices.com" className="hero-btn">
                        Need Help?
                    </a>
                </div>
            </div>

            <video
                style={{
                    maxWidth: '100%',
                    width: '1800px',
                    margin: '0 auto',
                }}
                playsInline
                loop
                muted
                alt="hero"
                src={
                    'https://res.cloudinary.com/dkokliolj/video/upload/v1665773932/kairos/techy1_cbwjck.mp4'
                }
                ref={videoEl}
            />
        </div>
    );
}
