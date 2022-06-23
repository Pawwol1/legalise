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
            });
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
            });
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
            });
    }, []);

    const [checkedStateTemp, setCheckedStateTemp] = useState([]);
    const [totalTemp, setTotalTemp] = useState(0);
    const [checkedStatePerm, setCheckedStatePerm] = useState([]);
    const [totalPerm, setTotalPerm] = useState(0);
    const [checkedStateWork, setCheckedStateWork] = useState([]);
    const [totalWork, setTotalWork] = useState(0);

    useEffect(() => {
       setCheckedStateTemp(new Array(temp.length).fill(false));
       setCheckedStatePerm(new Array(perm.length).fill(false));
       setCheckedStateWork(new Array(work.length).fill(false));
    }, [temp, perm, work]);

    const handleOnChangeTemp = (position) => {
        const updatedCheckStateTemp = checkedStateTemp.map((item, id) => id === position ? !item : item );
        setCheckedStateTemp(updatedCheckStateTemp);

        const totalPriceTemp = updatedCheckStateTemp.reduce((sum, currentState, id) => {
            if (currentState === true) {
                return sum + temp[id].price;
            }
            return sum;
        }, 0 );

        setTotalTemp(totalPriceTemp);
    }

    const handleOnChangePerm = (position) => {
        const updatedCheckStatePerm = checkedStatePerm.map((item, id) => id === position ? !item : item );
        setCheckedStatePerm(updatedCheckStatePerm);

        const totalPricePerm = updatedCheckStatePerm.reduce((sum, currentState, id) => {
            if (currentState === true) {
                return sum + perm[id].price;
            }
            return sum;
        }, 0 );

        setTotalPerm(totalPricePerm);
    }

    const handleOnChangeWork = (position) => {
        const updatedCheckStateWork = checkedStateWork.map((item, id) => id === position ? !item : item );
        setCheckedStateWork(updatedCheckStateWork);

        const totalPriceWork = updatedCheckStateWork.reduce((sum, currentState, id) => {
            if (currentState === true) {
                return sum + work[id].price;
            }
            return sum;
        }, 0 );

        setTotalWork(totalPriceWork);
    }

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
                                        <label htmlFor={`temp ${idx}`}>
                                            <input
                                                type="checkbox"
                                                id={`temp ${idx}`}
                                                name={t(`offer.0.info.${idx}`)}
                                                value={t(`offer.0.info.${idx}`)}
                                                checked={checkedStateTemp[idx]}
                                                onChange={() => handleOnChangeTemp(idx)}
                                            />
                                            {t(`offer.0.info.${idx}`)}: <b>{price}zł</b>
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="spacer"/>
                        <h5>Total price: {totalTemp}zł</h5>
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
                                        <label htmlFor={`perm ${idx}`}>
                                            <input
                                                type="checkbox"
                                                id={`perm ${idx}`}
                                                name={t(`offer.1.info.${idx}`)}
                                                value={t(`offer.1.info.${idx}`)}
                                                checked={checkedStatePerm[idx]}
                                                onChange={() => handleOnChangePerm(idx)}
                                            />
                                            {t(`offer.1.info.${idx}`)}: <b>{price}zł</b>
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="spacer"/>
                        <h5>Total price: {totalPerm}zł</h5>
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
                                        <label htmlFor={`work ${idx}`}>
                                            <input
                                                type="checkbox"
                                                id={`work ${idx}`}
                                                name={t(`offer.2.info.${idx}`)}
                                                value={t(`offer.2.info.${idx}`)}
                                                checked={checkedStateWork[idx]}
                                                onChange={() => handleOnChangeWork(idx)}
                                            />
                                            {t(`offer.2.info.${idx}`)}: <b>{price}zł</b>
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="spacer"/>
                        <h5>Total price: {totalWork}zł</h5>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PriceList;