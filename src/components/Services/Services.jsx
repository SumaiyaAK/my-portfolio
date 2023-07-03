import Design from '../../assets/img/design.png'
import Develpoment from '../../assets/img/Code.webp'
import Send from '../../assets/img/Send.jpg'
import '../Services/Services.css'
const Services = () => {
    return (
        <div className="ServicesBG min-h-screen ">
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center items-center mt-20">
                <div className="Service card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Design} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Design
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p> As a junior web developer, I am enthusiastic about creating visually appealing and user-friendly designs that align with modern trends. I strive to balance creativity and functionality, focusing on delivering engaging websites that leave a lasting impression.while constantly improving my skills in the process.</p>
                        
                    </div>
                </div>
                <div className="Service card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Develpoment} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Develop
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>With a passion for coding and problem-solving, I am constantly expanding my knowledge in web development. As a junior web developer, I am committed to crafting clean and efficient code, implementing best practices, and continuously learning new technologies.</p>
                        
                    </div>
                </div>
                <div className="Service card w-96 bg-base-100 shadow-xl">
                    <figure><img src={Send} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Deliver
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>As a junior web developer, I approach my deliver process with dedication and a strong attention to detail. I actively collaborate with clients, seeking feedback at every stage to ensure their requirements are met.  I am committed to delivering high-quality websites that meet client expectations while constantly improving my skills in the process.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;