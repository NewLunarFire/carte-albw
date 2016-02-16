modeleObjets = {
	dic: [],
	objets: {},
	
	charger: function() {
		for(var nom in data.objets) {
			this.objets[nom] = new Object();
			this.objets[nom].visible = false;
			this.dic.push(nom);
		}
	},
	
	creerTableaux: function() {
		//Peuple le tableau avec tous les items nécéssaires à sauvegarder
		for(var nom in data.objets)
		{
			var tableauTrouve, tableauPeutetre;
			
			this.objets[nom].nombre = 0;
			this.objets[nom].trouve = new Array();
			this.objets[nom].peutetre = new Array();
			
			tableauTrouve = this.objets[nom].trouve;
			tableauPeutetre = this.objets[nom].peutetre;
			
			tableauTrouve.length = tableauPeutetre.length = data.objets[nom].liste.length;
			for(i = 0; i < tableauTrouve.length; i++) tableauTrouve[i] = tableauPeutetre[i] = false;
		}
		
		biscuit.enregistrer();
	},
	
	clic: function(x, y) {
		if((x % 70) <= 40)
		{
			var index = Math.floor(x / 70);
			var nom = modeleObjets.dic[index];
			modeleObjets.objets[nom].visible = !modeleObjets.objets[nom].visible;
			modeleCarte.majListes();
		}
	}
}