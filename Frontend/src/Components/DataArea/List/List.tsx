import { ChangeEvent, useEffect, useState } from "react";
import DevGroupModel from "../../../Models/devGroup-model";
import MeetingModel from "../../../Models/meeting-model";
import dataService from "../../../Services/meetingsService";
import notifyService from "../../../Services/NotifyService";
import Card from "../Card/Card";
import "./List.css";

function List(): JSX.Element {

    const [groups, setGroups] = useState<DevGroupModel[]>([]);

    const [meetings, setMeetings] = useState<MeetingModel[]>([]);

    useEffect(() => {
        dataService.getAllGroups()
        .then(dbGroups => setGroups(dbGroups))
        .catch(err => notifyService.error(err))
    }, []);

    function getMeetings(args: ChangeEvent<HTMLSelectElement>){

        const groupId = +args.target.value;

        dataService.getMeetingsByGroup(groupId)
        .then(dbMeetings => setMeetings(dbMeetings))
        .catch(err => notifyService.error(err))
    }

    return (
        <div className="List">
			<h2>select group to view meetings</h2>

            <select defaultValue="" onChange={getMeetings}>
            <option disabled value="">Select group</option>
            {groups?.map(g => <option key={g.groupId} value={g.groupId}>
                {g.groupName}</option>)}</select>
            
            <br /><br />
            {meetings.map(m => <Card key={m.meetingId} meeting={m} />)}
        </div>
    );
}

export default List;
