import Head from 'next/head'
import React, { FC } from 'react'
// import { Navbar } from '../ui';
// import { Sidebar } from '../ui/Sidebar';
interface Props {
    title?: string;
    img?: string;
}

const origin=(typeof window==='undefined')?'':window.location.origin

export const Layout: FC<Props> = ({ children, title, img }) => {
    const image=img || `${origin}/img/banner.png`;
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name='author' content='Romel Alexis' />
                <meta name='description' content={`Información sobre el pokemon ${title}`} />
                <meta name='keywords' content={` ${title} pokemon, pokedex`} />

                <meta property="og:title" content={`Información sobre el ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                <meta property="og:image" content={image} />
            </Head>
            <main 
            className="min-h-screen bg-gray-900 text-white"
            >
                {children}
            </main>
        </>
    )
}
