import React from "react";
import hands from "./images/hands.png";
import { FaChevronRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next'


const Home = () => {
    const { t } = useTranslation()

    return (
        <section className="home">
            <div className="home-center">
                <article className="home-info">
                    <h1>
                        {t(`home.welcome`)} <br />
                        LEGALISE
                    </h1>
                    <p className="home-text">
                        LEGALISE {t(`home.welcome_msg`)}
                    </p>
                    <span className="group">
            <button className="btn_home">
             <a href="#offer"> {t(`home.btn1`)} {" "}
                <span className="right-arrow">
                    <FaChevronRight />
                </span>
             </a>
            </button>
            <div className="contact">
              <a href="#contact"> {t(`home.btn2`)} {" "}
                <span className="right-arrow">
                    <FaChevronRight />
                </span>
              </a>
            </div>
          </span>
                </article>
                <article className="home-images">
                    <img src={hands} alt="hands" className="hands-image" />
                </article>
            </div>
        </section>
    );
};

export default Home;