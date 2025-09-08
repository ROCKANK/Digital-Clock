function updateTime() {
  const now = new Date();

  // Time
  let h = now.getHours().toString().padStart(2, "0");
  let m = now.getMinutes().toString().padStart(2, "0");
  let s = now.getSeconds().toString().padStart(2, "0");

  updateFlip("hours", h);
  updateFlip("minutes", m);
  updateFlip("seconds", s);

  // Date
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.getElementById("day").textContent = days[now.getDay()];
  document.getElementById("date").textContent = now.getDate();
  document.getElementById("month").textContent = months[now.getMonth()];
  document.getElementById("year").textContent = now.getFullYear();
}

function updateFlip(id, newVal) {
  const flip = document.getElementById(id);
  const currentVal = flip.textContent;

  if (currentVal !== newVal) {
    flip.classList.remove("animate");
    void flip.offsetWidth; // restart animation
    flip.classList.add("animate");
    flip.textContent = newVal;
  }
}

setInterval(updateTime, 1000);
updateTime();
