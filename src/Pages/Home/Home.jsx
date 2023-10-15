import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Bestsell from '../Bestsell/Bestsell';
import Keybord from '../Keybord/Keybord';
import Card from '../Shared/Card/Card';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Bestsell></Bestsell>
            {/* <Keybord></Keybord> */}
            <Card></Card>
        </div>
    );
};

export default Home;