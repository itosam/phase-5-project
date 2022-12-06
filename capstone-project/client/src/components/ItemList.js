import ItemCard from "./ItemCard"
import Container from "react-bootstrap/Container";

const ItemList = ({items}) => {
  
  const itemCard = items.map((item) => {
  return(
  <ItemCard
    key ={item.id}
    id={item.id}
    name={item.name}
    description={item.description}
    category={item.category}
    price={item.price}
    image={item.image}
  />)});
  return (
    <Container className="bg-light text-center" style={{ marginTop: "10px" }}>
      <h1 style={{ padding: "20px" }}>search bar here</h1>
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
