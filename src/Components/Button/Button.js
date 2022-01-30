import React, { useState } from 'react';

const Button = ({ icon, variant, type, size, disabled, children }) => {
    const [mousePress, setMousePress] = useState(false);

    // button variant
    let buttonvariant;

    if (variant === "primary") {
        buttonvariant = "variant-primary";
    } else if (variant === "secondary") {
        buttonvariant = "variant-secondary";
    } else {
        buttonvariant = "variant-primary";
    }

    //button press
    let buttonPress;
    if (variant === "primary" && mousePress) {
        buttonPress = "primary-button-press";
    }
    else if (variant === "secondary" && mousePress) {
        buttonPress = "secondary-button-press";
    }
    else if (mousePress) {
        buttonPress = "primary-button-press";
    }

    // button type
    let buttonType;
    if (type === "button") {
        buttonType = "type-button";
    }
    else if (type === "icon") {
        buttonType = "type-icon";
    }
    else if (type === "circular") {
        buttonType = "type-circular";
    }
    else if (type === "bottom-button") {
        buttonType = "type-bottom-button";
    }
    else {
        buttonType = "type-button";
    }

    //button size
    let buttonSize;
    if (size === "md") {
        buttonSize = "button-medium"
    } else if (size === "lg") {
        buttonSize = "button-large"
    } else if (size === "sm") {
        buttonSize = "button-small"
    } else {
        buttonSize = "button-medium"
    }


    return (
        <div className={`button ${variant ? buttonvariant : buttonvariant} ${type ? buttonType : buttonType} ${size ? buttonSize : buttonSize} ${disabled ? "button-disabled" : ""} ${mousePress ? buttonPress : ""}`
        }
            onMouseDown={() => { setMousePress(true) }}
            onMouseUp={() => { setMousePress(false) }}
            onMouseLeave={() => { setMousePress(false) }}
        >
            <div className={`button-icon ${icon ? icon : ""}`}></div>
            <div className='button-message'>
                {children && children}
            </div>
        </div>
    );
};

export default Button;