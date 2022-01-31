import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem/ProductItem';

const ProductList = () => {
    const [product, setProduct] = useState([]);
    const rating = {
        star: "5",
        reviewer: "1,123"
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hsTK4k8xjJx5QGk5jfZi8URo4w05bacotw&usqp=CAU"

    return (
        <div>
            {
                product.map(product => <ProductItem image={image} id={product?.id} key={product?.id} title={product?.name} description={product?.email.slice(0, 15)} rating={rating} price="27.00" distance="0.3"></ProductItem>)
            }
        </div>
    );
};

export default ProductList;