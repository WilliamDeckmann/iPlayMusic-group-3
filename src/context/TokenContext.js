import { useState, createContext } from 'react';

export const TokenContext = createContext(null)

const TokenProvider = ({children}) => {
const [token, setToken] = useState(null)
    return (
        <TokenContext.Provider value={{token, setToken}}>
            {children}
        </TokenContext.Provider>
    )
}
export default TokenProvider