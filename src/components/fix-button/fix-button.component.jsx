import React from 'react';

const FixButton = ({ children, isRight }) => {
  if (isRight) {
    return (
      <button className="o-button o-button-right">
        <span className="o-button_circle-icon">
          <span className="o-button_circle-icon_wrap"></span>
        </span>
        <span className="o-button_label">{children}</span>
      </button>

    )
  } else {
    return (
      <button className="o-button">
        <span className="o-button_circle-icon">
          <span className="o-button_circle-icon_wrap"></span>
        </span>
        <span className="o-button_label">{children}</span>
      </button>

    )
  }
}

export default FixButton;