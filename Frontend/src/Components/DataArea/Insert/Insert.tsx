import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DevGroupModel from "../../../Models/devGroup-model";
import MeetingModel from "../../../Models/meeting-model";
import dataService from "../../../Services/meetingsService";
import notifyService from "../../../Services/NotifyService";
import "./Insert.css";

function Insert(): JSX.Element {

    const [groups, setGroups] = useState<DevGroupModel[]>([]);

    const {register, handleSubmit} = useForm<MeetingModel>();

    const navigate = useNavigate();

    useEffect(() => {
        dataService.getAllGroups()
        .then(dbGroups => setGroups(dbGroups))
        .catch(err => notifyService.error(err))
    }, []);

    function send(meeting: MeetingModel){

        dataService.addMeeting(meeting)
        .then(() => {
            notifyService.success("Meeting as been added");
            navigate("/home");
        })
        .catch(err => notifyService.error(err))
    }
    
    return (
        <div className="Insert">
			<h2>Add meeting</h2>

            <form onSubmit={handleSubmit(send)}>

            <label>select group:</label>
            <select defaultValue="" required {...register("groupId")}>
            <option disabled value="">Select group</option>
            {groups?.map(g => <option key={g.groupId} value={g.groupId}>
                {g.groupName}</option>)}</select>
            

            <label>from:</label>
            <input type="datetime-local" required {...register("start")}/>
            
            <label>to:</label>
            <input type="datetime-local" required {...register("end")}/>

            <label>description:</label>
            <input type="text" required {...register("description")}/>

            <label>room:</label>
            <input type="text" required {...register("meetingRoom")}/>
            
            <button>Add</button>
            
            </form>
        </div>
    );
}

export default Insert;
