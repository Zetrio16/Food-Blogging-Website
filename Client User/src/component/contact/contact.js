import React from 'react';
import Nav from '../Nav/Nav';
import './contact.css';

const contact = () => {
    return(
        <div>
        <div className="page-container padding-large" id="contact">
                    <h1>Contact</h1><br />
                    <p>If you have any suggestions on what our next blog should cover, do not hesitate to contact us.</p>
                    <p className="text-blue-grey large"><b>H11, Islamabad</b></p>
                    <p>You can also contact us by phone 123456789-10 or email foodblog@gmail.com, or you can send us a message here:</p>
                    <form action="/action_page.php" target="_blank">
                        <p><input className="input padding-16" type="text" placeholder="Name" required name="Name" /></p>
                        <p><input className="input padding-16" type="text" placeholder="Food Suggestion and details" required name="Food" /></p>
                        <p><input className="input padding-16" type="text" placeholder="Message / Special Request" required name="Message" /></p>
                        <p><button className="button light-grey section" type="submit">SEND MESSAGE</button></p>
                    </form>
                </div>
        </div>
    );
}

export default contact;