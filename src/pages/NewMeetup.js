import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
    const history = useHistory();

    function addMeetupHandler(meetupObject) {
        fetch('https://demoreact-1619d-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupObject),
                headers: {
                    'content-Type': 'application/json'
                }
            }).then(
                () => {
                    history.replace('/');
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    return (
        <section>
            <h1> Add new Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetup;