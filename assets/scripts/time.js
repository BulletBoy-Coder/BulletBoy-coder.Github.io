function showTime() {
	const now = new Date();
	document.getElementById('currentTime').innerHTML = now.toLocaleString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false });
}

showTime();

setInterval(function () {
	showTime();
}, 1000);
