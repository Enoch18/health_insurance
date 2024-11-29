import React from 'react';
import { MdMail, MdOutlineCardMembership } from "react-icons/md";
import { FaFileSignature } from 'react-icons/fa';
import { FaUserCog } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';

export const menuLinks = [
    {icon: <MdOutlineCardMembership className='text-2xl' />, name: 'Policy Holders', route: 'policy-holders.index', submenus: []},
    {icon: <FaFileSignature className='text-2xl' />, name: 'Claims', route: 'claims.index', submenus: []},
    {icon: <FaDollarSign className='text-2xl' />, name: 'Premium Payments', route: 'premiums.index', submenus: []},
    {icon: <FaUserCog className='text-2xl' />, name: 'Administrations', route: 'administrations.index', submenus: []},
    {icon: <MdMail className='text-2xl' />, name: 'Contact Support', route: 'contact-support.index', submenus: []},
]