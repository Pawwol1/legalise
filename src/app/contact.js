import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from 'react-i18next'



export default function Contact() {

    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const { name, email, subject, message } = state;

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const { t } = useTranslation()

    const [result, setResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!name || !email || !subject || !message) {
            toast.error(t(`contact.error`));
        } else {
            setState({ name: "", email: "", subject: "", message: "" });
            toast.success(t(`contact.success`));
            emailjs.sendForm('service_44f3ine', 'template_ut97fyf', e.target, 'kb8IgiLg2X4MDuf_y')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset();
            setResult(true);
            setTimeout(() => {
                setResult(false)
            }, 8000)
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <ToastContainer position="top-center" />
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="wrapper">
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <div className="contact-wrap w-100 p-lg-5 p-4">
                                        <h3 className="mb-4">{t(`contact.send_message_text`)}</h3>
                                        <form
                                            id="contactForm"
                                            className="contactForm"
                                            onSubmit={sendEmail}
                                        >
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="name"
                                                            placeholder={t(`contact.name`)}
                                                            onChange={handleInputChange}
                                                            value={name}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            name="email"
                                                            placeholder={t(`contact.email`)}
                                                            onChange={handleInputChange}
                                                            value={email}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="subject"
                                                            placeholder={t(`contact.subject`)}
                                                            onChange={handleInputChange}
                                                            value={subject}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea
                                                            className="form-control"
                                                            name="message"
                                                            placeholder={t(`contact.message`)}
                                                            cols="30"
                                                            rows="6"
                                                            onChange={handleInputChange}
                                                            value={message}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="submit"
                                                            value={t(`contact.send_msg_btn`)}
                                                            className="btn_form btn-form-primary"
                                                        />
                                                    </div>
                                                </div>
                                                {result ? <p style={{color: "green"}}>{t(`contact.sent`)}</p> : null}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="info-wrap w-100 p-lg-5 p-4 img_form">
                                        <h3>{t(`contact.contact_us`)}</h3>
                                        <p className="mb-4">
                                            {t(`contact.info`)}
                                        </p>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-map-marker"/>
                                            </div>
                                            <div className="text pl-3">
                                                <p>
                                                    <span>{t(`contact.address`)}</span> ul. Wielka 12a, 61-165 Poznań
                                                </p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone"/>
                                            </div>
                                            <div className="text pl-3">
                                                <p>
                                                    <span>{t(`contact.phone`)}</span>
                                                    <a href="tel://48600700900"> +48 600 700 900</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane"/>
                                            </div>
                                            <div className="text pl-3">
                                                <p>
                                                    <span>{t(`contact.email_show`)}</span>
                                                    <a href="mailto:legalise@gmail.com"> legalise@gmail.com</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-globe"/>
                                            </div>
                                            <div className="text pl-3">
                                                <p>
                                                    <span>{t(`contact.website`)}</span>
                                                    <a href="#home"> legalise.pl</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

