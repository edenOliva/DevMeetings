class AppConfig {
    public devGroupsUrl = "http://localhost:4000/api/groups/";
    public meetingByGroupUrl = "http://localhost:4000/api/meetingsByGroup/";
    public meetingsURL = "http://localhost:4000/api/meetings/";
}

const appConfig = new AppConfig();

export default appConfig;
