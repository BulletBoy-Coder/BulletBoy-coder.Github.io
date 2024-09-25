function showTime() {
	const now = new Date();
	document.getElementById('currentTime').innerHTML = now.toLocaleString('en-GB', { timeZone: 'Europe/London' });
}

showTime();

setInterval(function () {
	showTime();
}, 1000);
