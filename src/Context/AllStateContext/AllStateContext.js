import { useState } from "react";

const AllStateContext = () => {
    const [productQuantity, setProductQuantity] = useState([{ id: 1, quantity: 1 }]);


    return {
        productQuantity,
        setProductQuantity,
    }
}

export default AllStateContext;