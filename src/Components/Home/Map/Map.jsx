import React from 'react';
import "./map.scss"
import stone from "./img/foto (5).png"
const Map = () => {
    return (
        <section className='map'>
            <div className="container">
                <div className="map__wrapper">
                    <div className="map__block">
                        <h2 className="map__title">Ждем вас по адресу</h2>
                        <div className="map__wrapp">
                            <div className="map__box">
                                <div className="map__svg">
                                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.23901 9.39148C1.25342 5.15089 4.70278 1.7249 8.94336 1.7393C13.1839 1.75371 16.6099 5.20306 16.5955 9.44365V9.53061C16.5434 12.2871 15.0042 14.835 13.1173 16.8263C12.0381 17.9469 10.833 18.939 9.52597 19.7828C9.17648 20.0851 8.65807 20.0851 8.30858 19.7828C6.36008 18.5145 4.64995 16.9133 3.2564 15.0523C2.01436 13.4296 1.30918 11.4599 1.23901 9.41756L1.23901 9.39148Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="8.91717" cy="9.53899" r="2.46087" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="map__inner">
                                    <h3 className="map__text">Владимирская область, г. Гусь-Хрустальный,
                                        ул.Суловская, дом 6
                                    </h3>
                                    <a href="#" className="map__link"> Построить маршрут</a>
                                </div>
                            </div>
                            <div className="map__box">
                                <div className="map__svg">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99033 3.87254C2.30665 3.34878 4.0495 1.44376 5.29322 1.50127C5.665 1.53208 5.99364 1.75699 6.26067 2.01784C6.87379 2.61656 8.62897 4.88101 8.72859 5.35753C8.97096 6.52621 7.57833 7.1999 8.00454 8.37783C9.09112 11.0366 10.9634 12.9088 13.6233 13.9943C14.8003 14.4205 15.474 13.0279 16.6428 13.2713C17.1183 13.3709 19.3839 15.126 19.9826 15.7391C20.2425 16.0051 20.4684 16.3347 20.4992 16.7065C20.5454 18.0159 18.5222 19.7833 18.1278 20.0092C17.1974 20.6747 15.9834 20.6634 14.5035 19.9753C10.3739 18.2572 3.77426 11.7822 2.02422 7.49669C1.35461 6.02505 1.30839 4.80297 1.99033 3.87254Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <a href="#" className="map__call">Позвоните нам
                                    +7 (930) 032-01-11
                                </a>
                            </div>
                            <div className="map__box">
                                <div className="map__svg">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2498 10.001C19.2498 15.11 15.1088 19.251 9.99976 19.251C4.89076 19.251 0.749756 15.11 0.749756 10.001C0.749756 4.89198 4.89076 0.750977 9.99976 0.750977C15.1088 0.750977 19.2498 4.89198 19.2498 10.001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M13.4314 12.9437L9.66138 10.6947V5.84766" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <p className="map__text">
                                    Ежедневно с 09:00 до 18:00
                                </p>
                            </div>
                        </div>
                        <div className="map__stone">
                            <img className={'map__pic'} src={stone} alt=""/>
                        </div>
                        </div>
                    <div className="map__map">
                        <iframe className='map__iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.3494711379733!2d74.58031162446453!3d42.87455544099096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec83d333090f9%3A0xd1499582fbd98d0!2z0LzQsNCz0LDQt9C40L0g0K3Qu9C10LrRgtGA0L7QvdC40Lo!5e0!3m2!1sru!2skg!4v1675092930322!5m2!1sru!2skg"
                            width="650" height="500" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Map;