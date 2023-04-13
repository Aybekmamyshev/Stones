import React from 'react';
import pic from './img/pic-1.png'
import picSec from './img/pic-2.png'
import picThird  from './img/pic-3.png'
import photo  from './img/foto.png'
import "./trend.scss"
const Trend = () => {
    return (
        <section className='trend'>
            <div className="container">
                <div className="trend__wrapp">
                    <div className="trend__block">
                        <h2 className="trend__title">Новый тренд в интерьере
                            и ландшафтном дизайне</h2>
                        <p className="trend__txt">Создавайте уникальную атмосферу
                            в своем доме и саду</p>
                        <div className="trend__wrapper">
                            <div className="trend__inner"><img src={pic} alt="" className="trend__pic"/></div>
                            <div className="trend__inner"><img src={pic} alt="" className="trend__pic"/></div>
                            <div className="trend__inner"><img src={picSec} alt="" className="trend__pic"/></div>
                            <div className="trend__inner"><img src={picSec} alt="" className="trend__pic"/></div>
                            <div className="trend__inner"><img src={picSec} alt="" className="trend__pic"/></div>
                            <div className="trend__inner"><img src={picSec} alt="" className="trend__pic"/></div>
                        </div>
                    </div>
                    <div className="trend__box">
                        <img src={photo} alt="" className="trend__photo"/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Trend;