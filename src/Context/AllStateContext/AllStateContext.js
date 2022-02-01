import { useState } from "react";

const AllStateContext = () => {
    const [totalQuantity, setTotalQuantity] = useState([]);


    return {
        totalQuantity,
        setTotalQuantity
    }
}

export default AllStateContext;