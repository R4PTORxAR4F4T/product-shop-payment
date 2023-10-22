import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Bestsell from '../Bestsell/Bestsell';
import Keybord from '../Keybord/Keybord';
import Card from '../Shared/Card/Card';
import AddItem from '../AddItem/AddItem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Bestsell></Bestsell>
            {/* <AddItem></AddItem> */}
        </div>
    );
};

export default Home;