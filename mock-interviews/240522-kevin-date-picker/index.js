const calendarToggleButton = document.querySelector("#open-calendar-button");
const calendarContainer = document.querySelector("#calendar-container");
const today = new Date();

const calendar = `<div id="calendar-skeleton">
<div id="calendar-header">
<button id="back-month" class="calendar-month-arrow"><</button>
<p>${today.toLocaleString("en-GB", {
  day: "numeric",
  month: "short",
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
<div id="calendar-squares">${populateCalendarSquares()}</div>
</div>`;

function populateCalendarSquares() {
  let currDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const dateList = [];
  let currMonth = currDay.getMonth();
  let todayMonth = today.getMonth();

  while (currMonth === todayMonth) {
    dateList.push({
      fullDate: new Date(
        currDay.getFullYear(),
        currDay.getMonth(),
        currDay.getDate()
      ),
      dateNumber: currDay.getDate(),
    });
    currDay.setDate(currDay.getDate() + 1);
    currMonth = currDay.getMonth();
  }

  let html = ``;
  dateList.forEach(
    date =>
      (html += `<div data-date=${date.fullDate.toISOString()} >${
        date.dateNumber
      }</div>`)
  );

  return html;
}

calendarToggleButton.addEventListener("click", () => {
  // ADD TOGGLE LOGIC
  calendarContainer.innerHTML = calendar;
});

// If both are null, populate start date
// If end date is null, populate end date
// Method to populateStartDate
// Add class to start date calendar square
// Update startDateVariable
// Update start date display block
// Method to populateEndDate
// Add class to end date calendar square
// Add class to every square between start date and end date
// Update endDateVariable
// Update end date display block
// Event listener on cal container
// LATER: On third click, make it start date and clear prev start and end

calendarContainer.addEventListener("click", () => {
  // GET TARGET
  // RUN POPULATE METHOD
});

function populateStartDate(target) {
  target.classList.add("selected-date");
  startDate = new Date(target.data.date);
}
