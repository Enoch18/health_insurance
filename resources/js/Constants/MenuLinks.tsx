import React from 'react';
import { MdOutlineCardMembership } from "react-icons/md";
import { FaFileSignature } from 'react-icons/fa';
import { FaUserCog } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';

export const menuLinks = [
    {icon: <MdOutlineCardMembership className='text-2xl' />, name: 'Membership', route: '/membership', submenu: []},
    {icon: <FaFileSignature className='text-2xl' />, name: 'Claims', route: '/claims', submenu: []},
    {icon: <FaDollarSign className='text-2xl' />, name: 'Financials & Reports', route: '/financials-and-reports', submenu: []},
    {icon: <FaUserCog className='text-2xl' />, name: 'Administrations', route: '/administrations', submenu: []},
]