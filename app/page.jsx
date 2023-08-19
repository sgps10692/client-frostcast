import React from 'react';
import Layout from '../app/layout';
import Homeu from './components/pronosticos';
import Meteorologicas from './components/variables';
import QueEs from './components/que_es';
import Nosotros from './components/sobre_nosotros';
import Header from './components/Header';
import Footer from './components/Footer';

function Page() {
    return (
        <Layout>
            <Header />
            <Homeu />
            <Meteorologicas />
            <QueEs />
            <Nosotros />
            <Footer />
        </Layout>
    );
}

export default Page;
