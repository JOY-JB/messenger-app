import React from 'react';

const List = ({ icon, image, alt, children }) => {
    return (
        <div className="list-item">
            {
                icon && <div className={`list-inner ${icon}`}></div>
            }
            {
                image && <div className={`list-image`} style={{ backgroundImage: `url(${image})` }}></div>
            }
            <div className="list-inner">
                <p className="list-text">{children}</p>
                <p className="list-alt">{alt}</p>
            </div>
        </div>
    );
};

export default List;