import React from 'react';
import './slider.css';

const Slider = ({ items }) => {
    return (
        <div className="scrollable-container">
            <div className="scrollable-items">
                {items.map((item, index) => (
                    <div key={index} className="scrollable-item">
                        <img className="item-image" src={item.imageUrl} alt={item.title} />
                        <div className="item-text">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;