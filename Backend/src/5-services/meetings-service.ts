import dal from "../4-utils/dal";
import { OkPacket } from "mysql";
import { ResourceNotFoundError } from "../2-models/client-errors";
import GroupModel from "../2-models/devGroup-model";
import MeetingModel from "../2-models/meeting-model";


// Get all dev-groups
async function getAllGroups(): Promise<GroupModel[]> {

    const sql = `SELECT * FROM devGroups`;

    const devGroups = await dal.execute(sql);

    return devGroups;
}

// Get meetings by group
async function getMeetingByGroup(groupId: number): Promise<MeetingModel[]> {

    const sql = `SELECT * FROM meetings WHERE groupId = ?`;

    const meetings = await dal.execute(sql, [groupId]);

    return meetings;
}

// Add meeting
async function addMeeting(meeting: MeetingModel): Promise<MeetingModel> {

    const sql = `INSERT INTO meetings VALUES(DEFAULT, ?, ?, ?, ?, ?)`;

    const addedMeeting: OkPacket = await dal.execute(sql,[meeting.groupId, meeting.start, meeting.end, meeting.description, meeting.meetingRoom]);

    meeting.meetingId = addedMeeting.insertId;

    return meeting;
}

export default {
    getAllGroups,
    getMeetingByGroup,
    addMeeting
};

