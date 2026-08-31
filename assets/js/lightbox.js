/*
	Lightbox behavior for the gallery page.
*/
(function() {

	document.addEventListener('DOMContentLoaded', function() {

		var items = document.querySelectorAll('.gallery-item');
		if (!items.length) return;

		var lightbox = document.getElementById('lightbox');
		var lightboxImg = lightbox.querySelector('.lightbox-img');
		var closeBtn = lightbox.querySelector('.lightbox-close');
		var prevBtn = lightbox.querySelector('.lightbox-prev');
		var nextBtn = lightbox.querySelector('.lightbox-next');

		var sources = Array.prototype.map.call(items, function(item) {
			return item.querySelector('img').getAttribute('src');
		});
		var current = 0;

		function open(index) {
			current = index;
			lightboxImg.setAttribute('src', sources[current]);
			lightbox.classList.add('visible');
		}

		function close() {
			lightbox.classList.remove('visible');
		}

		function show(delta) {
			current = (current + delta + sources.length) % sources.length;
			lightboxImg.setAttribute('src', sources[current]);
		}

		items.forEach(function(item, index) {
			item.addEventListener('click', function() {
				open(index);
			});
		});

		closeBtn.addEventListener('click', close);
		prevBtn.addEventListener('click', function() { show(-1); });
		nextBtn.addEventListener('click', function() { show(1); });

		lightbox.addEventListener('click', function(e) {
			if (e.target === lightbox)
				close();
		});

		document.addEventListener('keydown', function(e) {
			if (!lightbox.classList.contains('visible')) return;
			if (e.key === 'Escape') close();
			if (e.key === 'ArrowLeft') show(-1);
			if (e.key === 'ArrowRight') show(1);
		});

	});

})();
