var Announcement = (function(){
    var self = {};

    var AddAction = function(id, store, lbl) {
        let e = document.createElement('div');
        e.className = 'announcement__label';
        e.innerHTML = lbl;
        e.addEventListener("click", function () {
            if (!!store && store == 1) {
               localStorage.setItem(id, Date.now()); 
            }
            this.parentNode.remove();
        });
        return e;
    }

    self.CreateAnnouncement = function(id, theme, store, msg, lbl) {
        let e = document.createElement('div');
        e.className = 'announcement ' + theme;
        e.innerHTML = msg;
        e.appendChild(AddAction(id, store, lbl));
        $('body').append(e);
    }

    self.Init = function() {
        let a = document.querySelectorAll('[data-announcement]');
        a.forEach(b => {
            let id = b.dataset.id;
            let theme = b.dataset.theme;
            let store = b.dataset.store;
            let msg = b.innerHTML;
            let lbl = b.dataset.lbl;
            let storedValue = id ? localStorage.getItem(id) : null;  
            if ((storedValue == null || Date.now() - storedValue > 86400000) && msg) {
                self.CreateAnnouncement(id, theme, store, msg, lbl);            
            };
            b.remove();

        });
    }

    return self;
}());

Announcement.Init();
