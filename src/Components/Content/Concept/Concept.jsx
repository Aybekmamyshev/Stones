import React from 'react';
import './concept.scss'
import Second from './second/Second'
const Concept = () => {
    return (
        <section className='concept'>
            <div className="container">
                <h2 className="concept__title">Идеи для вашего вдохновения</h2>
            </div>
            <Second/>
        </section>
    );
};

export default Concept;