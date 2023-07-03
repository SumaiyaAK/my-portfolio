import '../Contact/Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="Contact hero-content flex-col lg:flex-row-reverse">

                    <div className="text-center lg:text-left ">

                        <h1 className="text-5xl font-bold">Contact!</h1>
                        <p className="py-6">Feel free to reach out to me through the contact form below. I would love to hear from you and <br></br>discuss how we can collaborate on your next project.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-warning" placeholder="Message"></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-warning btn-wide">Send Email</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;