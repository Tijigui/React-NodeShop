import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/header';
import { Main } from '../Components/Main/Main';

export function Home() {
    return (
        <div className="">
            <Header />
            <Main />
            <Footer />
        </div>

    );
}