import axios from "axios";
import DevGroupModel from "../Models/devGroup-model";
import MeetingModel from "../Models/meeting-model";
import appConfig from "../Utils/AppConfig";

class DataService {

    public async getAllGroups(): Promise<DevGroupModel[]> {
        
        const response = await axios.get<DevGroupModel[]>(appConfig.devGroupsUrl);

        const devGroups = response.data;

        return devGroups;
    }

    public async getMeetingsByGroup(groupId: number): Promise<MeetingModel[]> {
        
        const response = await axios.get<MeetingModel[]>(appConfig.meetingByGroupUrl + groupId);

        const meetings = response.data;
        
        return meetings;
    }

    public async addMeeting(meeting: MeetingModel): Promise<void>{
        
        const response = await axios.post<MeetingModel>(appConfig.meetingsURL, meeting);
        
        const addedMeeting = response.data;
        
        console.log(addedMeeting);
    }
}

const dataService = new DataService();

export default dataService;
