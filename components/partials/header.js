import React from 'react';
import Navigation from "@component/partials/navigation";
import Link from "next/link";
import Container from "@component/elements/wrappers/container";

export default function Header()
{
    return (
        <Container className='py-4 flex justify-between'>
            <Link href="/">
                <div>
                    <span className="sr-only">Workflow</span>
                    <img
                        alt="Workflow"
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    />
                </div>
            </Link>
            <Navigation />
        </Container>
    )
}
