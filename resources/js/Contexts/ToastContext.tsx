import Toast from "@/Components/Common/Toast";
import React, { createContext, PropsWithChildren, useEffect, useState } from "react";

export const ToastContext = createContext<any>(null);

const ToastProvider = ({children}: PropsWithChildren) => {
    const [type, setType] = useState<'success' | 'error'>('success');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if(message !== ''){
            setTimeout(() => {
                setMessage('');
            }, 7000);
        }
    }, [message])

    return (
        <ToastContext.Provider value={{
            setType,
            setMessage
        }}>
            {children}
            <Toast type={type} message={message} setMessage={setMessage} />
        </ToastContext.Provider>
    )
}
export default ToastProvider;