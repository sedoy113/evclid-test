document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.swiper', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: 'true'
		},
		autoplay: {
			delay: 2500
		}
	});

	document.querySelector('#burger-open').addEventListener('click', function () {
		document.querySelector('#burger').classList.toggle('is-activ');
	})
	document.querySelector('#burger-esc').addEventListener('click', function () {
		document.querySelector('#burger').classList.toggle('is-activ');
	})
})