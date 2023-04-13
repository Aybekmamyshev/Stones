import React from 'react';
import './Year.scss'
import year from './img/year-img.png'
import mirror from './img/imge-2.png'
import third from './img/third.png'
const Year = () => {
    return (
        <section className='year'>
            <div className="container">
                <div className="year__row">
                        <div className="year__wrapp">
                            <h2 className="year__title">Срок службы стеклянного камня не ограничен</h2>
                            <p className="year__txt">Выдерживает от +50°C до -50°C, не требует специального ухода </p>
                        </div>
                        <div className="year__border">
                            <img src={year} alt="picture"/>
                        </div>
                </div>
                <div className="year__wrapper">

                        <div className="year__box">
                            <img className='year__pic' src={mirror} alt=""/>
                        </div>
                    <div className="year__block">
                        <div className="year__inner">
                            <div className="year__line"></div>
                            <h3 className="year__subtitle">Экологически чистый продукт</h3>
                            <p className="year__text"> В процессе производства используем только натуральное окрашенное стекло.
                                Никаких синтетических смол и испарений.</p>
                        </div>
                        <div className="year__inner">
                            <div className="year__line"></div>
                            <h3 className="year__subtitle">Не боится палящего солнца, снега, града, дождя
                                и других осадков
                               </h3>
                            <p className="year__text">  Не трескается, не выцветает, не поддается гниению, коррозии,  не обрастает мхом. Используется в помещении и на открытом воздухе.</p>
                        </div>
                        <div className="year__inner">
                            <div className="year__line"></div>
                            <h3 className="year__subtitle">Легок в уходе</h3>
                            <p className="year__text">В помещении его достаточно протереть влажной тряпкой от пыли. На улице — мыть с помощью KARHERа. Самоочищается во время дождя.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Year;