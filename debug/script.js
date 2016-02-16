var canvas; //Canvas
var context; //Contexte
var curseurStatut;
var boutonCarte;

window.onload = function()
{
	//Récupères le canvas
	canvas = document.getElementById('carte_albw');
	if(!canvas)
	{
		alert("Impossible de récupérer le canvas");
		return;
	}

	//Récupère le contexte
	context = canvas.getContext('2d');
	if(!context)
	{
		alert("Impossible de récupérer le context du canvas");
		return;
	}
	
	curseurStatut = document.getElementById("statutCurseur");
	boutonCarte = document.getElementById("bouton-carte");
	
	vueCarte.charger();
}

var vueCarte = {
	carteHyrule: new Image(),
	carteLorule: new Image(),
	fondZoom: new Image(),
	
	charger: function() {
		vueCarte.carteHyrule.src = "./carte-hyrule.jpg";
		vueCarte.carteLorule.src = "./carte-lorule.jpg";
		vueCarte.fondZoom.src = "./fond_zoom.png";
		vueCarte.carteHyrule.onload = vueCarte.dessiner;
	},
	
	dessiner: function() {
		if(modeleCarte.carteAffichee == 0)
			context.drawImage(vueCarte.carteHyrule, 0, 0, 3000, 3000, 0, 0, 1000, 1000);
		else
			context.drawImage(vueCarte.carteLorule, 0, 0, 3000, 3000, 0, 0, 1000, 1000);
			
		if(modeleCarte.mode == 0)
		{
			if(modeleCarte.zone != -1) {
				var xmin = Math.floor(listeZones[modeleCarte.zone][0] * ((1000-46) / 16)) + 23;
				var xmax = Math.floor((listeZones[modeleCarte.zone][2] + 1) * ((1000-46) / 16)) + 23;
				var ymin = Math.floor(listeZones[modeleCarte.zone][1] * ((1000-46) / 16)) + 23;
				var ymax = Math.floor((listeZones[modeleCarte.zone][3] + 1) * ((1000-46) / 16)) + 23;
				
				context.globalAlpha = 0.5;
				context.fillStyle = "#000000";
				
				context.fillRect(23, 23, xmin-23, (1000-46)); //Gauche
				context.fillRect(xmax, 23, (1000-23)-xmax, (1000-46)); //Droite
				context.fillRect(xmin, 23, xmax-xmin, ymin-23); //Centre-haut
				context.fillRect(xmin, ymax, xmax-xmin, (1000-23)-ymax); //Centre-bas
				
				context.globalAlpha = 1;
			}
		}
		else if(modeleCarte.mode == 1)
		{
			//Ombre
			context.globalAlpha = 0.5;
			context.fillStyle = "#000000";
			context.fillRect(23, 23, (1000-46), (1000-46));
			context.globalAlpha = 1;

			//Fond
			context.drawImage(vueCarte.fondZoom, 0, 0, 472, 473, 300, 300, 400, 400);
			
			vueCarte.dessinerZone();
		}
	},
	
	dessinerCroix: function(x, y) {
		//Met la ligne en rouge 3px
		context.lineWidth = 2;
		context.strokeStyle = "#ff0000";
		
		context.beginPath();
			
		//On trace une ligne à l'horizontave
		context.moveTo(350, y);
		context.lineTo(650, y);
			
		//On trace une ligne à la verticale
		context.moveTo(x, 350);
		context.lineTo(x, 650);
		
		context.stroke();//On trace seulement les lignes.
		context.closePath();
	},
	
	dessinerZone: function() {
		var zone = listeZones[modeleCarte.zone];
		
		if(zone[4])
		{
			if(modeleCarte.carteAffichee == 0)
				context.drawImage(vueCarte.carteHyrule, (zone[0] * (2860/16)) + 70, (zone[1] * (2860/16)) + 70, 715, 715, 350, 350, 300, 300);
			else
				context.drawImage(vueCarte.carteLorule, (zone[0] * (2860/16)) + 70, (zone[1] * (2860/16)) + 70, 715, 715, 350, 350, 300, 300);
		}
		else	
		{
			if(modeleCarte.carteAffichee == 0)
				context.drawImage(vueCarte.carteHyrule, (zone[0] * (2860/16)) + 70, (zone[1] * (2860/16)) + 70, 357, 357, 350, 350, 300, 300);
			else
				context.drawImage(vueCarte.carteLorule, (zone[0] * (2860/16)) + 70, (zone[1] * (2860/16)) + 70, 357, 357, 350, 350, 300, 300);
		}
	}
}

