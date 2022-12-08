import React, { useState } from "react";

const IsLoginContext = React.createContext();
function IsLoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <IsLoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </IsLoginContext.Provider>
  );
}

export { IsLoginContext, IsLoginProvider };
