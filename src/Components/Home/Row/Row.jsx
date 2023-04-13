import React from 'react';
import "./row.scss"
import image from './img/foto (1).png'
import image2 from './img/foto (2).png'
import image3 from './img/foto (3).png'
import image4 from './img/foto (4).png'
const Row = () => {
    return (
        <section className='row'>
            <div className="container">
                <div className="row__wrapper">
                    <div className="row__box">
                        <div className="row__block">
                            <img src={image} alt="" className="row__image"/>
                        </div>
                        <div className='row__line'></div>
                        <h2 className="row__title">Щебенка</h2>
                        <h3 className="row__price">60 руб/кг</h3>
                        <p className="row__heft">45 руб/кг</p>
                    </div>
                    <div className="row__box">
                        <div className="row__block">
                            <img src={image2} alt="" className="row__image"/>
                        </div>
                        <div className='row__line'></div>
                        <h2 className="row__title">Обработанные камни</h2>
                        <div className="row__price-del">jhjjhhj</div>
                        <p className="row__heft">39 руб/кг</p>
                    </div>
                    <div className="row__box">
                        <div className="row__block">
                            <img src={image3} alt="" className="row__image"/>
                        </div>
                        <div className='row__line'></div>
                        <h2 className="row__title">Шарики</h2>
                        <h3 className="row__price">60 руб/кг</h3>
                        <p className="row__heft">120 руб/кг</p>
                    </div>
                    <div className="row__box">
                        <div className="row__block">
                            <img src={image4} alt="" className="row__image"/>
                        </div>
                        <div className='row__line'></div>
                        <h2 className="row__title">Необработанные камни</h2>
                        <h3 className="row__price">60 руб/кг</h3>
                        <p className="row__heft">58 руб/кг</p>
                    </div>
                </div>
                <button className="row__btn">
                    <p className="row__catalog">Cмотреть каталог</p>
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.999995L8.00003 8.00002L1.00003 15" stroke="black" stroke-width="2"/>
                    </svg>

                </button>
            </div>
        </section>
    );
};

export default Row;