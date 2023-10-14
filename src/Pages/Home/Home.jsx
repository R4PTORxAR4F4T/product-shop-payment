import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Bestsell from '../Bestsell/Bestsell';
import Keybord from '../Keybord/Keybord';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Bestsell></Bestsell>
            <Keybord></Keybord>
        </div>
    );
};

export default Home;