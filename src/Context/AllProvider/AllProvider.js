import React, { createContext } from 'react';
import AllStateContext from '../AllStateContext/AllStateContext';

export const AllContext = createContext();

const AllProvider = ({ children }) => {

    const context = AllStateContext();

    return (
        <AllContext.Provider value={context}>
            {children}
        </AllContext.Provider>
    );
};

export default AllProvider;