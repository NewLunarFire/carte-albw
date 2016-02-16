var vueDescriptif = {
	dessiner: function() {
		if(modeleDescriptif.vide == false)
		{
			//Dessine l'icone
			context.drawImage(modeleDescriptif.icone, 0, 0, 100, 100, 1250, 250, 100, 100);
			
			//Nom de l'objet
			context.fillStyle = "#FFFFFF";
			context.font = "20px sans-serif";
			context.textAlign = "left";

			context.fillText(modeleDescriptif.nom , 1375, 275);
			
			//Checkbox
			context.font = "16px sans-serif";
			
			if(modeleDescriptif.trouve)
				context.drawImage(data.images.checkOui.image, 0, 0, 16, 16, 1375, 300, 16, 16);
			else
				context.drawImage(data.images.checkNon.image, 0, 0, 16, 16, 1375, 300, 16, 16);
				
			if(modeleDescriptif.peutetre)
				context.drawImage(data.images.checkOui.image, 0, 0, 16, 16, 1375, 325, 16, 16);
			else
				context.drawImage(data.images.checkNon.image, 0, 0, 16, 16, 1375, 325, 16, 16);
			
			context.fillText("Trouvé", 1400, 316);
			context.fillText("Peut-être", 1400, 341);
		}
	}
}