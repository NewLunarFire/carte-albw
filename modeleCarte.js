var modeleCarte = {
	carteAffichee: 0, //0 = Hyrule, 1 = Lorule
	
	zone: 0, //Zone qui est zoomée
	ombre: false, //Si il faut ombrager la carte
	zoom: false, //Une zone est zoomée
	
	objetsZ0: new Array(),
	objetsZ1: new Array(),

	clic: function(x, y) {
		//Regarde si un objet a été cliqué
		//Si une zone n'a pas été zoomée
		if(modeleCarte.zoom)
		{
			//Zoom out
			if((x < vueCarte.FZOOM_X) || (x > (vueCarte.FZOOM_X  + vueCarte.FZOOM_L)) || (y < vueCarte.FZOOM_Y) || (y > (vueCarte.FZOOM_Y  + vueCarte.FZOOM_H)))
			{
				modeleCarte.zoom = false;
				modeleDescriptif.vide = true;
				vueGlobale.dessinerTout();
			}
			else
			{
				var x1 = x - vueCarte.ZOOM_X; 
				var y1 = y - vueCarte.ZOOM_Y;
				modeleCarte.objetsZ1.forEach( function(item, index, tableau) {
					if((x1 > (item.x - (vueCarte.L_ITEM_Z1 / 2))) && (x1 <= (item.x + (vueCarte.L_ITEM_Z1 / 2))) && (y1 >= (item.y - (vueCarte.H_ITEM_Z1 / 2))) && (y1 <= (item.y + (vueCarte.H_ITEM_Z1 / 2))))
						modeleDescriptif.changerItem(item.nom, item.index);
				});
			}
		}
		else
			//Zoom sur modeleCarte.zone
			modeleCarte.zoom = true;
		
		modeleCarte.majListes();
	},
	
	changerCarte: function() {
		modeleCarte.carteAffichee = 1 - modeleCarte.carteAffichee;
		modeleDescriptif.vide = true;
		modeleCarte.majListes();
		vueGlobale.dessinerTout();
	},
	
	enleverSurbillance: function() {
		if(modeleCarte.ombre) {
			modeleCarte.ombre = false;
			vueCarte.dessiner();
		}
	},
	
	enleverZoom: function() {
		modeleCarte.zoom = false;
		modeleCarte.majListes();
	},
	
	majListes: function() {
		modeleCarte.objetsZ0.length = 0;
		modeleCarte.objetsZ1.length = 0;
		
		//Dessine l'ensemble des objets visibles
		for(var nom in data.objets)
		{
			if(modeleObjets.objets[nom].visible)
			{
				var objet = data.objets[nom];
				
				objet.liste.forEach( function(item, index, tableau) {
					if(item.carte == modeleCarte.carteAffichee)
					{
						var icone;
						var i = modeleCarte.objetsZ0.length;
						
						if(item.icone == undefined)
						{
							//Prend l'icone de l'objet
							if(modeleObjets.objets[nom].trouve[index]) //Icone trouvé
								icone = data.images[objet.iconeOui].image;
							else if(modeleObjets.objets[nom].peutetre[index]) //Icone peut-être
								icone = data.images[objet.iconePe].image;
							else //Icone pas trouvé
								icone = data.images[objet.iconeNon].image;
						}
						else
						{
							//Prend l'icone de l'item
							if(modeleObjets.objets[nom].trouve[index]) //Icone trouvé
								icone = data.images[item.iconeOui].image;
							else if(modeleObjets.objets[nom].peutetre[index]) //Icone peut-être
								icone = data.images[item.iconePe].image;
							else //Icone pas trouvé
								icone = data.images[item.iconeNon].image;
						}
						
						//Rajoute l'information sur l'objet à afficher
						modeleCarte.objetsZ0.push(new Object());
						modeleCarte.objetsZ0[i].x = item.x0;
						modeleCarte.objetsZ0[i].y = item.y0;
						modeleCarte.objetsZ0[i].icone = icone;

						if(modeleCarte.zoom && (item.zone == modeleCarte.zone))
						{
							var j = modeleCarte.objetsZ1.length;
							modeleCarte.objetsZ1.push(new Object());
							
							//Rajoute l'information sur l'objet à afficher
							modeleCarte.objetsZ1[j].x = item.x1;
							modeleCarte.objetsZ1[j].y = item.y1;
							modeleCarte.objetsZ1[j].icone = icone;
							modeleCarte.objetsZ1[j].nom = nom;
							modeleCarte.objetsZ1[j].index = index;
						}
					}
				});
			}
		}
		
		vueCarte.dessiner(); //Reporte visuellement les changements
	},
	surbillance: function(x, y) {
		if(!modeleCarte.zoom) {
			var zX = Math.floor(x / (764/16));
			var zY = Math.floor(y / (764/16));
			
			data.listeZones.forEach ( function(element, index, tableau) {
				if((zX >= element[0]) && (zX <= element[2]) && (zY >= element[1]) && (zY <= element[3]))
				{
					if(index != modeleCarte.zone)  {
						modeleCarte.zone = index;
						modeleCarte.ombre = true;
						vueCarte.dessiner();
					}
					
				}
			});
		}
	}
}