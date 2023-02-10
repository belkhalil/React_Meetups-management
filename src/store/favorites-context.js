import { createContext, useState } from "react";

/**
 * create a context Object using the hook createContext and init some values 
 */
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorites: (favoriteMeetup) => { },
    removefavorites: (meetupId) => { },
    itemIsFavorite: (meetupId) => { }
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoritesHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removefavoritesHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((favorite) => favorite.id !== meetupId)
        })
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some((meetup) => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorites: addFavoritesHandler,
        removefavorites: removefavoritesHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    /**
     * Provider is a componenet exposed by the Object FavoritesContext
     * 
     */
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;