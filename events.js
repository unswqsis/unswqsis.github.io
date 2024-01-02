const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


export const createEvent = (event) => {
  const eventTime = new Date(event.time);
  const eventListing = document.createElement('article');
  eventListing.id = event.title;
  eventListing.className = "event";

  const eventImg = document.createElement('img');
  const eventTitle = document.createElement('h3');
  const eventLocation = document.createElement('p');
  const eventTimeElement = document.createElement('p');
  const eventDesc = document.createElement('p');
  
  eventTitle.innerText = event.title;
  eventLocation.innerText = event.location;
  eventTimeElement.innerText = formateTime(eventTime);
  eventDesc.innerText = event.desc.slice(0, 45) + "...";
  eventImg.src = event.image;
  eventImg.alt = event.title;

  eventListing.append(eventImg, eventTitle, eventTimeElement, eventLocation, eventDesc);
  return eventListing;
}

const formateTime = (time) => {
  let timeString = "";
  if (time.getHours() > 12) {
    timeString += (time.getHours() - 12);
    if (time.getMinutes() != 0){
      timeString += ":" + time.getMinutes();
    }
    timeString += " PM";
  } else {
    timeString += time.getHours();
    if (time.getMinutes() != 0){
      timeString += ":" + time.getMinutes();
    }
    timeString += " AM";
  }
  timeString += " " + months[time.getMonth()] + " " + time.getDate() + " " + time.getFullYear();
  return timeString;
}