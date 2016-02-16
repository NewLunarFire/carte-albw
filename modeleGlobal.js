var modeleGlobal = {
	initialiser: function() {
			modeleObjets.charger();
			biscuit.ouvrir();
			
			//Ajuste les dimensions du canevas à l'écran
			vueGlobale.ajusterCanevas();
			
			//Affiche la carte
			vueGlobale.dessinerTout();
			
			//Gestionnaire d'évènement pour le clavier
			window.onkeyup = controleurClavier.toucheAppuyee;
			canvas.onclick = controleurSouris.evenementClic;
			canvas.onmousemove = controleurSouris.evenementSurbillance;
	},
	
	ouvrirGooglePlus: function() {
		window.open("https://plus.google.com/+puissancezelda", "_blank");
	},
	
	ouvrirFacebook: function() {
		window.open("https://www.facebook.com/PuissanceZelda", "_blank");
	},
	
	ouvrirTwitter: function() {
		window.open("https://twitter.com/PuissanceZelda", "_blank");
	}
}