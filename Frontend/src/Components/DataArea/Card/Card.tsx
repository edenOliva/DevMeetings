import MeetingModel from "../../../Models/meeting-model";
import "./Card.css";

interface CardProps {

	meeting: MeetingModel;
}

function Card(props: CardProps): JSX.Element {
    return (
        <div className="Card">
        <br />
        From: {new Date(props.meeting.start).toLocaleDateString()}, {new Date(props.meeting.start).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        <br /><br />
        To: {new Date(props.meeting.end).toLocaleDateString()}, {new Date(props.meeting.end).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        <br /><br />
        Description: {props.meeting.description}
        <br /><br />
        Room: {props.meeting.meetingRoom}
        
        </div>
    );
}

export default Card;
