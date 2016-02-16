var controleurSouris = {
	zonesClic:	[
					[428, 238, 764, 764, modeleCarte.clic],
					[455, 135, 180, 40, modeleObjets.clic],
					[1220, 120, 325, 107, modeleCarte.changerCarte],
					[1375, 300, 16, 41, modeleDescriptif.clic],
					[1241, 946, 65, 65, modeleGlobal.ouvrirGooglePlus],
					[1313, 946, 65, 65, modeleGlobal.ouvrirFacebook],
					[1385, 946, 65, 65, modeleGlobal.ouvrirTwitter],
					[0, 0, 1920, 1080, modeleCarte.enleverZoom]
				],
				
	zonesSurbillance:	[
							[428, 238, 764, 764, modeleCarte.surbillance],
							[0, 0, 1920, 1080, modeleCarte.enleverSurbillance]
						],
						
	
	evenementClic: function (e) {
		//Calcule les coordonées du curseur sur le canvas
		var rectangle = canvas.getBoundingClientRect();
		var curseurX = Math.floor((e.clientX - rectangle.left) / vueGlobale.facteurDEchelle);
		var curseurY = Math.floor((e.clientY - rectangle.top) / vueGlobale.facteurDEchelle);
		
		controleurSouris.clic(curseurX, curseurY);
	},
	
	evenementSurbillance: function(e) {
		//Calcule les coordonées du curseur sur le canvas
		var rectangle = canvas.getBoundingClientRect();
		var curseurX = Math.floor((e.clientX - rectangle.left) / vueGlobale.facteurDEchelle);
		var curseurY = Math.floor((e.clientY - rectangle.top) / vueGlobale.facteurDEchelle);
		
		controleurSouris.surbillance(curseurX, curseurY);
	},
	
	clic: function(x, y) {
		controleurSouris.zonesClic.some(function(valeur, index, tableau) {
			if((x >= valeur[0]) && (x <= (valeur[0] + valeur[2])) && (y >= valeur[1]) && (y <= (valeur[1] + valeur[3]))) {
				valeur[4](x - valeur[0], y - valeur[1]);
				return true;
			}
			return false;
		});
	},

	surbillance: function(x, y) {
		controleurSouris.zonesSurbillance.some(function(valeur, index, tableau) {
			if((x >= valeur[0]) && (x <= (valeur[0] + valeur[2])) && (y >= valeur[1]) && (y <= (valeur[1] + valeur[3]))) {
				valeur[4](x - valeur[0], y - valeur[1]);
				return true;
			}
			return false;
		});
	}
}