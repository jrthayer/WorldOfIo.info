import React, { createContext, useState } from "react";

export const modalStateContext = createContext({
    modalState: false,
    setModalState: () => {},
});

export const ModalStateProvider = ({ children }) => {
    const [modalState, setModalState] = useState(false);

    return (
        <modalStateContext.Provider value={{ modalState, setModalState }}>
            {children}
        </modalStateContext.Provider>
    );
};

export const useModalState = () => {
    /* We can use the "useContext" Hook to access a context from within
     another Hook, remember, Hooks are composable! */
    const { modalState, setModalState } = React.useContext(modalStateContext);
    return { modalState, setModalState };
};
