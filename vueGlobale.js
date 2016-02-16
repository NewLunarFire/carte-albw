var vueGlobale = {
	//Variables
	pleinEcran: false,
	facteurDEchelle: 1,
	
	ajusterCanevas: function() {
		vueGlobale.facteurDEchelle = window.screen.availWidth / 1920;
		canvas.setAttribute('width', 1920 * vueGlobale.facteurDEchelle);
		canvas.setAttribute('height', 1080 * vueGlobale.facteurDEchelle);
		context.scale(vueGlobale.facteurDEchelle, vueGlobale.facteurDEchelle);
	},
	
	//Désactiver le plein écran
	quitterPleinEcran: function() {
			if(document.exitFullscreen) //Standard
				document.exitFullscreen();
			else if(document.webkitExitFullscreen) //Webkit
				document.webkitExitFullscreen();
			else if(document.mozCancelFullScreen) //Mozilla
				document.mozCancelFullScreen();
	},
	
	//Ajustement en Plein écran
	activerPleinEcran: function() {		
		//Demande l'accès en plein écran
		if(canvas.requestFullScreen) //Standard
			canvas.requestFullScreen();
		else if(canvas.webkitRequestFullScreen) //Webkit
			canvas.webkitRequestFullScreen();
		else if(canvas.mozRequestFullScreen) //Mozilla
			canvas.mozRequestFullScreen();
	},
	
	dessinerTout: function() {
		vueFond.dessiner();
		vueCarte.dessiner();
		vueListeObjets.dessiner();
		vueDescriptif.dessiner();
		vueSwitcher.dessiner();
	}
}