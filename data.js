//Fichiers de données pour la carte de The Legend of Zelda: A Link Between Worlds
//Par Tommy Savaria (M-A) pour Puissance-Zelda

//Ce fichier contient les données nécéssaire pour la carte de A Link Between Worlds
//Il est divisé en différentes sections, décrites ci-dessous

//Pour apporter une correction à des données qui font partie de ce fichier,  vous
//devez d'abord avoir l'approbation de M-A, Yorick et Weekly, ou si ces personnes
//n'occupent plus leur postes respectifs de Développeur, Administrateur et Chef
//de la rédaction de Puissance-Zelda, la ou les personnes qui occupent ces postes

//À chaque fois que vous apportez une modification à ce fichier, vous devrez consigner
//celles-ci dans le journal ci-dessous. Ce journal devra être gardé à jour dès la mise
//en ligne de la version 1.0 de la carte. Toute modification apportée pendant le
//développement de la carte avant sa version 1.0 n'est pas et ne sera pas consigée ici.

var data = {
	//Images faisant partie de la cache
	
	//***//
	//Il est important de consigner toutes les informations de façon précise, sinon la cache
	//d'images pourrait ne pas charger les images ou ne jamais terminer de se charger.
	//***//
	
	//Pour chaque image, vous devez créer un nouvel objet et y consigner les attributs suivants:
	////image:	new Image()
	////url:	L'adresse de l'image
	////taille:	Taille réelle en octets de l'image. Il est important de prendre la taille réelle
	////		et non la taille occupée dans votre système de fichiers, car ce dernier varie
	////		selon votre configuration.
	
	//Une virgule est nécéssaire après le chevron fermant pour tous les objets sauf le dernier
	
	images: {
		carteHyrule: {
			image: new Image(),
			url: "./images/cartes/hyrule.jpg",
			taille: 1752710
		},
		
		carteLorule: {
			image: new Image(),
			url: "./images/cartes/lorule.jpg",
			taille: 2009096
		},
		
		checkOui: {
			image : new Image(),
			url: "./images/check_oui.png",
			taille: 243
		},
		
		checkNon: {
			image : new Image(),
			url: "./images/check_non.png",
			taille: 194
		},
		
		fond: {
			image: new Image(),
			url: "./images/fond.png",
			taille: 880506
		},
		
		fondZoom: {
			image: new Image(),
			url: "./images/fond_zoom.png",
			taille: 171486
		},
		
		iconeQuartDeCoeur: {
			image: new Image(),
			url: "./images/icones/QuartDeCoeur.png",
			taille: 10713
		},
		
		iconeTiGorneau: {
			image: new Image(),
			url: "./images/icones/TiGorneau.png",
			taille: 10541
		},
		
		iconeFlacon: {
			image: new Image(),
			url: "./images/icones/Flacon.png",
			taille: 12425
		},
		
		miniQuartdeCoeurOui: {
			image: new Image(),
			url: "./images/icones/qdc_mini_j'ai.png",
			taille: 3081
		},
		
		miniQuartdeCoeurNon: {
			image: new Image(),
			url: "./images/icones/qdc_mini_j'ai_pas.png",
			taille: 2706
		},
		
		miniQuartdeCoeurPe: {
			image: new Image(),
			url: "./images/icones/qdc_mini_j'ai_ptet.png",
			taille: 3196
		},
		
		miniTiGorneauOui: {
			image: new Image(),
			url: "./images/icones/tigor_mini_j'ai.png",
			taille: 3646
		},
		
		miniTiGorneauNon: {
			image: new Image(),
			url: "./images/icones/tigor_mini_j'ai_pas.png",
			taille: 3288
		},
		
		miniTiGorneauPe: {
			image: new Image(),
			url: "./images/icones/tigor_mini_j'ai_ptet.png",
			taille: 3734
		},
		
		miniFlaconOui: {
			image: new Image(),
			url: "./images/icones/flac_mini_j'ai.png",
			taille: 3034
		},
		
		miniFlaconNon: {
			image: new Image(),
			url: "./images/icones/flac_mini_j'ai_pas.png",
			taille: 2794
		},
		
		miniFlaconPe: {
			image: new Image(),
			url: "./images/icones/flac_mini_j'ai_ptet.png",
			taille: 3160
		},
		
		switcherLorule: {
			image: new Image(),
			url: "./images/switcher_lorule.png",
			taille: 45638
		},
		
		switcherHyrule: {
			image: new Image(),
			url: "./images/switcher_hyrule.png",
			taille: 46202
		}
			
	},
	
	//Tous les objets faisant partie de l'overworld
	
	//Pour chaque objet, vous avez besoin de spécifier les informations suivantes
	////icone: Une icone (venant de la section images) qui représente l'objet en question
	////liste: La liste de chacun des objets dans cette catégorie, avec les attributs suivants
	/**   carte: 0 = Carte Hyrule, 1 = Cartle Lorule
	/**   x, y: Position en x et en y respectivement, sur 1000
	/**   icone (Optionel): L'icone pour cet item spécifiquement, si il en a un unique
	/**   description ?
	/**   image ?
	/**   vidéo ? */
	objets: {
		quartsDeCoeur: {
			icone: "iconeQuartDeCoeur",
			iconeOui: "miniQuartdeCoeurOui",
			iconeNon: "miniQuartdeCoeurNon",
			iconePe: "miniQuartdeCoeurPe",
			nom: "Quart de coeur",
			liste:	[
						{
							carte: 0,
							x: 43,
							y: 414,
						},
						{
							carte: 0,
							x: 900,
							y: 447
						},
						{
							carte: 0,
							x: 866,
							y: 267
						},
						{
							carte: 0,
							x: 105,
							y: 693
						},
						{
							carte: 0,
							x: 107,
							y: 508
						},
						{
							carte: 0,
							x: 307,
							y: 461
						},
						{
							carte: 0,
							x: 445,
							y: 274
						},
						{
							carte: 0,
							x: 546,
							y: 276
						},
						{
							carte: 0,
							x: 534,
							y: 836
						},
						{
							carte: 0,
							x: 314,
							y: 534
						},
						{
							carte: 0,
							x: 806,
							y: 79
						},
						{
							carte: 0,
							x: 919,
							y: 680
						},
						{
							carte: 0,
							x: 760,
							y: 44
						},
						{
							carte: 0,
							x: 179,
							y: 644
						},
						{
							carte: 0,
							x: 475,
							y: 72
						},
						{
							carte: 0,
							x: 566,
							y: 408
						},
						{
							carte: 0,
							x: 99,
							y: 105
						},
						{
							carte: 0,
							x: 910,
							y: 730
						}
					]
		},
		
		tiGorneaux: {
			icone: "iconeTiGorneau",
			iconeOui: "miniTiGorneauOui",
			iconeNon: "miniTiGorneauNon",
			iconePe: "miniTiGorneauPe",
			nom: "TiGorneau",
			liste:	[
						{
							//ORN_01
							carte: 0,
							zone: 30,
							x0: 708,
							y0: 749,
							x1: 112,
							y1: 14
						},
						{
							//ORN_02
							carte: 0,
							zone: 30,
							x0: 777,
							y0: 901,
							x1: 199,
							y1: 206
						},
						{
							//ORN_03
							carte: 0,
							zone: 36,
							x0: 889,
							y0: 900,
							x1: 81,
							y1: 110
						},
						{
							//ORN_04
							carte: 0,
							zone: 35,
							x0: 961,
							y0: 824,
							x1: 262,
							y1: 217
						},
						{
							//ORN_05
							carte: 0,
							zone: 30,
							x0: 806,
							y0: 822,
							x1: 236,
							y1: 106
						},
						{
							//ORN_06
							carte: 0,
							zone: 26,
							x0: 718,
							y0: 573,
							x1: 250,
							y1: 185
						},
						{
							//ORN_07
							carte: 0,
							zone: 27,
							x0: 834,
							y0: 496,
							x1: 121,
							y1: 147
						},
						{
							//ORN_08
							carte: 0,
							zone: 27,
							x0: 865,
							y0: 595,
							x1: 161,
							y1: 271
						},
						{
							//ORN_09
							carte: 0,
							zone: 28,
							x0: 716,
							y0: 696,
							x1: 246,
							y1: 196
						},
						{
							//ORN_10
							carte: 0,
							zone: 34,
							x0: 930,
							y0: 722,
							x1: 186,
							y1: 261
						},
						{
							//ORN_11
							carte: 0,
							zone: 29,
							x0: 830,
							y0: 674,
							x1: 233,
							y1: 139
						},
						{
							//ORN_12
							carte: 0,
							zone: 21,
							x0: 552,
							y0: 811,
							x1: 217,
							y1: 192
						},
						{
							//ORN_13
							carte: 0,
							zone: 21,
							x0: 484,
							y0: 919,
							x1: 131,
							y1: 228
						},
						{
							//ORN_14
							carte: 0,
							zone: 21,
							x0: 585,
							y0: 900,
							x1: 258,
							y1: 205
						},
						{
							//ORN_15
							carte: 0,
							zone: 20,
							x0: 539,
							y0: 660,
							x1: 100,
							y1: 105
						},
						{
							//ORN_16
							carte: 0,
							zone: 12,
							x0: 318,
							y0: 630,
							x1: 145,
							y1: 29
						},
						{
							//ORN_17
							carte: 0,
							zone: 11,
							x0: 282,
							y0: 527,
							x1: 55,
							y1: 70
						},
						{
							//ORN_18
							carte: 0,
							zone: 10,
							x0: 306,
							y0: 451,
							x1: 115,
							y1: 179
						},
						{
							//ORN_19
							carte: 0,
							zone: 18,
							x0: 410,
							y0: 407,
							x1: 38,
							y1: 35
						},
						{
							//ORN_20
							carte: 0,
							zone: 19,
							x0: 442,
							y0: 651,
							x1: 157,
							y1: 81
						},
						{
							//ORN_21
							carte: 0,
							zone: 13,
							x0: 290,
							y0: 825,
							x1: 74,
							y1: 221
						},
						{
							//ORN_22
							carte: 0,
							zone: 18,
							x0: 414,
							y0: 606,
							x1: 43,
							y1: 285
						},
						{
							//ORN_23
							carte: 0,
							zone: 17,
							x0: 538,
							y0: 280,
							x1: 97,
							y1: 50
						},
						{
							//ORN_24
							carte: 0,
							zone: 16,
							x0: 418,
							y0: 338,
							x1: 98,
							y1: 195
						},
						{
							//ORN_25
							carte: 0,
							zone: 33,
							x0: 915,
							y0: 374,
							x1: 147,
							y1: 285
						},
						{
							//ORN_26
							carte: 0,
							zone: 32,
							x0: 870,
							y0: 195,
							x1: 33,
							y1: 134
						},
						{
							//ORN_27
							carte: 0,
							zone: 23,
							x0: 723,
							y0: 272,
							x1: 263,
							y1: 29
						},
						{
							//ORN_28
							carte: 0,
							zone: 25,
							x0: 686,
							y0: 442,
							x1: 171,
							y1: 157
						},
						{
							//ORN_29
							carte: 0,
							zone: 24,
							x0: 781,
							y0: 329,
							x1: 109,
							y1: 172
						},
						{
							//ORN_30
							carte: 0,
							zone: 2,
							x0: 201,
							y0: 330,
							x1: 150,
							y1: 176
						},
						{
							//ORN_31
							carte: 0,
							zone: 9,
							x0: 309,
							y0: 343,
							x1: 122,
							y1: 207
						},
						{
							//ORN_32
							carte: 0,
							zone: 0,
							x0: 174,
							y0: 85,
							x1: 191,
							y1: 79
						},
						{
							//ORN_33
							carte: 0,
							zone: 0,
							x0: 52,
							y0: 87,
							x1: 37,
							y1: 81
						},
						{
							//ORN_34
							carte: 0,
							zone: 1,
							x0: 101,
							y0: 347,
							x1: 198,
							y1: 217
						},
						{
							//ORN_35
							carte: 0,
							zone: 7,
							x0: 347,
							y0: 124,
							x1: 217,
							y1: 256
						},
						{
							//ORN_36
							carte: 0,
							zone: 8,
							x0: 357,
							y0: 163,
							x1: 244,
							y1: 54
						},
						{
							//ORN_37
							carte: 0,
							zone: 0,
							x0: 161,
							y0: 194,
							x1: 174,
							y1: 216
						},
						{
							//ORN_38
							carte: 0,
							zone: 3,
							x0: 250,
							y0: 463,
							x1: 286,
							y1: 105
						},
						{
							//ORN_39
							carte: 0,
							zone: 3,
							x0: 103,
							y0: 580,
							x1: 101,
							y1: 252
						},
						{
							//ORN_40
							carte: 0,
							zone: 5,
							x0: 217,
							y0: 665,
							x1: 190,
							y1: 118
						},
						{
							//ORN_41
							carte: 0,
							zone: 4,
							x0: 56,
							y0: 723,
							x1: 85,
							y1: 263
						},
						{
							//ORN_42
							carte: 0,
							zone: 3,
							x0: 103,
							y0: 580,
							x1: 101,
							y1: 1252
						},
						{
							//ORN_43
							carte: 0,
							zone: 6,
							x0: 150,
							y0: 807,
							x1: 160,
							y1: 87
						},
						{
							//ORN_44
							carte: 0,
							zone: 6,
							x0: 89,
							y0: 877,
							x1: 84,
							y1: 176
						},
						{
							//ORN_45
							carte: 0,
							zone: 14,
							x0: 321,
							y0: 933,
							x1: 151,
							y1: 192
						},
						{
							//ORN_46
							carte: 0,
							zone: 22,
							x0: 803,
							y0: 123,
							x1: 232,
							y1: 127
						},
						{
							//ORN_47
							carte: 0,
							zone: 15,
							x0: 511,
							y0: 119,
							x1: 165,
							y1: 121
						},
						{
							//ORN_48
							carte: 0,
							zone: 15,
							x0: 554,
							y0: 232,
							x1: 220,
							y1: 263
						},
						{
							//ORN_49
							carte: 0,
							zone: 31,
							x0: 932,
							y0: 83,
							x1: 190,
							y1: 152
						},
						{
							//ORN_50
							carte: 0,
							zone: 22,
							x0: 643,
							y0: 193,
							x1: 31,
							y1: 214
						},
						{
							//ORN_51
							carte: 1,
							zone: 3,
							x0: 139,
							y0: 417,
							x1: 147,
							y1: 47
						},
						{
							//ORN_52
							carte: 1,
							zone: 2,
							x0: 175,
							y0: 367,
							x1: 85,
							y1: 267
						},
						{
							//ORN_53
							carte: 1,
							zone: 9,
							x0: 331,
							y0: 341,
							x1: 178,
							y1: 203
						},
						{
							//ORN_54
							carte: 1,
							zone: 8,
							x0: 317,
							y0: 225,
							x1: 141,
							y1: 209
						},
						{
							//ORN_55
							carte: 1,
							zone: 0,
							x0: 51,
							y0: 50,
							x1: 36,
							y1: 34
						},
						{
							//ORN_56
							carte: 1,
							zone: 0,
							x0: 102,
							y0: 201,
							x1: 100,
							y1: 224
						},
						{
							//ORN_57
							carte: 1,
							zone: 7,
							x0: 323,
							y0: 130,
							x1: 159,
							y1: 270
						},
						{
							//ORN_58
							carte: 1,
							zone: 1,
							x0: 98,
							y0: 357,
							x1: 189,
							y1: 244
						},
						{
							//ORN_59
							carte: 1,
							zone: 17,
							x0: 544,
							y0: 294,
							x1: 113,
							y1: 85
						},
						{
							//ORN_60
							carte: 1,
							zone: 16,
							x0: 441,
							y0: 298,
							x1: 154,
							y1: 95
						},
						{
							//ORN_61
							carte: 1,
							zone: 25,
							x0: 659,
							y0: 407,
							x1: 101,
							y1: 68
						},
						{
							//ORN_62
							carte: 1,
							zone: 27,
							x0: 775,
							y0: 581,
							x1: 47,
							y1: 254
						},
						{
							//ORN_63
							carte: 1,
							zone: 27,
							x0: 894,
							y0: 449,
							x1: 197,
							y1: 88
						},
						{
							//ORN_64
							carte: 1,
							zone: 23,
							x0: 698,
							y0: 274,
							x1: 199,
							y1: 34
						},
						{
							//ORN_65
							carte: 1,
							zone: 26,
							x0: 705,
							y0: 558,
							x1: 213,
							y1: 146
						},
						{
							//ORN_66
							carte: 1,
							zone: 28,
							x0: 659,
							y0: 659,
							x1: 102,
							y1: 103
						},
						{
							//ORN_67
							carte: 1,
							zone: 29,
							x0: 770,
							y0: 652,
							x1: 82,
							y1: 84
						},
						{
							//ORN_68
							carte: 1,
							zone: 34,
							x0: 940,
							y0: 731,
							x1: 211,
							y1: 284
						},
						{
							//ORN_69
							carte: 1,
							zone: 23,
							x0: 841,
							y0: 289,
							x1: 260,
							y1: 72
						},
						{
							//ORN_70
							carte: 1,
							zone: 33,
							x0: 905,
							y0: 362,
							x1: 121,
							y1: 255
						},
					]
		},
		flacons: {
			icone: "iconeFlacon",
			iconeOui: "miniFlaconOui",
			iconeNon: "miniFlaconNon",
			iconePe: "miniFlaconPe",
			nom: "Flacon",
			liste:	[
						{
							//FLA_01
							carte: 0,
							zone: 3,
							x0: 103,
							y0: 469,
							x1: 101,
							y1: 112
						},
						{
							//FLA_02
							carte: 0,
							zone: 28,
							x0: 681,
							y0: 685,
							x1: 158,
							y1: 167
						},
						{
							//FLA_03
							carte: 1,
							zone: 20,
							x0: 544,
							y0: 665,
							x1: 112,
							y1: 118
						},
						{
							//FLA_04
							carte: 1,
							zone: 5,
							x0: 172,
							y0: 642,
							x1: 76,
							y1: 59
						},
						{
							//FLA_05
							carte: 0,
							zone: 35,
							x0: 921,
							y0: 834,
							x1: 163,
							y1: 243
						},
					]
		}
	},
	
	listeZones: [
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
				]
}

