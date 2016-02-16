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
			context.fillText("( " + modeleObjets.objets[nom].nombre + " / " + objet.liste.length + " )", x + 20, 185);
			
			x += 70;
		}
	}
}