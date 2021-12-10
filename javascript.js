const parallaxone = document.getElementById
("parallaxone");

window.addEventListener('scroll', function()
{
	let offset = window.pageYOffset;
	parallaxone.backgroundPositionY = offset * 0.7 + "px";
})