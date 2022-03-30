import React from 'react';
import Header from "@component/partials/header";
import Footer from "@component/partials/footer";

export default function main(props)
{
    return (
        <div { ...props } className='flex flex-col h-screen'>
            <Header />
            <main className="h-screen">
                { props.children }
            </main>
            <Footer />
        </div>
    )
}