var modeleCarte = {
	carteAffichee: 0, //0 = Hyrule, 1 = Lorule
	mode: 0, // 0 = Overworld, 1 = Zoomé libre, 2 = Coord gelées
	zone: -1,
	
	changerCarte: function() {
		if(modeleCarte.carteAffichee == 0) {
			modeleCarte.carteAffichee = 1;
			boutonCarte.setAttribute("value", "Carte d'Hyrule");
		}
		else {
			modeleCarte.carteAffichee = 0;
			boutonCarte.setAttribute("value", "Carte de Lorule");
		}
		
		modeleCarte.mode = 0;
		modeleCarte.degeleCurseur();
		vueCarte.dessiner();
	},
	
	geleCurseur: function(x, y) {
		var zone = listeZones[modeleCarte.zone];
		
		//Calcule les coordonnées
		var x1 = x - 350;
		var y1 = y - 350;
		var x0 = Math.floor(zone[0] * ((1000-46) / 16)) + 23;
		var y0 = Math.floor(zone[1] * ((1000-46) / 16)) + 23;
		
		if(zone[4]) {
			x0 += Math.floor((x1 / 300) * ((1000-46) / 4));
			y0 += Math.floor((y1 / 300) * ((1000-46) / 4));
		}
		else {
			x0 += Math.floor((x1 / 300) * ((1000-46) / 8));
			y0 += Math.floor((y1 / 300) * ((1000-46) / 8));
		}
		
		//Les inscrit dans le champ appropriées
		document.getElementById("coord").setAttribute("value", "(" + x0 + ", " + y0 + ")	(" + x1 + ", " + y1 + ")	" + modeleCarte.zone);
		document.getElementById("coord").select();
		
		curseurStatut.innerHTML = "Curseur gelé";
		curseurStatut.style = "color: red;";
	},
	
	degeleCurseur: function() {
		curseurStatut.innerHTML = "Curseur libre";
		curseurStatut.style = "color: black;";
	}
}

var controleurSouris = {
	clic: function(x, y) {
		if(modeleCarte.mode == 0) {
			//Zoom sur une zone
			modeleCarte.mode = 1;
			vueCarte.dessiner();
		}
		else if(modeleCarte.mode == 1) {
			//Dézoom
			if((x < 300) || (x > 700) || (y < 300) || (y > 700)) {
				modeleCarte.mode = 0;
				vueCarte.dessiner();
			}
			else if((x >= 350) && (x <= 650) && (y >= 350) && (y <= 650)) {
				modeleCarte.geleCurseur(x, y);
				modeleCarte.mode = 2;
			}
		}
		else if(modeleCarte.mode == 2) {
			//Dézoom
			if((x < 300) || (x > 700) || (y < 300) || (y > 700)) {
				modeleCarte.mode = 0;
				modeleCarte.degeleCurseur();
				vueCarte.dessiner();
			}
			else if((x >= 350) && (x <= 650) && (y >= 350) && (y <= 650)) {
				modeleCarte.mode = 1;
				modeleCarte.degeleCurseur();
			}
		}
	},
	
	deplacement: function(x, y) {
		if(modeleCarte.mode == 0) {
			var zX = Math.floor(x / (((3000-140)/(3*16))));
			var zY = Math.floor(y / (((3000-140)/(3*16))));
			
			listeZones.some ( function(element, index, tableau) {
				if((zX >= element[0]) && (zX <= element[2]) && (zY >= element[1]) && (zY <= element[3]))
				{
					if(index != modeleCarte.zone)  {
						modeleCarte.zone = index;
						vueCarte.dessiner();
					}
					
				}
			});
		}
		else if(modeleCarte.mode == 1) {
			vueCarte.dessinerZone();
			if((x >= 350) && (x <= 650) && (y >= 350) && (y <= 650))
				vueCarte.dessinerCroix(x, y);
		}
		else if(modeleCarte.mode == 2) {
		}
	},
	
	EvenClic: function(e) {
		//Calcule les coordonées du curseur sur le canvas
		var rectangle = canvas.getBoundingClientRect();
		controleurSouris.clic(Math.floor(e.clientX - rectangle.left), Math.floor(e.clientY - rectangle.top));
	},
	
	EvenDeplacement: function(e) {
		//Calcule les coordonées du curseur sur le canvas
		var rectangle = canvas.getBoundingClientRect();
		controleurSouris.deplacement(Math.floor(e.clientX - rectangle.left), Math.floor(e.clientY - rectangle.top));
	}
}

var listeZones =	[
						[0, 0, 3, 3, true],
						[0, 4, 1, 5, false],
						[2, 4, 3, 5, false],
						[0, 6, 3, 9, true],
						[0, 10, 1, 11, false],
						[2, 10, 3, 11, false],
						[0, 12, 3, 15, true],
						[4, 0, 5, 1, false],
						[4, 2, 5, 3, false],
						[4, 4, 5, 5, false],
						[4, 6, 5, 7, false],
						[4, 8, 5, 9, false],
						[4, 10, 5, 11, false],
						[4, 12, 5, 13, false],
						[4, 14, 5, 15, false],
						[6, 0, 9, 3, true],
						[6, 4, 7, 5, false],
						[8, 4, 9, 5, false],
						[6, 6, 9, 9, true],
						[6, 10, 7, 11, false],
						[8, 10, 9, 11, false],
						[6, 12, 9, 15, true],
						[10, 0, 13, 3, true],
						[10, 4, 11, 5, false],
						[12, 4, 13, 5, false],
						[10, 6, 11, 7, false],
						[10, 8, 11, 9, false],
						[12, 6, 15, 9, true],
						[10, 10, 11, 11, false],
						[12, 10, 13, 11, false],
						[10, 12, 13, 15, true],
						[14, 0, 15, 1, false],
						[14, 2, 15, 3, false],
						[14, 4, 15, 5, false],
						[14, 10, 15, 11, false],
						[14, 12, 15, 13, false],
						[14, 14, 15, 15, false]
					];