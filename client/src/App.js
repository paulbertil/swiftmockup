import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';

//components
import Layout from './components/Layout';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Perks from './components/Perks';
import VideoSection from './components/VideoSection';



const App = () => {
    return (
        <div className="App">
            <Layout>

                <Hero />

                <Showcase />

                <Perks />

                <VideoSection />

            </Layout>

        </div >
    );
}

export default App;
