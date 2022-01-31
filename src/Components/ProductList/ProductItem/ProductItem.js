import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AllStateContext from '../../../Context/AllStateContext/AllStateContext';
import Button from '../../Button/Button';

const ProductItem = ({ image, title, description, rating, price, distance, id }) => {
    const { star, reviewer } = rating;
    const { productQuantity, setProductQuantity } = AllStateContext();

    // setProductQuantity([...productQuantity, { id: `${id}`, quantity: 1 }])

    const handlePlus = () => {
        let newqty = productQuantity.filter(product => product.id === id)
        console.log(newqty);
        // [{ id: `$id`, quantity: newqty }]
        // setProductQuantity((prev)=> [...prev,newqty])
        // setProductQuantity(newqty)
    }
    const handleminus = () => {
        if (productQuantity > 1) {
            const newqty = productQuantity - 1;
            setProductQuantity(newqty);
        }
    }


    return (
        <div className="product-item">
            <div className={`product-image`} style={{ backgroundImage: `url(${image})` }}></div>

            <div className='product-body'>
                <p className="product-title">{title}</p>
                <div className="product-ratings">
                    {
                        star <= 0 ?
                            <div className='rating-star'>☆☆☆☆☆</div> :
                            star > 0 && star <= 1 ?
                                <div className='rating-star'>★☆☆☆☆</div> :
                                star > 1 && star <= 2 ?
                                    <div className='rating-star'>★★☆☆☆</div> :
                                    star > 2 && star <= 3 ?
                                        <div className='rating-star'>★★★☆☆</div> :
                                        star > 3 && star <= 4 ?
                                            <div className='rating-star'>★★★★☆</div> :
                                            <div className='rating-star'>★★★★★</div>
                    }

                    <span className="total-reviewer">{reviewer} reviews</span>
                </div>
                <p className="product-description">{description}</p>
            </div>

            <div className="quantityAction">
                <button onClick={handleminus} className="product-details-action-btn">&#8722;</button>
                <span className='product-details-action-qunatity'>0</span>
                <button onClick={handlePlus} className="product-details-action-btn">&#43;</button>
            </div>

            <div className='product-action'>
                <div>
                    <Link to={`/product-details/${id}`} className="product-send-button" >
                        <Button icon="fas fa-paper-plane" variant="secondary" size="lg" type="icon"></Button>
                    </Link>
                    <p className="product-price">{price}$</p>
                    <p className="product-distance">{distance} mi</p>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;


//// list from jsonplaceholder
/// product/:id => details
// state management
////center button