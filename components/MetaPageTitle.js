import React from 'react';
import Head from 'next/head'

const MetaPageTitle = ({ title }) => {
    return (
        <div>
            <Head>
                <title>{title} | Coinbase Web</title>
                <meta property="og:title" content={title} key={title} />
            </Head>
        </div>
    )
}

export default MetaPageTitle