// fake-api.js

const listOfEvents = [
  {
    event_id: "105973572",
    name: "Rock Fest 2025",
    date: "2025-08-15",
    location: {
      venue: "Madison Square Garden",
      city: "New York",
      country: "USA",
    },
    artists: [
      { name: "The Rolling Stones", genre: "Rock" },
      { name: "Imagine Dragons", genre: "Alternative Rock" },
    ],
    tickets: {
      available: true,
      price: "50-150 USD",
      link: "https://fake-tickets.com/rock-fest-2025",
    },
  },
  {
    event_id: "105973573",
    name: "Pop Fest 2025",
    date: "2025-09-15",
    location: {
      venue: "Wembley Stadium",
      city: "London",
      country: "UK",
    },
    artists: [
      { name: "Ariana Grande", genre: "Pop" },
      { name: "Ed Sheeran", genre: "Pop" },
    ],
    tickets: {
      available: false,
      price: "100-200 GBP",
      link: "https://fake-tickets.com/pop-fest-2025",
    },
  },
];

export const getFakeEventsInfo = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listOfEvents);
    }, 1000);
  });
};
