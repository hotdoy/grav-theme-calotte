let	b = document.body;
let onTriggers = document.getElementsByClassName("header-panel__on");
let offTriggers = document.getElementsByClassName("header-panel__off");
let lastOffset = 0;

for (let onTrigger of onTriggers) {
	onTrigger.addEventListener("click", function(){
		b.classList.add("header-panel--on");
	})
}

for (let offTrigger of offTriggers) {
	offTrigger.addEventListener("click", function(){
		b.classList.remove("header-panel--on");
	})
}

window.addEventListener('resize', function(){
	if (window.innerWidth > 735 && b.classList.contains("header-panel--on")) {
		b.classList.remove("header-panel--on");
	}
});

window.addEventListener("scroll", function(){

   	let currentOffset = window.pageYOffset || document.documentElement.scrollTop;

   	if (currentOffset < lastOffset && window.pageYOffset > 200){
		b.classList.add("header-onscroll--on"); 
   	} else if (currentOffset > (lastOffset + 10) || window.pageYOffset < 200) {
    	b.classList.remove("header-onscroll--on");
   	}

   	lastOffset = currentOffset;
}, false);


