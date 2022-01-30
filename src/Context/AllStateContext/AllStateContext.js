import { useState } from "react";

const AllStateContext = () => {
    const [productQuantity, setProductQuantity] = useState(0)

    return {
        productQuantity,
        setProductQuantity,
    }
}

export default AllStateContext;