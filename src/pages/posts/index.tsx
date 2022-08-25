import Head from 'next/head';

import styles from './styles.module.scss';

import { GetStaticProps } from 'next';

import { getPrismicClient } from '../../services/prismic';
import * as Prismic from "../../../node_modules/@prismicio/client/dist/index";

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication')
    ],
        {
            fetch: ['publication.title', 'publication.content'],
            pageSize: 100,
        }
    )

    console.log(response);

    return {
        props: {}
    }
}

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href='#'>
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with lerna & yarn workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared.</p>
                    </a>

                    <a href='#'>
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with lerna & yarn workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared.</p>
                    </a>

                    <a href='#'>
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with lerna & yarn workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared.</p>
                    </a>

                </div>
            </main>
        </>
    );
}