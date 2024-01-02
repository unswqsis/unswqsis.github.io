import { createEvent } from "./events.js";

const upcoming = document.getElementById("upcoming-events");
const past = document.getElementById("past-events");
const soon = document.getElementById("soon");
const timeNow = new Date();

fetch("events.json")
  .then((res) => res.text())
  .then((text) => {
    const events = JSON.parse(text);
    events.forEach(event => {
      const eventTime = new Date(event.time);
      const eventListing = createEvent(event);

      if (eventTime >= timeNow) {
        const eventButton = document.createElement('button');
        const eventLink = document.createElement('a');
        eventButton.className = "main-button";
        eventButton.innerHTML = "Learn More";
        eventLink.href = event.facebookLink;
        eventLink.appendChild(eventButton);
        eventListing.appendChild(eventLink);

        upcoming.insertBefore(eventListing, soon);
      } else {
        if (past.childElementCount < 3){
          past.appendChild(eventListing);
        }
      }
    });
   })
  .catch((e) => console.error(e));