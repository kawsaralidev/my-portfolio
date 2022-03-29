import emailjs from "emailjs-com";
import { Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm("service_bsqaip9", "template_v9k4qnn", e.target, "user_RtojJJnrXSAI0v87Q7Oye")
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
        e.target.reset();

        alert("message send successfully");
    }

    return (
        <div style={{ backgroundColor: "rgb(22, 22, 22)" }}>
            <div className="container   ">
                <div className="contact py-5">
                    <h1 className="text-color ">Contact With Me</h1>
                    <span></span>
                </div>
                <div className="row py-5 ">
                    <div className="col-lg-5">
                        <img className="contact-img" src="https://i.ibb.co/Xk4QLHp/contact1.png" alt="" />
                        <div className="text-start text-white">
                            <h3 className="mt-3">Hire Me</h3>

                            <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                            <span>
                                Phone: <span style={{ color: "#ff3019", fontWeight: "400" }}> 01644014663</span>
                            </span>
                            <br />
                            <span>
                                Email:
                                <span style={{ color: "#ff3019", fontWeight: "400" }}> mdkawsarali346@gmail.com</span>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <form onSubmit={sendEmail}>
                            <div className="border  rounded w-75 mx-auto">
                                <h2 className="text-white pt-4">Contact Me</h2>
                                <div className="mx-auto p-4">
                                    <div className="mb-3 w-100 mx-auto text-start">
                                        <label for="exampleFormControlInput1" className="form-label text-white">
                                            Name
                                        </label>
                                        <input
                                            type="name"
                                            name="name"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="your name"
                                        />
                                    </div>
                                    <div className="mb-3 w-100 mx-auto text-start">
                                        <label for="exampleFormControlInput1" className="form-label text-white">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="your email"
                                        />
                                    </div>
                                    <div className="mb-3 w-100  mx-auto text-start">
                                        <label for="exampleFormControlTextarea1" className="form-label text-white">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                        ></textarea>
                                    </div>
                                    <Button type="submit" className="niche-btn">
                                        Send Message
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
