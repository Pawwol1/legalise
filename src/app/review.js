import React, { useState } from 'react';
import {reviews} from './data/data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'



const Review = () => {
    const [index, setIndex] = useState(0);
    const { name } = reviews[index]
    const checkNumber = (number) => {
        if (number > reviews.length - 1) {
            return 0;
        }
        if (number < 0) {
            return reviews.length - 1;
        }
        return number;
    };
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * reviews.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    const { t } = useTranslation()

    return (
        <section className='container' id="reference">
            <div className='title'>
                <h2>{t(`reference`)}</h2>
                <div className='underline'/>
            </div>
        <article className='review'>
            <h4 className='author'>{name}</h4>
            <p className='info'>{t(`reviews.${index}.text`)}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>
                {t(`random`)}
            </button>
        </article>
        </section>
    );
};

export default Review;
