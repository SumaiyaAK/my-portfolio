import myphoto from '../../assets/MyPhoto/photo.png'

import '../Home/Home.css'
import BG from '../../assets/img/BG.jpeg'
import glasses from '../../assets/img/glasses.png'
import Crown from '../../assets/img/crown.png'
import Floatingdiv from '../Floatingdiv/Floatingdiv';
import Resume from '../Home/SUMAIYA AKHTER (Update Resume).pdf'

const Home = () => {
    return (
        <div>
            <div className="Portfolio  hero min-h-screen bg-base-200">
                <div className="background  hero-content flex-col lg:flex-row"  >

                    <div style={{ top: '-4%', left: '68%' }}>
                        <Floatingdiv image={Crown} txt1='Web' txt2='Developer'></Floatingdiv>
                    </div>

                    <img src={myphoto} className="max-w-xs rounded-lg pl-10 ml-10" />

                    <div>
                        <div className='wrapper'>
                            <div className='static-Text'>
                                <h1 className="text-5xl font-bold">Hy, I'm </h1>
                            </div>
                            <div className='dynamic-text'>
                                <h1 className="text-5xl font-bold">Sumaiya</h1>
                            </div>
                        </div>

                        <p className="py-6 text-black-600 font-semibold">I am a dedicated junior web developer with a strong foundation in HTML, CSS, and JavaScript. I possess experience in building responsive web interfaces and working with frameworks like React and Vue.js. I am eager to contribute my skills and collaborate with experienced professionals to create innovative web solutions.</p>
                        <a href={Resume} download><button className="btn btn-wide">Get Resume</button></a>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Home;