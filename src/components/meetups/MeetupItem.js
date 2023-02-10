import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';


function MeetupItem(props) {
    const favContext = useContext(FavoritesContext);

    const isItemIsFavorite = favContext.itemIsFavorite(props.meetup.id);


    function favoritHandler() {
        if (isItemIsFavorite) {
            favContext.removefavorites(props.meetup.id);
        } else {
            favContext.addFavorites(props.meetup);
        }
    }

    return (
        <Card>
            <li className={classes.item} >
                <div className={classes.image}>
                    <img src={props.meetup.image} alt={props.meetup.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.meetup.title}</h3>
                    <address>{props.meetup.address}</address>
                    <p>{props.meetup.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={favoritHandler}>{isItemIsFavorite ? 'remove from favorites' : 'To Favorites'}</button>
                </div>
            </li>
        </Card>
    );
}

export default MeetupItem;