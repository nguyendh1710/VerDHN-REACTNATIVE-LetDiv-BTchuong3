import data from "./../data.json";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  // nếu không coppy dữ diệu gốc [...data] thì khi thực hiện các thao tác như update, xóa nó sẽ xóa luôn dữ liệu gốc
  const [list, setList] = useState([...data]);
 
  return (
    <AppContext.Provider value={{ list, setList }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;


