import React from 'react';
import pic from  './img/imag.png'
import './Visit.scss'
const Visit = () => {
    return (
        <section className='visit'>
            <div className="container">
                <div className="visit__wrapper">
                    <div className="visit__block">
                        <p className="visit__txt">Посетите наш шоурум и оцените продукт своими глазами. Запишитесь заранее, чтобы подобрать удобное время.</p>
                        <button className="visit__btn">
                           <p className="visit__sign">записаться</p>
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0.999995L8.00003 8.00002L1.00003 15" stroke="white" strokeWidth="2"/>
                            </svg>
                        </button>
                    </div>
                    <div className="visit__box">
                        <img src={pic} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Visit;