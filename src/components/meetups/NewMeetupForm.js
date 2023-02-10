import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css"


function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHanndler(event) {
        event.preventDefault();

        const entredTitle = titleInputRef.current.value;
        const entredImage = imageInputRef.current.value;
        const entredAddress = addressInputRef.current.value;
        const entredDescription = descriptionInputRef.current.value;

        const meetupObject = {
            title: entredTitle,
            image: entredImage,
            address: entredAddress,
            description: entredDescription
        };

        props.onAddMeetup(meetupObject);

    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHanndler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id="addree" ref={addressInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea id="description" rows="5" required ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button> Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}
export default NewMeetupForm;