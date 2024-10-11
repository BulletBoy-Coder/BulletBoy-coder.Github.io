function showTime() {
	const time = new Date();
	document.getElementById('currentTime').innerHTML = time.toLocaleString('en-GB', { timeZone: 'Europe/London' });
}

showTime();

setInterval(function () {
	showTime();
}, 1000);