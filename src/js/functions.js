import {
	hoursElement,
	minutesElement,
	dayOfWeekElement,
	dayElement,
	monthElement,
	yearElement
} from './dom';

import { days, months } from './const';

const rootStyles = document.documentElement.style;

const updateDigitalClock = (
	hours,
	minutes,
	dayOfWeek,
	dayNumber,
	month,
	currentYear
) => {
	hoursElement.textContent = hours;
	minutesElement.textContent = minutes;
	dayOfWeekElement.textContent = days[dayOfWeek];
	dayElement.textContent = dayNumber;
	monthElement.textContent = months[month];
	yearElement.textContent = currentYear;
};

const updateHandsOfClock = (hours, minutes, seconds) => {
	const hoursDegrees = `${hours * 30}deg`;
	const minutesDegrees = `${minutes * 6}deg`;
	const secondsDegrees = `${seconds * 6}deg`;

	rootStyles.setProperty('--hours-hand-rotate', hoursDegrees);
	rootStyles.setProperty('--minutes-hand-rotate', minutesDegrees);
	rootStyles.setProperty('--seconds-hand-rotate', secondsDegrees);
};

const updateClock = () => {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const dayOfWeek = date.getDay();
	const dayNumber = date.getDate();
	const month = date.getMonth();
	const currentYear = date.getFullYear();

	updateHandsOfClock(hours, minutes, seconds);
	updateDigitalClock(hours, minutes, dayOfWeek, dayNumber, month, currentYear);
};

export { updateDigitalClock, updateHandsOfClock, updateClock, rootStyles };
