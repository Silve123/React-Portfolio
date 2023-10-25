import Nav from './homePage/components/Nav.js'
import Hero from './homePage/components/Hero.js'
import SkillSlider from './homePage/components/SkillSlider';
import Technical from './homePage/components/Technical';
import SkillsProgressBar from './homePage/components/SkillsProgressBar';
import Certificates from './homePage/components/Certificates';
import Footer from './homePage/components/Footer';


function HomePage(){
    return(
        <div className="App">
            <header>
                <Nav/>
            </header>

            <main>
                <Hero/>
                <SkillSlider/>
                <Technical/>
                <SkillsProgressBar/>
                <Certificates/>
                <Footer/>
            </main>
        </div>
    );
}

export default HomePage;