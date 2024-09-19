import React, { Fragment, PropsWithChildren, useEffect, useRef } from "react";

interface Props{
    open: boolean;
    setOpen: Function;
    children?:any
}

const CustomModal = ({open, setOpen, children}: Props) => {
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(open){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    useEffect(() => {
        // Handler to call when clicking outside of the div
        const handleClickOutside = (event: MouseEvent) => {
            if (divRef.current && !divRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [divRef]);

    return (
        <Fragment>
            {open && (
                <div className="fixed bg-[rgba(0,0,0,0.8)] top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                    <div ref={divRef} className="bg-white dark:bg-gray-600 p-3 max-w-[500px] w-[100%] rounded">
                        {children}
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default CustomModal;