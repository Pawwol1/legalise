import React, {useEffect, useState} from 'react';
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import {useTranslation} from "react-i18next";

const colRef0 = collection(db, 'temp-stay')
const colRef1 = collection(db, 'perm-residence')
const colRef2 = collection(db, 'work')

function PriceList() {

    const [temp, setTemp] = useState([]);
    const [perm, setPerm] = useState([]);
    const [work, setWork] = useState([]);

    useEffect(() => {
        getDocs(colRef0)
            .then(snapshot => {
                let prices = []
                snapshot.docs.forEach(doc => {
                    prices.push({ ...doc.data(), id: doc.id})
                })
                setTemp(prices)
            })
            .catch(err => {
                console.log(err.message)
            })
        getDocs(colRef1)
            .then(snapshot => {
                let prices = []
                snapshot.docs.forEach(doc => {
                    prices.push({ ...doc.data(), id: doc.id})
                })
                setPerm(prices)
            })
            .catch(err => {
                console.log(err.message)
            })
        getDocs(colRef2)
            .then(snapshot => {
                let prices = []
                snapshot.docs.forEach(doc => {
                    prices.push({ ...doc.data(), id: doc.id})
                })
                setWork(prices)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, []);

    const { t } = useTranslation()

    return (
        <div className="price_container" id="calculator">
            <div className="price_list" >
                <div className="title_contain">
                    <h2>{t(`price_list`)}</h2>
                </div>
                <div className="table_contain">

                    <div className="price_list--box">
                        <h4>
                            {t(`offer.0.title`)}
                        </h4>
                        <ul className="price_list--list">
                            {temp.map((product, idx) => {
                                const { id, price } = product;
                                return (
                                    <li key={id}>
                                        <label htmlFor={`temp ${id}`}>
                                            <input
                                                type="checkbox"
                                                id={`temp ${id}`}
                                                name={t(`offer.0.info.${idx}`)}
                                                value={t(`offer.0.info.${idx}`)}
                                            />
                                            {t(`offer.0.info.${idx}`)}: <b>{price}zł</b>
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="spacer"/>
                        <h5>Total price:</h5>
                    </div>

                    <div className="price_list--box">
                        <h4>
                            {t(`offer.1.title`)}
                        </h4>
                        <ul className="price_list--list">
                            {perm.map((product, idx) => {
                                const { id, price } = product;
                                return (
                                    <li key={id}>
                                        <label htmlFor={`perm ${id}`}>
                                            <input
                                                type="checkbox"
                                                id={`perm ${id}`}
                                                name={t(`offer.1.info.${idx}`)}
                                                value={t(`offer.1.info.${idx}`)}
                                            />
                                            {t(`offer.1.info.${idx}`)}: <b>{price}zł</b>
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="spacer"/>
                        <h5>Total price:</h5>
                    </div>

                    <div className="price_list--box">
                        <h4>
                            {t(`offer.2.title`)}
                        </h4>
                        <ul className="price_list--list">
                            {work.map((product, idx) => {
                                const { id, price } = product;
                                return (
                                    <li key={id}>
                                        <label htmlFor={`work ${id}`}>
                                            <input
                                                type="checkbox"
                                                id={`work ${id}`}
                                                name={t(`offer.2.info.${idx}`)}
                                                value={t(`offer.2.info.${idx}`)}
                                            />
                                            {t(`offer.2.info.${idx}`)}: <b>{price}zł</b>
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="spacer"/>
                        <h5>Total price:</h5>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PriceList;