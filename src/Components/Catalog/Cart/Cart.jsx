import React from 'react';
import "./cart.scss"
import stone from "./img/foto (6).png"
const Cart = () => {
    return (
        <section className='cart'>
            <div className="container">
                <div className="cart__wrapper">
                    <div className="cart__catalog">
                        <h2 className="cart__title">Каталог</h2>
                        <ul className="cart__ul">
                            <li className="cart__list">Необработанные стеклянные камни (эрклёз)</li>
                            <li className="cart__list">Обработанные стеклянные камни</li>
                            <li className="cart__list"> Стеклянные шарики</li>
                            <li className="cart__list">Стеклянная щебенка</li>
                            <li className="cart__list">  Кварцевые камни для бань и саун</li>
                            <li className="cart__list">Сувениры из стекла</li>
                            <li className="cart__list"> Габионные конструкции</li>
                            <li className="cart__list">Габионные конструкции</li>
                        </ul>
                    </div>
                    <div className="cart__block">
                        <div className="cart__wrapp">
                            <div className="cart__box">
                                <div className="cart__svg">
                                    <svg width="33" height="40" viewBox="0 0 33 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_431_561)">
                                            <path d="M32.089 16.1902L29.8656 13.7997C30.2979 13.0896 30.4518 12.262 30.2983 11.4425C30.1292 10.5411 29.6094 9.75791 28.8344 9.23667L25.6267 7.07969C25.6468 6.57594 25.5518 6.0701 25.3409 5.59365C24.9689 4.75219 24.2822 4.10156 23.4067 3.76219L16.313 1.01239C15.453 0.679165 14.5164 0.688022 13.6749 1.02375C13.035 0.392291 12.1461 0 11.1643 0H3.52743C1.58234 0 0 1.53854 0 3.42979V32.8577C0 36.796 3.29559 40 7.34572 40C9.18913 40 10.876 39.3363 12.1671 38.2418C12.1855 38.2292 12.2035 38.2153 12.2211 38.2003L25.9737 26.1661C26.2214 25.9493 26.2415 25.5778 26.0185 25.3365C25.7954 25.0956 25.4129 25.076 25.1656 25.2929L24.599 25.7885L22.758 23.809L25.6481 19.7457L28.2758 22.5713L27.0802 23.6174C26.8324 23.8346 26.8119 24.2057 27.0354 24.447C27.1546 24.576 27.3191 24.6416 27.4844 24.6416C27.6284 24.6416 27.7728 24.5919 27.8883 24.4905L31.8383 21.0344C32.5371 20.4199 32.9477 19.5776 32.9954 18.6629C33.0427 17.7482 32.7209 16.8697 32.089 16.1902ZM29.1098 11.6532C29.2207 12.2457 29.088 12.8447 28.7352 13.3402L27.0952 15.6461L23.3606 13.1352L25.3376 8.31375L28.1473 10.203C28.657 10.5456 28.9985 11.0604 29.1098 11.6532ZM23.3677 20.8867L20.8707 19.2074L22.9016 14.255L26.4076 16.6125L23.3677 20.8867ZM19.6403 26.1271L18.3807 25.28L20.4116 20.3272L22.6806 21.8526L19.6403 26.1271ZM20.5702 16.7684L18.8196 16.0897C18.5096 15.9693 18.1584 16.1161 18.0346 16.4176C17.9112 16.7187 18.0622 17.0605 18.3719 17.1806L20.1228 17.8593L18.0476 22.9199L14.6918 21.6191V15.754L15.9703 16.2496C16.0434 16.2781 16.1192 16.2915 16.1937 16.2915C16.4335 16.2915 16.6607 16.1516 16.7549 15.9217C16.8787 15.6201 16.7277 15.2787 16.4175 15.1583L14.6918 14.4894V8.62385L22.6454 11.7078L20.5702 16.7684ZM13.4836 13.1022H6.64057C6.30696 13.1022 6.03667 13.3655 6.03667 13.6898C6.03667 14.0141 6.30696 14.277 6.64057 14.277H13.4836V19.7253H1.20824V14.277H4.06609C4.39959 14.277 4.67031 14.0141 4.67031 13.6898C4.67031 13.3655 4.39959 13.1022 4.06609 13.1022H1.20824V7.65417H13.4832V13.1022H13.4836V13.1022ZM1.20824 20.9001H13.4832V26.348H1.20824V20.9001ZM14.6918 22.8837L17.6003 24.0112L14.6918 31.104V22.8837ZM18.456 29.8576L19.126 30.5778L15.9949 33.3175L18.456 29.8576ZM15.8456 31.4624L17.9217 26.3994L18.9531 27.0931L15.8456 31.4624ZM15.8656 2.10365L22.9593 4.85354C23.5347 5.07688 23.9863 5.50417 24.2311 6.0575C24.3993 6.43802 24.4559 6.84656 24.4002 7.24646C24.3989 7.25094 24.3985 7.25583 24.3977 7.26031C24.3721 7.43771 24.3244 7.61271 24.2546 7.78323L23.0928 10.6165L14.6918 7.35917V3.42979C14.6918 2.9301 14.5804 2.45562 14.382 2.02719C14.8667 1.89417 15.3844 1.91688 15.8656 2.10365ZM3.52743 1.17469H11.1643C12.4428 1.17469 13.4836 2.18625 13.4836 3.42979V6.47948H1.20824V3.42979C1.20824 2.18625 2.24859 1.17469 3.52743 1.17469ZM1.20824 32.8577V27.5228H13.4832V32.8577C13.4832 36.1482 10.73 38.8253 7.34571 38.8253C3.96142 38.8253 1.20824 36.1482 1.20824 32.8577ZM23.7009 26.5747L20.0241 29.7921L19.162 28.8651L22.052 24.8019L23.7009 26.5747ZM31.7885 18.604C31.7575 19.2053 31.4872 19.7592 31.0289 20.1624L29.1738 21.7855L26.354 18.7532L29.1662 14.7994L31.1926 16.9783C31.6081 17.4251 31.8199 18.0021 31.7885 18.604Z" fill="#B777BE"/>
                                            <path d="M7.20875 30.0623C5.61141 30.0623 4.31201 31.326 4.31201 32.8792C4.31201 34.4324 5.61141 35.6958 7.20875 35.6958C8.80619 35.6958 10.1059 34.4324 10.1059 32.8792C10.1059 31.326 8.80619 30.0623 7.20875 30.0623ZM7.20875 34.521C6.27767 34.521 5.52024 33.7845 5.52024 32.8792C5.52024 31.9738 6.27767 31.2369 7.20875 31.2369C8.13994 31.2369 8.89779 31.9738 8.89779 32.8792C8.89779 33.7845 8.13994 34.521 7.20875 34.521Z" fill="#B777BE"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_431_561">
                                                <rect width="33" height="40" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <p className="cart__txt">Любой цвет: от черного матового  до <br/> прозрачного бирюзового</p>
                            </div>
                            <div className="cart__box">
                                <div className="cart__svg">
                                    <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_431_551)">
                                            <path d="M39.8879 20.338C39.9243 20.0812 39.9607 19.8244 40 19.5681V17.3425C39.9695 17.1336 39.9414 16.9244 39.9133 16.7152C39.8479 16.2287 39.7861 15.769 39.6961 15.312C38.681 10.1589 35.7629 6.03828 31.0231 3.06476C28.2343 1.31531 25.0481 0.304041 21.5528 0.0590413C21.4106 0.0490784 21.2898 0.0213982 21.1996 0H18.7545C18.525 0.0287105 18.2952 0.0560972 18.0653 0.0834337C17.5499 0.144831 17.0169 0.20829 16.5032 0.286373C8.69098 1.47393 2.10332 7.29818 0.483186 14.4499C0.355065 15.0154 0.274711 15.5888 0.189686 16.1958C0.149137 16.4849 0.107209 16.784 0.0598663 17.0805C0.0439446 17.1804 0.0227141 17.2724 0.00403261 17.3535C0.00265326 17.3593 0.00138043 17.3651 0 17.3708V19.6199C0.00212283 19.6288 0.00414022 19.6377 0.00626304 19.6465C0.0291913 19.7443 0.0576391 19.8659 0.0693152 20.0044C0.300612 22.7532 1.17771 25.3605 2.67589 27.7533C7.16128 34.9169 16.0271 38.4173 24.7372 36.465C26.7023 36.0243 28.5752 35.3116 30.3038 34.3465C30.6133 34.1738 30.7597 33.9031 30.7054 33.604C30.6534 33.3182 30.4184 33.0985 30.0921 33.0308C29.9011 32.9912 29.6997 33.0469 29.3231 33.2444C24.6051 35.7197 19.6307 36.2451 14.5389 34.8059C9.92262 33.5016 6.10171 30.6121 3.77993 26.6695C1.46081 22.7313 0.902578 18.1952 2.2082 13.8968C3.42444 9.89267 6.16699 6.43955 9.93079 4.17349C13.6987 1.90498 18.2232 0.987658 22.6699 1.59137C27.2475 2.21246 31.0824 4.18262 34.0683 7.44708C37.4406 11.1341 38.8864 15.4664 38.3657 20.3237C38.0816 22.9748 37.084 25.5259 35.4007 27.9062C35.2501 28.1192 35.1929 28.3455 35.2395 28.5435C35.2794 28.7133 35.3948 28.8581 35.573 28.9621C35.9578 29.1868 36.3912 29.0711 36.677 28.6673C38.1502 26.5875 39.1355 24.3696 39.6058 22.075C39.722 21.5078 39.8026 20.9396 39.8879 20.338Z" fill="#B777BE"/>
                                            <path d="M23.8768 15.1896C23.5805 14.9156 23.0983 14.9132 22.8008 15.1844C22.6572 15.3153 22.5774 15.4907 22.5762 15.6783C22.5749 15.8664 22.6526 16.0432 22.7949 16.1762C22.9368 16.3057 23.1276 16.3824 23.3319 16.3833C23.5361 16.3845 23.727 16.313 23.8696 16.1823C24.0147 16.0495 24.0949 15.8723 24.0956 15.6834C24.0964 15.4968 24.0192 15.3219 23.8782 15.1909C23.8777 15.1904 23.8772 15.19 23.8768 15.1896Z" fill="#B777BE"/>
                                            <path d="M20.7759 18.057C20.4796 17.7831 19.9974 17.7806 19.6999 18.0519C19.5563 18.1827 19.4765 18.3581 19.4753 18.5458C19.474 18.7338 19.5517 18.9106 19.694 19.0436C19.836 19.1731 20.0267 19.2498 20.231 19.2508C20.4352 19.2519 20.6261 19.1804 20.7687 19.0498C20.9138 18.9169 20.994 18.7397 20.9947 18.5508C20.9955 18.3642 20.9183 18.1894 20.7773 18.0583C20.7768 18.0578 20.7764 18.0574 20.7759 18.057Z" fill="#B777BE"/>
                                            <path d="M26.9775 12.3223C26.6812 12.0484 26.199 12.0459 25.9015 12.3172C25.7579 12.448 25.6781 12.6234 25.6769 12.8111C25.6756 12.9991 25.7533 13.1759 25.8956 13.3089C26.0375 13.4385 26.2283 13.5151 26.4326 13.5161C26.6368 13.5172 26.8277 13.4458 26.9703 13.3151C27.1154 13.1822 27.1956 13.005 27.1963 12.8161C27.1971 12.6296 27.1199 12.4547 26.9789 12.3236C26.9784 12.3232 26.9779 12.3227 26.9775 12.3223Z" fill="#B777BE"/>
                                            <path d="M17.6751 20.9245C17.3789 20.6505 16.8966 20.6481 16.5991 20.9194C16.4555 21.0502 16.3757 21.2256 16.3745 21.4133C16.3733 21.6013 16.4509 21.7781 16.5932 21.9111C16.7352 22.0406 16.9259 22.1173 17.1303 22.1183C17.3344 22.1194 17.5253 22.0479 17.668 21.9173C17.813 21.7844 17.8933 21.6072 17.894 21.4183C17.8947 21.2317 17.8175 21.0569 17.6766 20.9258C17.676 20.9253 17.6756 20.9249 17.6751 20.9245Z" fill="#B777BE"/>
                                            <path d="M14.5743 23.7917C14.2781 23.5178 13.7958 23.5154 13.4983 23.7866C13.3547 23.9174 13.2749 24.0928 13.2737 24.2805C13.2724 24.4685 13.3501 24.6454 13.4924 24.7783C13.6344 24.9079 13.8251 24.9845 14.0294 24.9855C14.2336 24.9866 14.4245 24.9152 14.5671 24.7845C14.7122 24.6516 14.7924 24.4744 14.7931 24.2855C14.7939 24.099 14.7167 23.9241 14.5757 23.7931C14.5752 23.7926 14.5748 23.7922 14.5743 23.7917Z" fill="#B777BE"/>
                                            <path d="M30.6889 15.6569C30.2987 15.6569 29.9824 15.3644 29.9824 15.0035V10.0896C29.9824 9.78476 29.7142 9.53677 29.3846 9.53677H24.0706C23.6804 9.53677 23.3641 9.24426 23.3641 8.88344C23.3641 8.52261 23.6804 8.2301 24.0706 8.2301H29.3846C30.4934 8.2301 31.3955 9.06429 31.3955 10.0896V15.0035C31.3955 15.3644 31.0791 15.6569 30.6889 15.6569Z" fill="#B777BE"/>
                                            <path d="M15.9374 29.2981L10.6233 29.298C9.51446 29.298 8.61241 28.4638 8.61241 27.4385L8.6123 22.5246C8.6123 22.1637 8.92863 21.8712 9.31883 21.8712C9.70903 21.8712 10.0253 22.1637 10.0253 22.5246L10.0255 27.4385C10.0255 27.7433 10.2937 27.9913 10.6233 27.9913L15.9374 27.9914C16.3276 27.9914 16.6439 28.2839 16.6439 28.6447C16.6439 29.0056 16.3276 29.2981 15.9374 29.2981Z" fill="#B777BE"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_431_551">
                                                <rect width="40" height="37" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <p className="cart__txt">Доступные диаметры <br/>
                                    от 2 мм до 300 мм.</p>
                            </div>
                            <div className="cart__box">
                                <div className="cart__svg">
                                    <svg width="44" height="50" viewBox="0 0 44 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_431_546)">
                                            <path d="M28.3071 27.3616C29.1941 29.1597 29.7063 31.1399 29.81 33.1628H23.8314C23.6824 31.4562 23.0368 29.8559 21.9659 28.5408L22.7713 27.7143C23.0626 27.4154 23.0626 26.9308 22.7713 26.632L22.7713 26.6319C22.48 26.3331 22.0079 26.3331 21.7167 26.632L19.8801 28.5167L20.3335 28.982C21.5306 30.2104 22.2805 31.8413 22.365 33.5764C22.5671 37.7248 19.1707 41.1318 15.1035 40.7927C11.8399 40.5206 9.21548 37.8105 8.96904 34.46C8.6721 30.4228 11.7891 27.0401 15.6615 27.0401H16.4073V19.4085C18.2587 19.5087 20.079 19.9795 21.7431 20.7906C22.0988 20.9639 22.5248 20.8142 22.7115 20.4584L22.7115 20.4584C22.9156 20.0697 22.7557 19.5891 22.3668 19.4001C20.2846 18.388 17.9829 17.8562 15.6615 17.8562C6.82028 17.8562 -0.333354 25.4131 0.0120005 34.5633C0.326827 42.9046 6.91424 49.6646 15.0426 49.9876C23.9591 50.342 31.3231 43.001 31.3231 33.9281C31.3231 31.3946 30.7397 28.8963 29.6299 26.6539C29.4382 26.2665 28.965 26.1279 28.5976 26.3438L28.5975 26.3439C28.2501 26.5481 28.1262 26.995 28.3071 27.3616ZM23.8297 34.6934H29.8118C29.6375 38.1272 28.2967 41.2491 26.1896 43.6498L21.9625 39.3119C22.9998 38.0356 23.6754 36.4408 23.8297 34.6934ZM20.9078 40.3943L25.1348 44.7322C22.7955 46.8944 19.7533 48.2703 16.4072 48.4492V42.3104C18.11 42.1521 19.6641 41.4587 20.9078 40.3943ZM14.9156 42.3104V48.4492C11.5695 48.2703 8.52733 46.8944 6.18805 44.7322L10.4151 40.3943C11.6587 41.4587 13.2129 42.1521 14.9156 42.3104ZM9.36032 39.3119L5.1333 43.6498C3.02631 41.2492 1.68548 38.1273 1.51107 34.6934H7.49317C7.6474 36.4408 8.32308 38.0356 9.36032 39.3119ZM7.49238 33.1628H1.51106C1.68538 29.729 3.0263 26.6071 5.1333 24.2064L9.36003 28.5438C8.32269 29.8202 7.64651 31.4153 7.49238 33.1628ZM10.4147 27.4616L6.18804 23.1241C8.52733 20.9619 11.5695 19.5859 14.9156 19.4071V25.5441C13.2126 25.7021 11.6584 26.3971 10.4147 27.4616Z" fill="#B777BE"/>
                                            <path d="M43.2004 0.820547C42.1343 -0.273567 40.3993 -0.273464 39.333 0.820547L36.345 3.88696L35.466 2.98489L34.4114 4.06727L35.2905 4.96934L28.0831 12.3657C27.1998 13.2721 27.049 14.6494 27.6295 15.7174L26.8526 16.5146C26.5613 16.8135 26.5613 17.2981 26.8526 17.597L26.8526 17.597C27.1439 17.8958 27.616 17.8958 27.9073 17.5969L28.6841 16.7998C29.0968 17.0359 29.5566 17.1548 30.0167 17.1548C30.7169 17.1548 31.4172 16.8813 31.9502 16.3342L39.1576 8.93792L40.0365 9.83979L41.091 8.75751L40.2123 7.85575L43.2004 4.78934C44.2666 3.69502 44.2666 1.91476 43.2004 0.820547ZM30.8955 15.2518C30.4109 15.749 29.6223 15.7491 29.1377 15.2518C28.6531 14.7544 28.6531 13.9452 29.1377 13.4478L36.3451 6.05162L38.103 7.85555L30.8955 15.2518ZM42.1458 3.70685L39.1576 6.77327L37.3998 4.96934L40.3878 1.90303C40.6302 1.65424 40.9485 1.52995 41.2668 1.52995C41.5851 1.52995 41.9034 1.65435 42.1458 1.90292C42.6304 2.40029 42.6304 3.20949 42.1458 3.70685Z" fill="#B777BE"/>
                                            <path d="M25.56 26.53C27.0678 26.53 28.2945 25.2712 28.2945 23.7238C28.2945 23.3329 28.181 22.6125 27.1994 20.8761C26.6933 19.9808 26.1946 19.2382 26.1736 19.207L25.56 18.2953L24.9464 19.207C24.9254 19.2382 24.4266 19.9808 23.9206 20.8761C22.939 22.6125 22.8254 23.3329 22.8254 23.7238C22.8254 25.2712 24.0522 26.53 25.56 26.53ZM25.56 21.0431C26.2323 22.161 26.803 23.3148 26.803 23.7239C26.803 24.4272 26.2454 24.9994 25.56 24.9994C24.8746 24.9994 24.317 24.4272 24.317 23.7239C24.317 23.3148 24.8877 22.161 25.56 21.0431Z" fill="#B777BE"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_431_546">
                                                <rect width="44" height="50" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <p className="cart__txt">Любой оттенок из палитры RAL <br/>
                                    на заказ</p>
                            </div>
                        </div>
                        <div className="cart__content">
                            <div className="cart__line"></div>
                            <div className="cart__web">
                                <h3 className="cart__subtitle">На сайте представлены розничные цены </h3>
                                <p className="cart__text">Цены для дилеров отправляются по запросу
                                </p>
                            </div>
                            <button className='cart__btn'>Запросить цены для дилеров</button>
                        </div>
                        <div className="cart__col">
                            <div className="cart__row">
                                <div className="cart__picture">
                                    <img src={stone} alt=""/>
                                </div>
                                <div className="cart__center"></div>
                                <p className="cart__red">Красный кристальный</p>
                                <h4 className="cart__rub">45 руб/кг</h4>
                            </div>
                            <div className="cart__row">
                                <div className="cart__picture">
                                    <img src={stone} alt=""/>
                                </div>
                                <div className="cart__center"></div>
                                <p className="cart__red">Красный кристальный</p>
                                <h4 className="cart__rub">45 руб/кг</h4>
                            </div>
                            <div className="cart__row">
                                <div className="cart__picture">
                                    <img src={stone} alt=""/>
                                </div>
                                <div className="cart__center"></div>
                                <p className="cart__red">Красный кристальный</p>
                                <h4 className="cart__rub">45 руб/кг</h4>
                            </div>
                            <div className="cart__row">
                                <div className="cart__picture">
                                    <img src={stone} alt=""/>
                                </div>
                                <div className="cart__center"></div>
                                <p className="cart__red">Красный кристальный</p>
                                <h4 className="cart__rub">45 руб/кг</h4>
                            </div>
                            <div className="cart__row">
                                <div className="cart__picture">
                                    <img src={stone} alt=""/>
                                </div>
                                <div className="cart__center"></div>
                                <p className="cart__red">Красный кристальный</p>
                                <h4 className="cart__rub">45 руб/кг</h4>
                            </div>
                            <div className="cart__row">
                                <div className="cart__picture">
                                    <img src={stone} alt=""/>
                                </div>
                                <div className="cart__center"></div>
                                <p className="cart__red">Красный кристальный</p>
                                <h4 className="cart__rub">45 руб/кг</h4>
                            </div>
                            <div className="cart__row">
                                <div className="cart__picture">
                                    <img src={stone} alt=""/>
                                </div>
                                <div className="cart__center"></div>
                                <p className="cart__red">Красный кристальный</p>
                                <h4 className="cart__rub">45 руб/кг</h4>
                            </div>
                            <div className="cart__row">
                                <div className="cart__picture">
                                    <img src={stone} alt=""/>
                                </div>
                                <div className="cart__center"></div>
                                <p className="cart__red">Красный кристальный</p>
                                <h4 className="cart__rub">45 руб/кг</h4>
                            </div>
                            <div className="cart__row">
                                <div className="cart__picture">
                                    <img src={stone} alt=""/>
                                </div>
                                <div className="cart__center"></div>
                                <p className="cart__red">Красный кристальный</p>
                                <h4 className="cart__rub">45 руб/кг</h4>
                            </div>
                            <div className="cart__row">
                                <div className="cart__picture">
                                    <img src={stone} alt=""/>
                                </div>
                                <div className="cart__center"></div>
                                <p className="cart__red">Красный кристальный</p>
                                <h4 className="cart__rub">45 руб/кг</h4>
                            </div>
                            <div className="cart__row">
                                <div className="cart__picture">
                                    <img src={stone} alt=""/>
                                </div>
                                <div className="cart__center"></div>
                                <p className="cart__red">Красный кристальный</p>
                                <h4 className="cart__rub">45 руб/кг</h4>
                            </div>
                            <div className="cart__row">
                                <div className="cart__picture">
                                    <img src={stone} alt=""/>
                                </div>
                                <div className="cart__center"></div>
                                <p className="cart__red">Красный кристальный</p>
                                <h4 className="cart__rub">45 руб/кг</h4>
                            </div>
                            <div className="cart__row">
                                <div className="cart__picture">
                                    <img src={stone} alt=""/>
                                </div>
                                <div className="cart__center"></div>
                                <p className="cart__red">Красный кристальный</p>
                                <h4 className="cart__rub">45 руб/кг</h4>
                            </div>
                            <div className="cart__row">
                                <div className="cart__picture">
                                    <img src={stone} alt=""/>
                                </div>
                                <div className="cart__center"></div>
                                <p className="cart__red">Красный кристальный</p>
                                <h4 className="cart__rub">45 руб/кг</h4>
                            </div>
                            <div className="cart__row">
                                <div className="cart__picture">
                                    <img src={stone} alt=""/>
                                </div>
                                <div className="cart__center"></div>
                                <p className="cart__red">Красный кристальный</p>
                                <h4 className="cart__rub">45 руб/кг</h4>
                            </div>
                            <div className="cart__btn-second">Показать ещё</div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;