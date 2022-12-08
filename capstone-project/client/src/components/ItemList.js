import { useEffect, useState } from "react";
import ItemCard from "./ItemCard"
import SearchFilter from "./SearchFilter"
import Container from "react-bootstrap/Container";

const ItemList = ({items}) => {
  
  const [searchTerm, setSearchTerm] = useState("");

  const itemDisplay = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const itemCard = itemDisplay.map((item) => {
  return(
  <ItemCard
    key ={item.id}
    id={item.id}
    name={item.name}
    description={item.description}
    brand={item.brand}
    price={item.price}
    image={item.image}
  />)});
  return (
    <Container className="bg-light text-center" style={{ marginTop: "10px", paddingTop:"10px"}}>
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div
        style={{
          margin: "",
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {itemCard}
      </div>
    </Container>
  );
};

export default ItemList
