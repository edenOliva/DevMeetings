import express, { Request, Response, NextFunction } from "express";
import MeetingModel from "../2-models/meeting-model";
import meetingsService from "../5-services/meetings-service";

const router = express.Router();

// GET http://localhost:4000/api/groups
router.get("/groups", async (request: Request, response: Response, next: NextFunction) => {
    try {

        const devGroups = await meetingsService.getAllGroups();

        response.json(devGroups);

    }
    catch(err: any) {
        next(err);
    }
});

// GET http://localhost:4000/api/meetingsByGroup/:groupId
router.get("/meetingsByGroup/:groupId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {

        const groupId = +request.params.groupId;

        const meetings = await meetingsService.getMeetingByGroup(groupId);

        response.json(meetings);

    }
    catch(err: any) {
        next(err);
    }
});

// POST http://localhost:4000/api/meetings
router.post("/meetings", async (request: Request, response: Response, next: NextFunction) => {
    try {

        const meeting = new MeetingModel(request.body);

        const addedMeeting = await meetingsService.addMeeting(meeting);

        response.status(201).json(addedMeeting);

    }
    catch(err: any) {
        next(err);
    }
});

export default router;
