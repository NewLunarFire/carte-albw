var vueSwitcher = {
	dessiner: function() {
		if(modeleCarte.carteAffichee == 0)
			context.drawImage(data.images.switcherHyrule.image, 0, 0, 325, 107, 1220, 120, 325, 107);
		else
			context.drawImage(data.images.switcherLorule.image, 0, 0, 325, 107, 1220, 120, 325, 107);
	}
}