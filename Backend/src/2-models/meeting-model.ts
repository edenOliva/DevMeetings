import DevGroupModel from "./devGroup-model";

class MeetingModel {

    public meetingId: number;
    public groupId: DevGroupModel;
    public start: string;
    public end: string;
    public description: string;
    public meetingRoom: string;

    public constructor (meeting: MeetingModel){

        this.meetingId = meeting.meetingId;
        this.groupId = meeting.groupId;
        this.start = meeting.start;
        this.end = meeting.end;
        this.description = meeting.description;
        this.meetingRoom = meeting.meetingRoom;
    }
}

export default MeetingModel;