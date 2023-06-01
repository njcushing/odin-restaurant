const openingTimesPanel = (classes = []) => {
    const e = document.createElement("div");
    e.classList.add("opening-times-panel");
    classes.forEach((cls) => {
        e.classList.add(cls);
    });

    const setDayTimes = (day, openingTime, closingTime) => {
        if (day < 0 || day > 6) return;
        days[day].childNodes[1].textContent = openingTime;
        days[day].childNodes[2].textContent = "-";
        days[day].childNodes[3].textContent = closingTime;
    };

    const setDayClosed = (day) => {
        if (day < 0 || day > 6) return;
        days[day].childNodes[1].textContent = "Closed";
        days[day].childNodes[2].textContent = "";
        days[day].childNodes[3].textContent = "";
    };

    let days = [];
    for (let i = 0; i < 7; i++) {
        const day = document.createElement("div");
        day.classList.add("opening-times-panel-day");
        e.appendChild(day);

        const dayName = document.createElement("div");
        dayName.classList.add("opening-times-panel-day-name");
        day.appendChild(dayName);

        const dayOpeningTime = document.createElement("div");
        dayOpeningTime.classList.add("opening-times-panel-day-opening-time");
        day.appendChild(dayOpeningTime);

        const dayTimeSeparator = document.createElement("div");
        dayTimeSeparator.classList.add("opening-times-panel-day-time-sep");
        dayTimeSeparator.textContent = "-";
        day.appendChild(dayTimeSeparator);

        const dayClosingTime = document.createElement("div");
        dayClosingTime.classList.add("opening-times-panel-day-closing-time");
        day.appendChild(dayClosingTime);

        switch (i) {
            case 0:
                dayName.textContent = "Monday: ";
                break;
            case 1:
                dayName.textContent = "Tuesday: ";
                break;
            case 2:
                dayName.textContent = "Wednesday: ";
                break;
            case 3:
                dayName.textContent = "Thursday: ";
                break;
            case 4:
                dayName.textContent = "Friday: ";
                break;
            case 5:
                dayName.textContent = "Saturday: ";
                break;
            case 6:
                dayName.textContent = "Sunday: ";
                break;
            default:
                dayName.textContent = "Error!";
        }

        days.push(day);

        setDayTimes(i, "00:00am", "00:00am");
    }

    return {
        e,
        setDayTimes,
        setDayClosed,
    };
};
export default openingTimesPanel;
