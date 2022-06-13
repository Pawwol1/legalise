import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineCheckCircle } from 'react-icons/ai';
import {offer} from '../../data/data';
import {useTranslation} from "react-i18next";

export default function OfferBox() {
    const [offers, setOffers] = useState(offer);
    const { t } = useTranslation()
    return (
        <section className="offer_box" id="offer">
            <div className='container_offer'>
                <h3>{t(`offers`)}:</h3>
                <div className='info'>
                    {offers.map((offer) => {
                        return (
                            <SingleOfferBox key={offer.id} {...offer}/>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


const SingleOfferBox = ({ id, info }) => {
    const [showInfo, setShowInfo] = useState(false);
    const { t } = useTranslation()
    return (
        <article className='single_offer'>
            <section className="header_offer_box">
                <h4>{t(`offer.${id - 1}.title`)}</h4>
                <button className='btn-hide' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
            </section>
            {showInfo && <ul>{info.map((answer, idx) => <li style={{padding: 10}} key={idx}><AiOutlineCheckCircle/> {t(`offer.${id - 1}.info.${idx}`)}</li>)}</ul>}
        </article>
    );
};