import React from 'react'
import '../../Styles/ContactDetails.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function ContactDetails() {
    return (
        <div className='ContactDetails'>
            <div className="container">
                <h2>YOU CAN REACH US AT...</h2>
                <hr />
                <div className="row">
                    <div className="col">
                        <h3>Give Us A Call</h3>
                        <div className="text">
                            <span><FontAwesomeIcon icon={faPhone} /></span><p>(858) 652-1810</p>
                        </div>

                        <h3>Send Us An Email</h3>
                        <div className="text">

                            <span><FontAwesomeIcon icon={faEnvelope} /></span><p>ashmithkacheri138@gmail.com</p>
                        </div>

                        <h3>Location</h3>
                        <div className="text">
                            <span><FontAwesomeIcon icon={faLocationDot} /></span><p>Krishnalayam <br /> Thalassery,kerala <br /> 10-012</p>

                        </div>
                    </div>
                    <div className="col form">
                        <form >
                            <div>
                                <input type="text" id="name" placeholder='Name' />
                            </div>
                            <div>
                                <input type="email" id="email" placeholder='Email' />
                            </div>
                            <div>
                                <input type="text" id="phone" placeholder='Phone' />
                            </div>
                            <div>
                                <textarea id="message" placeholder='Message' />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails