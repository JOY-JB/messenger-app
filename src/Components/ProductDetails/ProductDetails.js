import React, { useEffect, useState } from 'react';
import AllStateContext from '../../Context/AllStateContext/AllStateContext';
import Button from '../Button/Button';

const ProductDetails = () => {
    // const [quantity, setQuantity] = useState(1);
    const { productQuantity, setProductQuantity } = AllStateContext();


    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hsTK4k8xjJx5QGk5jfZi8URo4w05bacotw&usqp=CAU";

    const handlePlus = () => {
        const newqty = productQuantity + 1;
        setProductQuantity(newqty)
    }
    const handleminus = () => {
        if (productQuantity > 1) {
            const newqty = productQuantity - 1;
            setProductQuantity(newqty);
        }
    }
    return (
        <div className="product-details">
            <div>
                <img className="product-details-image" src={image} />
                <div className="product-details-action">
                    <div >$27.00</div>
                    <div>
                        <button onClick={handleminus} className="product-details-action-btn">&#8722;</button>
                        <span className='product-details-action-qunatity'>{productQuantity}</span>
                        <button onClick={handlePlus} className="product-details-action-btn">&#43;</button>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div className='product-details-body'>
                        <p className="product-details-title">Domestic Theatre</p>
                        <p className="product-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta obcaecati amet veritatis earum eveniet dolorum praesentium eligendi perspiciatis tenetur consequatur.</p>
                    </div>
                </div>

                <div className="product-details-bottom-button">
                    <Button type="bottom-button" >Add to order</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;