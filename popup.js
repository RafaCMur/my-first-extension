import { getFakeEventsInfo } from "./fake-api.js";

function displayEvent(event) {
  const eventsContainer = document.getElementById("events-container");
  const eventElem = document.createElement("div");
  eventElem.className = "event";

  const nameElem = document.createElement("h2");
  nameElem.textContent = event.name;
  eventElem.appendChild(nameElem);

  const dateElem = document.createElement("li");
  dateElem.textContent = event.date;
  eventElem.appendChild(dateElem);

  const locationElem = document.createElement("li");
  locationElem.textContent = `${event.location.venue}, ${event.location.city}, ${event.location.country}`;
  eventElem.appendChild(locationElem);

  const artistsElem = document.createElement("li");
  artistsElem.textContent = event.artists
    .map((artist) => artist.name)
    .join(", ");
  eventElem.appendChild(artistsElem);

  const ticketsElem = document.createElement("li");
  ticketsElem.textContent = event.tickets.available
    ? `Price: ${event.tickets.price} - Tickets available!`
    : "Tickets sold out!";
  eventElem.appendChild(ticketsElem);

  eventsContainer.appendChild(eventElem);
}

async function fetchData() {
  try {
    const eventList = await getFakeEventsInfo();

    eventList.forEach((event) => {
      displayEvent(event);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchData();
