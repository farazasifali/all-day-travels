import React from 'react';
import Main from '@component/layouts/main';
import Container from "@component/elements/wrappers/container";

export default function Home() {
    return (
        <Main>
            <div className='bg-gradient-to-r from-purple-500 to-pink-500 py-20'>
                <Container>
                    <div>
                        <h2 className='text-3xl'>
                            Be the first to know
                        </h2>
                        <p className='text-sm'>
                            Subscribe now and we'll send the best deals to you
                        </p>
                    </div>
                </Container>
            </div>
        </Main>
    )
}
