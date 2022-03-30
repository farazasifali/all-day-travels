import React from 'react';
import Container from "@component/elements/wrappers/container";

export default function Footer()
{
    return (
        <footer className="bg-gray-800 text-gray-400 text-sm ">
            <Container className='flex justify-between bg-gray-800 container mx-auto py-5'>
                <span className="text-sm">
                    &copy; 2022 Workplace. All Rights Reserved.
                </span>
                <ul className="flex items-center space-x-4">
                    <li>
                        <a href="#" className="hover:underline ">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </Container>
        </footer>


    )
}
