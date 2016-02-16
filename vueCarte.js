var vueCarte = {	
	//Dimensions
	X: 410,
	Y: 220,
	L: 800,
	H: 800,
	
	L_CARTE: 3000,
	H_CARTE: 3000,
	BORDURE: 70,
	
	X_REEL: 428,
	Y_REEL: 238,
	L_REEL: 764,
	H_REEL: 764,
	L_CARTE_REEL: 2860,
	H_CARTE_REEL: 2860,
	
	L_ITEM_Z0: 40,
	H_ITEM_Z0: 40,
	XMAX_Z0: 1000,
	YMAX_Z0: 1000,
	
	FZOOM_X: (764 - 400) / 2,
	FZOOM_Y: (764 - 400) / 2,
	FZOOM_L: 400,
	FZOOM_H: 400,
	
	ZOOM_X: (764 - 300) / 2,
	ZOOM_Y: (764 - 300) / 2,
	ZOOM_L: 300,
	ZOOM_H: 300,
	
	L_ITEM_Z1: 40,
	H_ITEM_Z1: 40,
	XMAX_Z1: 300,
	YMAX_Z1: 300,
	
	dessiner: function() {
		var carte;
		var objetsZ1 = new Array();
		
		if(modeleCarte.carteAffichee == 0) //Hyrule
			carte = data.images.carteHyrule.image;
		else //Lorule
			carte = data.images.carteLorule.image;
		
		//Dessine la carte
		context.drawImage(carte, 0, 0, vueCarte.L_CARTE, vueCarte.H_CARTE, vueCarte.X, vueCarte.Y, vueCarte.L, vueCarte.H);
		
		//Dessine les objets sur la couche 0
		modeleCarte.objetsZ0.forEach( function(item, index, tableau) {
				context.drawImage(item.icone, 0, 0, vueCarte.L_ITEM_Z0, vueCarte.H_ITEM_Z0, (item.x * (vueCarte.L / vueCarte.XMAX_Z0)) + vueCarte.X - (vueCarte.L_ITEM_Z0 / 2), (item.y * (vueCarte.H / vueCarte.YMAX_Z0)) + vueCarte.Y - (vueCarte.H_ITEM_Z0 / 2), vueCarte.L_ITEM_Z0, vueCarte.H_ITEM_Z0);
		});
		
		//Dessine la zone zommée
		if(modeleCarte.zoom)
		{
			var zone = data.listeZones[modeleCarte.zone];
			
			//Fait de l'ombre sur la carte
			context.globalAlpha = 0.5;
			context.fillStyle = "#000000";
			context.fillRect(vueCarte.X_REEL, vueCarte.Y_REEL, vueCarte.L_REEL, vueCarte.H_REEL);
			context.globalAlpha = 1
			
			//Affiche le fond
			context.drawImage(data.images.fondZoom.image, 0, 0, 472, 473, vueCarte.FZOOM_X + vueCarte.X_REEL, vueCarte.FZOOM_Y + vueCarte.Y_REEL, vueCarte.FZOOM_L, vueCarte.FZOOM_H);
			
			//Affiche la zone zoomée
			if(zone[4]) //Zone large
				context.drawImage(carte, (zone[0] * (vueCarte.L_CARTE_REEL/16)) + vueCarte.BORDURE, (zone[1] * (vueCarte.H_CARTE_REEL/16)) + vueCarte.BORDURE, vueCarte.L_CARTE_REEL / 4, vueCarte.H_CARTE_REEL / 4, vueCarte.ZOOM_X + vueCarte.X_REEL, vueCarte.ZOOM_Y + vueCarte.Y_REEL, vueCarte.ZOOM_L, vueCarte.ZOOM_H);
			else //Zone petite
				context.drawImage(carte, (zone[0] * (vueCarte.L_CARTE_REEL/16)) + vueCarte.BORDURE, (zone[1] * (vueCarte.H_CARTE_REEL/16)) + vueCarte.BORDURE, vueCarte.L_CARTE_REEL / 8, vueCarte.H_CARTE_REEL / 8, vueCarte.ZOOM_X + vueCarte.X_REEL, vueCarte.ZOOM_Y + vueCarte.Y_REEL, vueCarte.ZOOM_L, vueCarte.ZOOM_H);
			
			//Dessine les objets sur la couche 1
			modeleCarte.objetsZ1.forEach( function(item, index, tableau) {
					context.drawImage(item.icone, 0, 0, vueCarte.L_ITEM_Z1, vueCarte.H_ITEM_Z1, (item.x * (vueCarte.ZOOM_L / vueCarte.XMAX_Z1)) + vueCarte.ZOOM_X + vueCarte.X_REEL - (vueCarte.L_ITEM_Z1 / 2), (item.y * (vueCarte.ZOOM_H / vueCarte.YMAX_Z1)) + vueCarte.ZOOM_Y + vueCarte.Y_REEL - (vueCarte.H_ITEM_Z1 / 2), vueCarte.L_ITEM_Z1, vueCarte.H_ITEM_Z1);
			});
		}
		
		//Dessine l'ombre
		else if(modeleCarte.ombre) {
			var xmin = Math.floor(data.listeZones[modeleCarte.zone][0] * (vueCarte.L_REEL / 16)) + vueCarte.X_REEL;
			var xmax = Math.floor((data.listeZones[modeleCarte.zone][2] + 1) * (vueCarte.L_REEL / 16)) + vueCarte.X_REEL;
			var ymin = Math.floor(data.listeZones[modeleCarte.zone][1] * (vueCarte.H_REEL / 16)) + vueCarte.Y_REEL;
			var ymax = Math.floor((data.listeZones[modeleCarte.zone][3] + 1) * (vueCarte.H_REEL / 16)) + vueCarte.Y_REEL;
			
			context.globalAlpha = 0.5;
			context.fillStyle = "#000000";
			
			context.fillRect(vueCarte.X_REEL, vueCarte.Y_REEL, xmin - vueCarte.X_REEL, vueCarte.H_REEL);
			context.fillRect(xmax, vueCarte.Y_REEL, (vueCarte.X_REEL+vueCarte.L_REEL)-xmax, vueCarte.H_REEL);
			context.fillRect(xmin, vueCarte.Y_REEL, xmax-xmin, ymin - vueCarte.Y_REEL);
			context.fillRect(xmin, ymax, xmax-xmin, (vueCarte.Y_REEL+vueCarte.H_REEL)-ymax);
			
			context.globalAlpha = 1
		}
	}
}