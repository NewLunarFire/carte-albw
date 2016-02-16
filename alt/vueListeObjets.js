var vueListeObjets = {
	dessiner: function() {
		var x = 455;
		
		context.fillStyle = "#FFFFFF";
		context.font = "10px sans-serif";
		context.textAlign = "center";
		
		for(var nom in data.objets)
		{
			var objet = data.objets[nom];
			
			context.drawImage(data.images[objet.icone].image, 0, 0, 100, 100, x, 135, 40, 40);
			if(modeleCarte.carteAffichee == 0)
				context.fillText("( " + modeleObjets.objets[nom].nombreHyrule + " / " + modeleObjets.objets[nom].totalHyrule + " )", x + 20, 185);
			else
				context.fillText("( " + modeleObjets.objets[nom].nombreLorule + " / " + modeleObjets.objets[nom].totalLorule + " )", x + 20, 185);
				
			x += 70;
		}
	}
}