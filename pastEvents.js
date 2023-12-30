import { createEvent } from "./events.js";

const past = document.getElementById("past-events");
const timeNow = new Date();

fetch("events.json")
  .then((res) => res.text())
  .then((text) => {
    const events = JSON.parse(text);
    events.forEach(event => {
      const eventTime = new Date(event.time);
      const eventListing = createEvent(event);

      if (eventTime < timeNow) {
          past.appendChild(eventListing);
        }
    });
   })
  .catch((e) => console.error(e));
