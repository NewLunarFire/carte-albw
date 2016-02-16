var modeleDescriptif = {
	icone: {},
	
	nomItem: "",
	nomObjet: "",
	
	trouve: false,
	peutetre: false,
	
	objet: "",
	index: 0,
	
	vide: true,
	
	changerItem: function(nomObjet, indexItem) {
		var objet = data.objets[nomObjet];
		var item = objet.liste[indexItem];
		
		//Enregistre le nom de l'objet et l'index de l'élément
		modeleDescriptif.objet = nomObjet;
		modeleDescriptif.index = indexItem;
		
		//Change l'icone
		if(item.icone == undefined)
			modeleDescriptif.icone = data.images[objet.icone].image;
		else
			modeleDescriptif.icone = data.images[item.icone].image;
		
		//Change le nom
		if(item.nom == undefined)
			modeleDescriptif.nom = objet.nom;
		else
			modeleDescriptif.nom = item.nom;
		
		//Lit si l'élément est trouvé, peut-être trouvé ou pas trouvé
		modeleDescriptif.trouve = modeleObjets.objets[nomObjet].trouve[indexItem];
		modeleDescriptif.peutetre = modeleObjets.objets[nomObjet].peutetre[indexItem];
		
		modeleDescriptif.vide = false;
		
		vueGlobale.dessinerTout();
	},
	
	clic: function(x, y) {
		if(y <= 16)
		{
			//Clic sur trouvé
			modeleDescriptif.trouve = !modeleDescriptif.trouve;
			
			if(modeleDescriptif.trouve)
				modeleObjets.objets[modeleDescriptif.objet].nombre += 1;
			else
				modeleObjets.objets[modeleDescriptif.objet].nombre -= 1;
			
			modeleDescriptif.peutetre = false;
		}
		else if(y >= 25)
		{
			//Clic sur peut-être
			modeleDescriptif.peutetre = !modeleDescriptif.peutetre;
			if(modeleDescriptif.trouve)
				modeleObjets.objets[modeleDescriptif.objet].nombre -= 1;
			
			modeleDescriptif.trouve = false;
		}
		
		//Sauvegarde l'état dans les tableaux modeleObjets
		modeleObjets.objets[modeleDescriptif.objet].trouve[modeleDescriptif.index] = modeleDescriptif.trouve;
		modeleObjets.objets[modeleDescriptif.objet].peutetre[modeleDescriptif.index] = modeleDescriptif.peutetre;
		
		biscuit.enregistrer();
		modeleCarte.majListes();
		vueGlobale.dessinerTout();
	}
}