var cacheImages = {
	tailleTotale: 0,
	tailleChargee: 0,
	retour: function(){},
	
	chargerImages: function() {
		for(var cle in data.images)
		{
			var image = data.images[cle].image;
			this.tailleTotale += (image.taille = data.images[cle].taille);
			
			image.onload = this.imageChargee;
			image.src = data.images[cle].url;
		}
		
		this.dessiner()
	},
	
	dessiner: function() {
		context.fillStyle = "#FFFFFF";
		context.fillRect(800,500,400,100);
		
		context.fillStyle = "#000000";
		context.font = "30px sans-serif";
		context.textAlign = "center";
		context.fillText("Chargement de la carte", 960, 500);
		context.fillText(Math.floor((cacheImages.tailleChargee * 100) / cacheImages.tailleTotale) + "%", 960, 550);
	},
		
	imageChargee: function() {
		cacheImages.tailleChargee += this.taille;
		if(cacheImages.tailleChargee == cacheImages.tailleTotale)
			cacheImages.retour();
		else
			cacheImages.dessiner();
	}
}

var biscuit = {
	data: {},
	
	ouvrir: function() {
		if(docCookies.hasItem("trouve") && docCookies.hasItem("peutetre"))
			biscuit.charger();
		else
			modeleObjets.creerTableaux();
	},
	
	charger: function() {
		this.data.trouve = eval("("+docCookies.getItem("trouve")+")");
		this.data.peutetre = eval("("+docCookies.getItem("peutetre")+")");
		
		for(var nom in this.data.trouve) {
			modeleObjets.objets[nom].trouve = this.data.trouve[nom];
			modeleObjets.objets[nom].peutetre = this.data.peutetre[nom];
			
			modeleObjets.objets[nom].nombre = modeleObjets.objets[nom].trouve.reduce(function(previousValue, currentValue, index, array){
				if(currentValue == true) return previousValue + 1;
				else return previousValue;
			}, 0);
		}
	},
	
	enregistrer: function() {
		//Sérialise l'objet et l'enregistre dans un cookie
		var trouve = "";
		var peutetre = "";
		
		for(var nom in modeleObjets.objets) {
			trouve += nom + ": [" + modeleObjets.objets[nom].trouve.join(',') + "], "; 
			peutetre += nom + ": [" + modeleObjets.objets[nom].peutetre.join(',') + "], ";
		}
		
		trouve = trouve.slice(0, -2);
		peutetre = peutetre.slice(0, -2);
		
		docCookies.setItem("trouve", "{" + trouve + "}", Infinity);
		docCookies.setItem("peutetre", "{" + peutetre + "}", Infinity);
	}
}