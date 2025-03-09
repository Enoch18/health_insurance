import React, { PropsWithChildren, useEffect, useState } from 'react';

export default function AuthenticationCard({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
}, []);

  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
      <div>
        <h4 className='text-3xl text-blue-400'>Health Insurance</h4>
      </div>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
        <h4 className='text-white text-xl'>Login</h4><hr className='mb-3 border-gray-500' />
        {children}
      </div>
    </div>
  );
}
