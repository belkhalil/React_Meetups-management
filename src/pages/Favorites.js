import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage(props) {

    let content;
    if (props.meetups.length === 0) {
        content = <p>You got not Favorites yet. Start adding some ?</p>
    } else {
        content = <MeetupList meetups={props.meetups} />
    }
    return <section>
        <h1>My Favorites Meetups</h1>
        {content}
    </section>
}

export default FavoritesPage;