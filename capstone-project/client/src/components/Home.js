

import ItemList from "./ItemList"
import Footer from "./Footer";
import frame26 from "./Images/frame26.png";

const Home = ({items}) => {
    return (
      <div>
        <img
          className="home_img"
          alt="home img"
          src={frame26}
          
        />
        <ItemList items={items} />
        <Footer />
      </div>
    );
};

export default Home;
