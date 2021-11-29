"use strict";

class CompanyUserController {
  async getAllEvents({ request, response, auth }) {
    let events = [
      {
        id: 1,
        eventName: "mobile launch",
        eventType: "external",
        eventDate: "11/7/2021",
        eventLocation: "Maryville",
        eventDescription: "Introducing brand new mobile",
      },
      {
        id: 2,
        eventName: "new recruitment",
        eventType: "internal",
        eventDate: "11/7/2021",
        eventLocation: "Maryville",
        eventDescription: "Introducing brand new mobile",
      },
    ];
    return events;
  }
}

module.exports = CompanyUserController;