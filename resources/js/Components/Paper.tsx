import React from 'react';
import { PropsWithChildren } from "react"

const Paper = ({children}: PropsWithChildren) => {
    return (
        <div className="text-gray-900 dark:text-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent dark:border-gray-700 shadow rounded p-3">
            {children}
        </div>
    )
}

export default Paper;