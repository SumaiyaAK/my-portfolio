import '../About/About.css'
import Github from '../../assets/img/github.png';
import LinkedIn from '../../assets/img/linkedin.png';
import vector1 from '../../assets/img/Vector1.png'
import vector2 from '../../assets/img/Vector2.png'

const About = () => {
    return (
        <div>
            <div className="aboutBG hero min-h-screen bg-base-200">
                <div className="about hero-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold">About Me</h1>
                        <p className="py-6 font-semibold text-blue">Hello! My name is Sumaiya Akhter, and I am passionate about Web Development. I have always been curious about the world around me and have a deep love for learning. I have dedicated myself to becoming a professional web developer.
                        </p>
                        <div className="stats shadow">

                            <div className="stat">
                                <div className="stat-figure text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </div>
                                <div className="stat-title">Education</div>
                                <div className="stat-value text-primary">BA</div>
                                <div className="stat-desc">Passing year: 2021</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div className="stat-title">Contact</div>
                                <div className="stat-value text-secondary">Email</div>
                                <div className="stat-desc">sumaiya.srn@gmail.com</div>
                                
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    {/* <div className="avatar online">
                                        <div className="w-16 rounded-full">
                                            
                                        </div>
                                    </div> */}
                                </div>
                                <div className="stat-title">Active</div>
                                <div className="stat-value">Freelance</div>
                                
                                <div className="stat-title">Available</div>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;