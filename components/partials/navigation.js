import React from 'react';
import Anchor from '@component/elements/menu/anchor';

export default function Navigation()
{
    return (
        <nav className="flex items-center space-x-5">
            <Anchor to='/'>Home</Anchor>
            <Anchor to='/visas'>Visas</Anchor>
            <Anchor to='/easy-pay'>Easy Pay</Anchor>
            <Anchor to='/covid/info'>Covid Info</Anchor>
            <Anchor to='/covid/test'>Covid Test</Anchor>
            <Anchor to='/contact-us'>Contact Us</Anchor>
        </nav>
    )
}
