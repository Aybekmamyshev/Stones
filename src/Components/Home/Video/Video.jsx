import React from 'react';
import './Video.scss'
const Video = () => {
    return (
        <section className='video'>
            <div className="container">
              <div className="video__row">
                  <h2 className="video__title">Уникальный востребованный продукт
                      на российском рынке</h2>
                  <p className="video__txt">Ежегодно число наших клиентов увеличивается минимум вдвое</p>
              </div>
                <div className="video__box">
                    <iframe className='video__iframe' width="560" height="315" src="https://www.youtube.com/embed/xf8rIC1-UGA"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            </div>
        </section>
    );
};

export default Video;