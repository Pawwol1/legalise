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
                // console.log(prices)
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
                // console.log(prices)
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
                // console.log(prices)
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
                    <table>
                        <thead>
                            <tr><th>{t(`offer.0.title`)}</th></tr>
                        </thead>
                        <tbody>
                            {temp.map((product, idx) => {
                                const { id, price } = product;
                                return (
                            <tr key={id}><td>{t(`offer.0.info.${idx}`)}: {price}zł</td></tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <table>
                        <thead>
                            <tr><th>{t(`offer.1.title`)}</th></tr>
                        </thead>
                        <tbody>
                        {perm.map((product, idx) => {
                            const { id, price } = product;
                            return (
                                <tr key={id}><td>{t(`offer.1.info.${idx}`)}: {price}zł</td></tr>
                            );
                        })}
                        </tbody>
                    </table>

                    <table>
                        <thead>
                            <tr><th>{t(`offer.2.title`)}</th></tr>
                        </thead>
                        <tbody>
                        {work.map((product, idx) => {
                            const { id, price } = product;
                            return (
                                <tr key={id}><td>{t(`offer.2.info.${idx}`)}: {price}zł</td></tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PriceList;