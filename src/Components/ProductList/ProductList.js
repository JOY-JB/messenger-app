import React from 'react';
import ProductItem from './ProductItem/ProductItem';

const ProductList = () => {
    const rating = {
        star: "5",
        reviewer: "1,123"
    }

    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hsTK4k8xjJx5QGk5jfZi8URo4w05bacotw&usqp=CAU"

    return (
        <div>
            <ProductItem image={image} title="Domestic Theatre" description="Californinan Mission" rating={rating} price="27.00" distance="0.3"></ProductItem>
            <ProductItem image={image} title="Domestic Theatre" description="Californinan Mission" rating={rating} price="27.00" distance="0.3"></ProductItem>
            <ProductItem image={image} title="Domestic Theatre" description="Californinan Mission" rating={rating} price="27.00" distance="0.3"></ProductItem>
        </div>
    );
};

export default ProductList;