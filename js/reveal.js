var Reveal = (function(){
	var self = {};

	var RevealElement = function(e) {
		if (e.classList.contains('reveal--hidden')) {
			let revealClass = e.dataset.reveal.length ? e.dataset.reveal : 'reveal';
			if (!!revealClass) {
				let revealClassArray = revealClass.split(" ");
				e.classList.add(...revealClassArray);
		        setTimeout(function(){ 
		        	e.classList.remove('reveal--hidden');
		        }, TotalDelay(e));
			    e.addEventListener('transitionend', () =>{
			    	e.classList.remove('reveal--hidden');	
			    })
			}
		}
	};

	var TotalDelay = function(e) {
		let style = getComputedStyle(e);
		let adu = parseFloat(style.animationDuration.slice(0,-1));
		let ade = parseFloat(style.animationDelay.slice(0,-1));
		let totalDelay = (adu + ade) * 1000;
		return totalDelay;
	};

	var PrimeChildren = function() {
		let e = document.querySelectorAll('[data-reveal-children]');
		if (!!e) {
			for (var i0 = 0; i0 < e.length; i0++) {
				let classList = e[i0].dataset.revealChildren ? e[i0].dataset.revealChildren : '';
				let c = e[i0].children;
				if (!!c) {
					for (var i1 = 0; i1 < c.length; i1++) {
						c[i1].setAttribute('data-reveal', classList);
					}
				}
			}		
		}
	};

	self.Init = function() {
		PrimeChildren();
		let elements = document.querySelectorAll('[data-reveal]');
		let delay = document.querySelector('[data-reveal-initdelay]');
		delay = delay ? delay.dataset.revealInitdelay : '0';
		let observer = new IntersectionObserver(onIntersection, {rootMargin: '-10px', threshold: 0.01});	
		elements.forEach(e => {
			e.classList.add('reveal--hidden');
		});
		setTimeout(function(){
			elements.forEach(e => {
				observer.observe(e);
			});
		}, delay);
		function onIntersection(elements) {
			elements.forEach(e => {
				if (e.intersectionRatio > 0) {
					observer.unobserve(e.target);
					RevealElement(e.target);
				}
			})
		}
	};
	
	return self;
}());

Reveal.Init();
