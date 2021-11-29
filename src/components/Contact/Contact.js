
import emailjs from 'emailjs-com'

const Contact = () => {
    function sendEmail (e) {
        e.preventDefault();
emailjs.sendEmail('service_4qz1yda', 'template_cl0nxls', e.target, 'user_RtojJJnrXSAI0v87Q7Oye')
.then(res =>{
    console.log(res)
}).catch(error =>{
    console.log(error)
})
    }
    return (
        <div className="container border"
         style={{
                  marginTop: "50px",
                  width: "75%",
                  backgroundImage: "https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
              }}>
              
            <form onSubmit={""}>
              <div className="border mt-5 rounded w-75 mx-auto">
                   <h2 className="text-primary my-4">Contact Me</h2>
                    <div className="mx-auto my-3">
                       <div className="mb-3 w-75 mx-auto text-start">
                         <label for="exampleFormControlInput1" className="form-label">Name </label>
                         <input type="name" name="name" className="form-control" id="exampleFormControlInput1" 
                         placeholder="your name" />
                       </div>
                       <div className="mb-3 w-75 mx-auto text-start">
                         <label for="exampleFormControlInput1" className="form-label">Email </label>
                         <input type="email" name="user_email" className="form-control" id="exampleFormControlInput1" 
                         placeholder="your email" />
                       </div>
                       <div className="mb-3 w-75 mx-auto text-start">
                         <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                         <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                       </div>
                       <a className="bg-primary text-white text-decoration-none p-2 rounded px-4  fs-5 fw-bold">Send</a>
                    </div>
              </div>

            </form>
        </div>
    );
};

export default Contact;