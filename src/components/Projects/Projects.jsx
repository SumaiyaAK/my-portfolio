import project1 from '../../assets/img/BongEats.png'
import project2 from '../../assets/img/ToyDrive.png'
import project3 from '../../assets/img/GlobeLingo.png'
import { Link } from 'react-router-dom';
import '../Projects/Projects.css'

const Projects = () => {
    return (
        <div className="ProjectsBG min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 justify-items-center items-center mt-20 mb-20">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className='w-65 h-80' src={project1} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bong-Eats- A MERN-Stack Website</h2>
                        <p> This project is single page application with firebase base application.<br></br>
                             This project presents Bengali recipes , it  shows different chef’s <br></br>famous recipes details 
                             Users can add recipe to their favorites,<br></br> User authentication with Google, Email</p>
                        <div className="card-actions justify-end">
                            <Link to='https://bong-eats-fb1d0.web.app/'><button className="btn btn-outline btn-warning btn-wide">Live Demo</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className='w-65 h-80' src={project2} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Toy-Drive - A MERN-Stack Website</h2>
                        <p> This project is single page application with firebase <br></br> base application.
                        <br></br>  This project presents car toys market,  where users can see <br></br> details of car toys
                        <br></br>      User can show details of toys, User authentication with Google,<br></br> Email, Firebase</p>
                        <div className="card-actions justify-end">
                            <Link to='https://toy-drive.web.app/login'><button className="btn btn-outline btn-warning btn-wide">Live Demo</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className='w-75 h-80' src={project3} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Globe-Lingo - A Full-Stack Website</h2>
                        <p> This project is single page application with firebase base application
                            <br></br>     This project is a language learning website , users have their <br></br> dashboard to see their class
                            <br></br>       Users can add classes, Admin has their own dashboard<br></br> where they can add courses, remove
                            courses</p>
                        <div className="card-actions justify-end">
                            <Link to='https://globe-lingo.web.app/'><button className="btn btn-outline btn-warning btn-wide">Live Demo</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;