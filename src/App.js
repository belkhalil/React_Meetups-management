import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMeetupPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeepupPage from './pages/NewMeetup';
import FavoritesContext from './store/favorites-context';
function App() {
  const favContext = useContext(FavoritesContext);

  const meetups = favContext.favorites;

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeepupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage meetups ={meetups}/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
