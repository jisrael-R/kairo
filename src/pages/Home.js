import HeroVid from '../components/HeroVid';
import About from '../components/about';
const Home = () => {
    return (
        <>
            <section className="home-section">
                <div className="hero-video">
                    <HeroVid />
                </div>
                <div className="about-section">
                    <About />
                </div>
            </section>
        </>
    );
};

export default Home;