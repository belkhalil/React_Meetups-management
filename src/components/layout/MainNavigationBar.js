import { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MainNavigationBar.module.css"

function MainNavigationBar() {

    const favCtx = useContext(FavoritesContext);

    const totalFavorites = favCtx.totalFavorites;

    return (
        <header className={classes.header}>
            <div className={classes.logo}> React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add new Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>My favorites
                            <span className={classes.badge}>
                                {totalFavorites}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigationBar;