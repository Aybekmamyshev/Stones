import React, {useEffect} from 'react';
import './Stone.scss'
import picture from '../Stone/img/stone.png'
import gsap from 'gsap'





const Stone = () => {

    return (
 <>
     <section className='stone'>
         <div className="container">
             <div className="stone__row">
                 <div className="stone__box">
                     <h2 className="stone__title">Стеклянные камни</h2>
                     <h3 className="stone__subtitle">оптом от производителя</h3>
                     <div className="stone__inner">
                         <div className='stone__over'>
                             <div className='stone__str'></div>
                             <p className="stone__text">Любые цвета и фракции камней в наличии
                                 и на заказ
                             </p>
                         </div>

                         <div className='stone__over'>
                             <div className='stone__str'></div>
                             <p className="stone__text">Гарантия лучшей цены</p>

                         </div>
                         <div className='stone__over'>
                             <div className='stone__str'></div>
                             <p className="stone__text">Более 50 вариантов использования
                                 в интерьере
                                 и ландшафтном дизайне</p>
                         </div>

                     </div>
                     <button className='stone__btn'>
                         Cмотреть каталог
                         <span className='stone__line'>
                             <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.999995L8.00003 8.00002L1.00003 15" stroke="white" stroke-width="2"/>
</svg>
                         </span>
                     </button>
                 </div>
                 <div className="stone__block">
                     <img src={picture} alt="" className="stone__picture"/>
                 </div>
             </div>
         </div>

     </section>


 </>

    );
};

export default Stone;