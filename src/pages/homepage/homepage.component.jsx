import React, { useState } from 'react';
// import { FixButton } from '../../components/fix-button/fix-button.component'
import items from './data.json';

import './homepage.styles.scss';

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [selectedItem, setSelectedItem] = useState({ id: 0 });

  return (
    <div className={'homepage ' + (showMenu ? 'show-menu' : '')}>
      <div className="menu-button">
        <button className="o-button" onClick={() => setShowMenu(!showMenu)}>
          <span className="o-button_circle-icon">
            <span className="o-button_circle-icon_wrap"></span>
          </span>
          <span className="o-button_label">Menu</span>
        </button>
      </div>

      <div className="cart-button">
        <button className="o-button o-button_right">
          <span className="o-button_circle-icon">
            <i className="fa fa-shopping-cart o-button_icon"></i>
          </span>
          <span className="o-button_label">Cart</span>
        </button>
      </div>

      <div className="middle-circle-container">
        <div className="middle-circle">
          {selectedItem.id === 0 ? (
            <h2 className="title">Select a lighting mode</h2>
          ) : (
            <h2 className="title">{selectedItem.title}</h2>
          )}

          <button className="play-icon"><i className="fa fa-play"></i></button>
        </div>
      </div>

      {selectedItem.id === 0 ? (
        <div
          className="page-background"
          style={{
            backgroundImage:
              'url(https://kvellhome.com/uploads/family/featured/Stax_Desktop-1920x1080.jpg)'
          }}
        ></div>
      ) : (
        <div
          className="page-background"
          style={{ backgroundImage: 'url(' + selectedItem.img_url + ')' }}
        ></div>
      )}

      <div className="left-menu">
        <div className="items">
          {items.map(item => (
            <div
              className="item"
              key={item.id}
              onClick={() => setSelectedItem(item)}
            >
              <div className="item-image">
                <img src={item.img_url} alt="" />
              </div>
              <div className="item-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="page-dots">
        <button className="dot-link">
          <span className="dot"></span>
        </button>
        <button className="dot-link">
          <span className="dot"></span>
        </button>
        <button className="dot-link">
          <span className="dot"></span>
        </button>
        <button className="dot-link">
          <span className="dot"></span>
        </button>
        <button className="dot-link">
          <span className="dot"></span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
