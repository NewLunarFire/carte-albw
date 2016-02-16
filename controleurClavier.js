var controleurClavier = {
	toucheAppuyee: function(e) {
		if(e.which == 70)
		{
			//Ajuste le canevas
			if(vueGlobale.pleinEcran)
				vueGlobale.quitterPleinEcran();
			else
				vueGlobale.activerPleinEcran();
			
			//Change le mode d'affichage
			vueGlobale.pleinEcran = !vueGlobale.pleinEcran;
			
			//Redessine tout
			vueGlobale.dessinerTout();
		}
	}
}