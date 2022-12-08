import React, { useState } from "react";

const ItemsContext = React.createContext();
function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
}

export { ItemsContext, ItemsProvider };
