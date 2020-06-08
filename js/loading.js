function loading(){
	let	b = document.body;
	let e = document.getElementById('loading');
	let out = e.dataset.loadedDelay ? e.dataset.loadedDelay : '0';
	setTimeout(function(){ 
		if (!!b.classList.contains('loading')) {
			b.classList.add('loaded');
			b.classList.remove('loading');
		}
	}, out);
	if (!!e) {
	    e.addEventListener('transitionend', () =>{
	    	e.remove();
	    })
	}
}
loading();

// Always use transition for the loading div andd animations for whatever moving things you put in it