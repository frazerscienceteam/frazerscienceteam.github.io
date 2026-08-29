/*
	Simple auto-advancing image carousel for the homepage bulletin box.
*/
(function() {

	document.addEventListener('DOMContentLoaded', function() {

		var carousel = document.getElementById('team-carousel');
		if (!carousel) return;

		var slides = carousel.querySelectorAll('.carousel-slide');
		var dots = document.querySelectorAll('#bulletin .dot');
		var current = 0;
		var interval = null;

		function show(index) {
			slides.forEach(function(slide, i) {
				slide.classList.toggle('active', i === index);
			});
			dots.forEach(function(dot, i) {
				dot.classList.toggle('active', i === index);
			});
			current = index;
		}

		function next() {
			show((current + 1) % slides.length);
		}

		function startAuto() {
			interval = setInterval(next, 5000);
		}

		function stopAuto() {
			clearInterval(interval);
		}

		dots.forEach(function(dot, i) {
			dot.addEventListener('click', function() {
				show(i);
				stopAuto();
				startAuto();
			});
		});

		if (slides.length > 1)
			startAuto();

	});

})();
