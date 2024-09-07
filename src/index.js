function getPercents(percent, number) {
	if (typeof(percent) === "number" && typeof(number) === "number") {
		return (number / 100 * percent);
	} else {
		return ("Неверные данные")
	}
	
}

module.exports = getPercents