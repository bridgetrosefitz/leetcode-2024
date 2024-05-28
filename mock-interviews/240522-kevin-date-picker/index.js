const calendarToggleButton = document.querySelector("#open-calendar-button");
const calendarContainer = document.querySelector("#calendar-container");
const today = new Date();
const startEndContainer = document.querySelector("#start-end-container");
const startDateEl = startEndContainer.querySelector("#start-date");
const endDateEl = startEndContainer.querySelector("#end-date");

const calendar = `<div id="calendar">
<div id="calendar-header">
<button id="back-month" class="calendar-month-arrow"><</button>
<p>${today.toLocaleString("en-GB", {
  month: "short",
  year: "numeric",
})}</p>
<button id="forward-month" class="calendar-month-arrow">></button>
</div>
<div id="days-of-week">
<p>Mon</p>
<p>Tue</p>
<p>Wed</p>
<p>Thu</p>
<p>Fri</p>
<p>Sat</p>
<p>Sun</p>
</div>
</div>
<div id="calendar-squares">${populateCalendarSquares()}</div>`;

function populateCalendarSquares() {
  let currDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const dateList = [];
  let currMonth = currDay.getMonth();
  let todayMonth = today.getMonth();
  const weekdayOfFirstOfMonth = currDay.getDay();

  // IS THERE A LESS HACKY WAY TO DO THIS
  for (let i = 0; i < weekdayOfFirstOfMonth - 1; i++) {
    dateList.push(null);
  }

  while (currMonth === todayMonth) {
    dateList.push(
      new Date(currDay.getFullYear(), currDay.getMonth(), currDay.getDate())
    );
    currDay.setDate(currDay.getDate() + 1);
    currMonth = currDay.getMonth();
  }

  let html = ``;

  dateList.forEach(date => {
    const dataAttribute = date ? date.toISOString() : "placeholder-day";

    const display = date ? date.getDate() : "";
    html += `<div class="day-of-month" data-date=${dataAttribute} >${display}</div>`;
  });

  return html;
}

calendarToggleButton.addEventListener("click", () => {
  // ADD TOGGLE LOGIC
  calendarContainer.innerHTML = calendar;
});

// If both are null, populate start date
// If end date is null, populate end date
// DONE Method to populateStartDate
// DONE Add class to start date calendar square
// DONE Update start date display block
// Method to populateEndDate
// Add class to every square between start date and end date
// Update end date display block
// Event listener on cal container
// LATER: On third click, make it start date and clear prev start and end

calendarContainer.addEventListener("click", ({ target }) => {
  if (target.classList.contains("day-of-month")) {
    if (!startDate.value && !endDate.value) {
      populateStartDate(target);
    } else if (!endDate.value) {
      populateEndDate(target);
    } else {
      // clearDates()
      // cleanup display of cal in clearDates
      // startDate.value = null;
      // endDate.value = null;
    }
  }
});

function populateEndDate() {
  console.log("i love eating Kevs poop straight out of his butt");
}

function populateStartDate(element) {
  element.classList.add("selected-date");
  startDate.value = new Date(element.dataset.date);
}

const startDateHandler = {
  set(target, property, newValue) {
    target[property] = newValue;
    startDateEl.textContent = newValue.toLocaleDateString();
    return true;
  },
};

const endDateHandler = {
  set(target, property, newValue) {
    target[property] = newValue;
    endDateEl.textContent = newValue.toLocaleDateString();
    return true;
  },
};

let startDate = new Proxy({ value: null }, startDateHandler);
let endDate = new Proxy({ value: null }, endDateHandler);
