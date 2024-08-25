import React, { useEffect, useState } from 'react';
import { Head } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import { router } from '@inertiajs/core';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import Dropdown from '@/Components/Dropdown';
import DropdownLink from '@/Components/DropdownLink';

import { SiAmazoncognito } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { menuLinks } from '@/Constants/MenuLinks';

interface Props {
    title: string;
}

export default function MainLayout({title, children} : PropsWithChildren<Props>){
    const [darkMode, setDarkMode] = useState(true);

    const route = useRoute();
    const page = useTypedPage();

    function logout(e: React.FormEvent) {
        e.preventDefault();
        router.post(route('logout'));
    }

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
    }, []);

    return (
        <div>
            <Head title={title} />

            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-row">

                <div className="dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700 h-[100vh] w-[280px] p-2">
                    <div className="bg-blue-500 p-3 rounded text-white flex flex-row items-center gap-3">
                        <div className='border w-14 h-14 flex flex-row items-center justify-center rounded-full'>
                            <SiAmazoncognito className='text-3xl' />
                        </div>

                        <div>
                            <h4 className='text-xl font-bold'>Health Insurance</h4>
                            <p className='text-md'>System</p>
                        </div>
                    </div>

                    <div className='mt-3 bg-red-500 p-3 rounded text-white flex flex-row items-center gap-3'>
                        <MdDashboard className='text-2xl' />
                        <p>Dashboard</p>
                    </div>

                    {menuLinks.map((link:any, index:number) => (
                        <div className='mt-3 p-2 rounded text-white flex flex-row items-center gap-3 border border-gray-500' key={index}>
                            {link.icon}
                            <p>{link.name}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-row flex-1">
                    <div className='dark:text-white w-[100%]'>
                        <div className='flex flex-row pt-2 pl-3 pr-3 justify-end border-b-2 border-b-red-500'>
                            <div className="ml-3 relative">
                                <Dropdown
                                    align="right"
                                    width="48"
                                    renderTrigger={() =>
                                    page.props.jetstream.managesProfilePhotos ? (
                                        <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                        <img
                                            className="h-8 w-8 rounded-full object-cover"
                                            src={page.props.auth.user?.profile_photo_url}
                                            alt={page.props.auth.user?.name}
                                        />
                                        </button>
                                    ) : (
                                        <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center"
                                        >
                                            <div className='flex flex-row items-center gap-3'>
                                                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                                    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                                </div>
                                                {page.props.auth.user?.name}
                                            </div>

                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                            </svg>
                                        </button>
                                        </span>
                                    )
                                    }
                                >
                                    {/* <!-- Account Management --> */}
                                    <div className="block px-4 py-2 text-xs text-gray-400">
                                        Manage Account
                                    </div>

                                    <DropdownLink href={route('profile.show')}>
                                        Profile
                                    </DropdownLink>

                                    {page.props.jetstream.hasApiFeatures ? (
                                    <DropdownLink href={route('api-tokens.index')}>
                                        API Tokens
                                    </DropdownLink>
                                    ) : null}

                                    <div className="border-t border-gray-200 dark:border-gray-600"></div>

                                    {/* <!-- Authentication --> */}
                                    <form onSubmit={logout}>
                                    <DropdownLink as="button">Log Out</DropdownLink>
                                    </form>
                                </Dropdown>
                            </div>
                        </div>
                        
                        <main className='p-2'>{children}</main>
                    </div>
                </div>
            </div>
        </div>
    )
}