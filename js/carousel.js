let sel = '.carousel .swiper-container';
let el = document.querySelectorAll(sel);

for (let e of el) {
	let id = e.id;
	let swiper = new Swiper('#'+id, {
		slidesPerView: 'auto',
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}
