function link(sel){
	let body = document.body;
	let links = document.querySelectorAll(sel);
	links.forEach(link => {
		let href = link.getAttribute('href');
		if (!!href && href.match('^http')) {
			link.setAttribute('target', '_blank');
			link.setAttribute('rel', 'noopener');
		}
		else if (!!href && href.match('^/')) {
			link.addEventListener('click', function(event){
				body.classList.add('exiting');
			}, false);
			let preLoadLink = document.createElement("link");
			preLoadLink.rel = 'preconnect';
			preLoadLink.href = href;
			document.head.appendChild(preLoadLink);				
		}
	})
}
link('a');
