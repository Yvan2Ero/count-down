const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const year = document.getElementById("year")

const currentYear = new Date().getFullYear()


let inputYear = currentYear + 1
// Tu peu modifier la valeur de inputYear
// en respectant le fait qu'elle n'est pas sense etre 
// inferieur a l' annee actuel sinon c'est rien ne decomptera.

const newYearTime = new Date(`January 01 ${inputYear} 00:00:00`);

function updateCountDown() {
	const currentTime = new Date();
	const diff = newYearTime - currentTime;
	const d = Math.floor(diff / 1000 / (60*60*24))
	const h = Math.floor(diff / 1000 / (60*60)) % 24
	const m = Math.floor(diff / 1000 / (60)) % 60
	const s = Math.floor(diff / 1000) % 60

	if(d<0 || h<0 || m<0 || s<0)
	{
		d = 0
		h = 0
		m = 0
		s = 0
	}
	days.innerHTML 		= d < 10 ? '0' + d : d
	hours.innerHTML		= h < 10 ? '0' + h : h
	minutes.innerHTML 	= m < 10 ? '0' + m : m
	seconds.innerHTML	= s < 10 ? '0' + s : s
}

setInterval(updateCountDown, 1000);

