import React from 'react';
import { PropsWithChildren } from "react"

const Paper = ({children}: PropsWithChildren) => {
    return (
        <div className="text-gray-900 dark:text-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700">
            {children}
        </div>
    )
}

export default Paper;