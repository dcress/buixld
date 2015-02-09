(function(){
	var app = {

		currentPanel: 1,
		panelCount: 1,
		progressBar: document.getElementById("hca-progress-bar"),
		allPanels: document.getElementsByTagName("fieldset"),

		getPanelCount: function() {
			return this.allPanels.length;
		},

		loadPanel: function(n) {
			// get active panel
			var activePanel = document.getElementsByClassName("active");
			// remove the class attribute
			if(activePanel.length > 0) {
				activePanel[0].removeAttribute("class");
			}
			// $("#" + this.allPanels[n-1].getAttribute('id')).removeClass('inactive');
			this.doAnimation(this.allPanels[n-1].getAttribute('id'));
			// set active class on the panel with index "n"
			// this.allPanels[n-1].className = "active";
			// set the app's current panel
			this.currentPanel = n;
			// update URL
			window.location.hash = 'panel-' + n;
			// update progress bar
			this.updateProgressBar();
		},

		loadNextPanel: function() {
			if(this.currentPanel < this.panelCount) {
					this.loadPanel(this.currentPanel + 1);
				}
			},

		loadPrevPanel: function() {
			if(this.currentPanel > 1) {
				this.loadPanel(this.currentPanel - 1);
			}
		},

		doAnimation: function(e) {
			// this.animate();
			$("#" + e).animate(
				{
					opacity: 1,
					left: "+=50",
					width: "toggle"
				}, {
					duration: 800,
					complete: function() {
						$(this).addClass('active');
					},
					easing: 'easeInOutBack'
			});
			// alert("this worked!" + e);
		},

		updateProgressBar: function() {
			var percentComplete = Math.round(this.currentPanel / this.panelCount * 100);
			this.progressBar.setAttribute("style","width:" + percentComplete + "%");
			this.progressBar.innerHTML = (percentComplete + "% complete");
		},

		handlers: function() {
			var next = document.getElementById("next"),
					prev = document.getElementById("prev"),
					_this = this;
			next.addEventListener("click", function(e) {
				e.preventDefault();
				_this.loadNextPanel();
			});
			prev.addEventListener("click", function(e) {
				e.preventDefault();
				_this.loadPrevPanel();
			});
			$("body").keydown(function(e) {
				if(e.keyCode == 37) { // left
					_this.loadPrevPanel();
				}
				else if(e.keyCode == 39) { // right
					_this.loadNextPanel();
				}
			});
			// $("body").hammer().on("swipeleft", function() {
			// 	_this.loadNextPanel();
			// }).on("swiperight", function() {
			// 	_this.loadPrevPanel();
			// });
			$("i").html("");
		},

		init: function() {
			var hash = window.location.hash;
			if(hash !== "") {
				this.currentPanel = parseInt(hash.split('-')[1]);
			}
			this.handlers();
			this.panelCount = this.getPanelCount();
			this.loadPanel(this.currentPanel);
		}
	}

	app.init();

})();
