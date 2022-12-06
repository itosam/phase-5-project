import {useEffect, useState} from 'react'
import ItemList from "./ItemList"
import Footer from "./Footer";

const Home = ({items}) => {
    return (
      <div>
        <img class="home_img" src="https://rejuvage.com/wp-content/uploads/2017/02/secondary-banner-placeholder.jpg" />
        <ItemList items={items} />
        <Footer/>
      </div>
    );
};

export default Home;
