import React, { useEffect, useRef, useState } from 'react';
import { Head, Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import { router } from '@inertiajs/core';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';

import { SiAmazoncognito } from "react-icons/si";
import { MdDashboard, MdLogout } from "react-icons/md";
import { menuLinks } from '@/Constants/MenuLinks';
import { FaAngleDown, FaBars } from "react-icons/fa6";

interface Props {
    title: string;
}

export default function MainLayout({title, children} : PropsWithChildren<Props>){
    const [darkMode, setDarkMode] = useState(true);
    const [sideBarOpen, setSideBarOpen] = useState(true);
    const [mobileWidth, setMobileWidth] = useState(false);
    const divRef = useRef<HTMLDivElement>(null)

    const route = useRoute();
    const page = useTypedPage();

    function logout(e: React.FormEvent) {
        e.preventDefault();
        router.post(route('logout'));
    }

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 768){
                setMobileWidth(true);
                setSideBarOpen(false);
            }
        };

        if(window.innerWidth < 768){
            setMobileWidth(true);
            setSideBarOpen(false);
        }
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Handler to call when clicking outside of the div
        const handleClickOutside = (event: MouseEvent) => {
            if (divRef.current && !divRef.current.contains(event.target as Node) && mobileWidth) {
                setSideBarOpen(false);
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
        <div>
            <Head title={title} />

            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-row">
                {sideBarOpen && (
                    <div ref={divRef} className="fixed z-50 md:z-0 md:relative bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700 h-[100vh] w-[280px] p-2">
                        <div className="bg-blue-500 p-3 rounded text-white flex flex-row items-center gap-3">
                            <div className='border w-14 h-14 flex flex-row items-center justify-center rounded-full'>
                                <SiAmazoncognito className='text-3xl' />
                            </div>

                            <div>
                                <h4 className='text-xl font-bold'>Health Insurance</h4>
                                <p className='text-md'>System</p>
                            </div>
                        </div>

                        <Link href={route('dashboard')}>
                            <button className='mt-3 bg-red-500 p-3 w-[100%] rounded text-white flex flex-row items-center gap-3'>
                                <MdDashboard className='text-2xl' />
                                <p>Dashboard</p>
                            </button>
                        </Link>

                        {menuLinks.map((link:any, index:number) => (
                            <Link href={route(link.route)} key={index}>
                                <button className='mt-3 p-2 rounded w-[100%] dark:text-white flex flex-row items-center gap-3 border border-gray-500'>
                                    <div className='flex flex-row gap-3 flex-1'>
                                        {link.icon}
                                        <p>{link.name}</p>
                                    </div>

                                    {link.submenus.length > 0 && <FaAngleDown />}
                                </button>
                            </Link>
                        ))}

                        <button onClick={logout} className='absolute bottom-2 right-2 left-2 mt-3 p-2 rounded dark:text-white flex flex-row items-center gap-3 border border-gray-500'>
                            <MdLogout className='text-2xl' />
                            Logout
                        </button>
                    </div>
                )}

                <div className="flex flex-row flex-1">
                    <div className='dark:dark:text-white w-[100%]'>
                        <div className='flex flex-row pt-2 pl-3 pr-3 justify-end border-b-2 border-b-red-500'>
                            <div className='flex flex-row flex-1 items-center'>
                                <button onClick={() => setSideBarOpen(!sideBarOpen)}>
                                    <FaBars className='text-xl' />
                                </button>
                            </div>

                            <div className="ml-3 relative">
                                <Link href={route('profile.show')}>
                                    <button
                                        type="button"
                                        className="inline-flex items-center"
                                    >
                                        <div className='flex flex-row items-center gap-3'>
                                            <div className="relative w-10 h-10 overflow-hidden bg-gray-600 rounded-full dark:bg-gray-600">
                                                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                            </div>
                                            {page.props.auth.user?.name}
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        
                        <main className='p-3'>{children}</main>
                    </div>
                </div>
            </div>
        </div>
    )
}