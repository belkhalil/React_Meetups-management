import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

function AllMeetupPage() {
    const [meetups, setMeetups] = useState();
    const [isLoaded, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        fetch('https://demoreact-1619d-default-rtdb.firebaseio.com/meetups.json'
        ).then(
            (response) => {
                return response.json();
            },
            (error) => {
                console.log(error);
            }
        ).then(
            (data) => {

                const meetups = [];
                for(const key in data){
                    const meetup ={
                        id: key,
                        ...data[key]
                    }
                    meetups.push(meetup);
                }
                setLoading(false);
                setMeetups(meetups);
            }, (error) => {
                console.log(error);
            }
        );
    }, []);

    if (isLoaded) {
        return <div> <p> Loading...</p></div>
    }
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={meetups} />
        </section>
    )
}

export default AllMeetupPage;