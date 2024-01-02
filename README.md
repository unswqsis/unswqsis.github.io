# UNSW Queer Students in STEM

The website for UNSW Queer Students in STEM.

## Running

Open `index.html`.

## Adding a new event

You can add a new event by adding the following to the array in events.json.
```
  {
    "title": "",
    "location": "",
    "time": "2023-12-30T00:00:00",
    "desc": "",
    "facebookLink": "",
    "image": ""
  },
```
The time must be in "YYYY-MM-DDTHH:mm:ss" format or another format that javascript will understand.
You will have to upload the event image to the img folder and put the relative path in the event's image section.

Example:
```
  {
    "title": "QSIS Goes Bouldering",
    "location": "Sydney Indoor Climbing Gym St Peters",
    "time": "2023-10-19T12:00:00",
    "desc": "UNSW QSIS is going bouldering during week 6!! 🧗🏳️‍🌈🏳️‍⚧️",
    "facebookLink": "https://fb.me/e/1yjNujHJN",
    "image": "img/events/Bouldering poster.png"
  },
```

The event will automatically move from upcoming to past once it is past the event's time.