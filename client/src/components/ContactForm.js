import { useState } from 'react'
import emailjs from '@emailjs/browser'
// import emailjs from 'emailjs-com';
import { useRef } from 'react';



const initialState = {
    name: '',
    email: '',
    message: '',
}
export const ContactForm = ({orgId}) => {
    const form = useRef();
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const updateName = (e) => {

        setName(e.target.value)
    }
    const updateEmail = (e) => {

        setEmail(e.target.value)
    }
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(orgId)
     
        
            fetch('/adminorgid/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, name, orgId}),
            })
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    console.log(data)
                })
        
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("SUCCESS!");
                },
                (error) => {
                    console.log(error.text);
                    alert("FAILED...", error);
                }
            );
    }

    return (
        <div class="container">
            <div class="row">
                <div class="col align-self-center">
                    {/* <!-- contact form --> */}
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="background">
                            <div class="container">
                                <div class="screen">
                                    <div class="screen-header">
                                        <div class="screen-header-left">
                                            <div class="screen-header-button close"></div>
                                            <div class="screen-header-button maximize"></div>
                                            <div class="screen-header-button minimize"></div>
                                        </div>
                                        <div class="screen-header-right">
                                            <div class="screen-header-ellipsis"></div>
                                            <div class="screen-header-ellipsis"></div>
                                            <div class="screen-header-ellipsis"></div>
                                        </div>
                                    </div>
                                    <div class="screen-body">
                                        <div class="screen-body-item left">

                                            <div class="app-title">
                                                <span>SEND INVITE</span>
                                                <span></span>
                                            </div>
                                            <br></br><br></br>
                                            <h4>Please enter the information of whom you are inviting</h4>
                                            <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                                        </div>
                                        <div class="screen-body-item">
                                            <div class="app-form">

                                                <div class="app-form-group">
                                                    <input class="app-form-control" type='text' name="user_name" placeholder="NAME" onChange={updateName} required />
                                                </div>

                                                <div class="app-form-group">
                                                    <input class="app-form-control" type='email' name='user_email' placeholder="EMAIL" onChange={updateEmail} required />
                                                </div>

                                                <div class="app-form-group message">
                                                    <textarea class="app-form-control" name='message' placeholder="MESSAGE" value='Please join me in collaborating on Pringle Mingle' />
                                                </div>

                                                <div class="app-form-group buttons">
                                                    <button class="app-form-button">CANCEL</button>
                                                    <button tpye='submit' class="app-form-button">SEND</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}