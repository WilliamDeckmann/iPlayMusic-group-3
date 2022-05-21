import { useState, createContext } from 'react';

export const AlbumsContext = createContext([])

const AlbumsProvider = ({children}) => {
const [albumData, setAlbumData] = useState([])
    return (
        <AlbumsContext.Provider value={{albumData, setAlbumData}}>
            {children}
        </AlbumsContext.Provider>
    )
}
export default AlbumsProvider