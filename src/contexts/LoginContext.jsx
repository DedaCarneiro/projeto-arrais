import { createContext, useState } from "react";

export const LoginContex = createContext();

const LoginProvider = ({children}) => {

    const [usuario, setUsuario] = useState({
        nome: "Edmilson",
        cargo: "Admin"
    }); 

    return ( 
        <LoginContex.Provider value={{usuario,setUsuario}}>
            {children}
        </LoginContex.Provider>
     );
}
 
export default LoginProvider;