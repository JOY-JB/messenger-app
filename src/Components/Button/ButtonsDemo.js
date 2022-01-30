import React from 'react';
import Button from './Button';

const ButtonsDemo = () => {

    // props
    // icon="any font awesome icon"
    // variant="primary / secondary" (default - primary)
    // size="sm / md / lg  " (default - md)
    // type="icon / circular / button / bottom-button " (default - button)
    // disabled


    return (
        <div>
            <div className="buttons">
                <Button icon="fas fa-paper-plane" variant="secondary" type="icon"></Button>
                <Button icon="fas fa-paper-plane" type="icon"></Button>
                <Button icon="fas fa-paper-plane" type="icon" disabled></Button>
            </div>

            <div className="buttons">
                <Button icon="fas fa-paper-plane" variant="primary" type="circular"></Button>
                <Button icon="fas fa-paper-plane" variant="secondary" type="circular"></Button>
                <Button icon="fas fa-paper-plane" type="circular" disabled></Button>
            </div>

            <div className="buttons">
                <Button icon="fas fa-paper-plane" size="sm" type="button">send</Button>
                <Button icon="fas fa-paper-plane" variant="secondary" size="sm" type="button">send</Button>
                <Button icon="fas fa-paper-plane" size="sm" type="button" disabled>send</Button>
            </div>

            <div className="buttons">
                <Button icon="fas fa-paper-plane" size="md" type="button" >send</Button>
                <Button icon="fas fa-paper-plane" variant="secondary" size="md" type="button" >send</Button>
                <Button icon="fas fa-paper-plane" size="md" type="button" disabled>send</Button>
            </div>

            <div className="buttons">
                <Button icon="fas fa-paper-plane" variant="primary" size="lg" type="button" >send</Button>
                <Button icon="fas fa-paper-plane" variant="secondary" size="lg" type="button" >send</Button>
                <Button icon="fas fa-paper-plane" size="lg" type="button" disabled>send</Button>
            </div>

            <div className="buttons">
                <Button icon="fas fa-paper-plane" variant="primary" type="bottom-button" >send</Button>
                <Button icon="fas fa-paper-plane" variant="secondary" type="bottom-button" >send</Button>
                <Button icon="fas fa-paper-plane" type="bottom-button" disabled>send</Button>
            </div>

            <Button icon="fas fa-external-link-alt" variant="" size="" type="">Share</Button>
        </div>
    );
};

export default ButtonsDemo;