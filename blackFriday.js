var liste = {
	"sac": 200,
	"Jean": 39.90,
	"Chaussure": 100,
	"Calendrier": 2.69,
	"Giletjaune": 12.00,
	"Enceinteconnectee": 24.90,
	"Chocolat": 29.90,
	"Macbookpro": 1290,
	"Manteau": 260,
	"Gants": 8.90,
	"Masque": 11,
	"Serumphy": 6
};
var panier = ["Gants", "Gants", "Chocolat", "Gilet jaune", "Enceinte connectee", "Gilet jaune", "Serum phy", "Chaussure"];
function ob(tabprix, item){
	for (var etiquette in tabprix) {
		if (etiquette == item) {
			return tabprix[etiquette];
		}
	}
}
function paret(tabob, name){
	var occu = 0;
	for (var i = 0; i < tabob.length; i++){
		if (tabob[i] == name) {
			occu++;
		}
	}
	return occu;
}
function loterie(prix, nbroccu){
	var res = 0;
	var promotion = 0;
	for (var g = 0; g < nbroccu; g++) {
		if (g == 0) {
			res = prix;
		}else{
			promotion = prix/(g+1);
			res = res + promotion;
		}
	}
}
function moiche(panier){
	var moiche = 0;
	var k = 0;
	for (var etiquette in panier){
		if (k == 0) {
			moiche = panier[etiquette];
		}
		if (panier[etiquette] < moiche) {
			moiche = panier[etiquette];
		}
		k++
	}
	return moiche;
}
function blackFriday(tabprix, Pan){
	var resfin = 0;
	var obmoiche;
	var tabmult = [];
	var tabprival = [];
	for(var l = 0; l < Pan.length; l++){
		var nbrpre = paret(Pan, Pan[l]);
		if (nbrpre > 1) {
			var prix = ob(tabprix, Pan[l]);
			var prixred = loterie(prix, nbrpre);
			tabmult[Pan[l]] = prixred;
		}else{
			tabprival[Pan[l]] = ob(tabprix, Pan[l]);
		}
	}
	for(value in tabprival){
		resfin = resfin + tabprival[value];
	}
	for (value in tabmult) {
		resfin = resfin + tabmult[value];
	}
	if (Pan.length > 1) {
		obmoiche = (moiche(tabprival)/2);
		resfin = resfin - obmoiche;
	}
	return resfin;
}
function recuperationValeur(){
	var tabfin= [];
	var all =  document.getElementsByTagName('input');
	var tabval = [];
	for(var m = 0; m < all.length; m++){
		tabval[all[m].name]=all[m].value;
	}
	for(val in tabval){
		if(tabval[value]>1){
			for(var n = 0; n < tabval[val]; n++){
				tabfin.push(value);
			}
		}else if(tabval[value] > 0 && tabval[value] <= 1){
			tabfin.push(value);
		}
	}
	return tabfin;
}
var list = document.getElementsByTagName('input');
for(var o = 0; o < list.length; o++){
	list[o].addEventListener('input', function(){
	var tabinp = recuperationValeur();
	var fin = blackFriday(liste,tabinp);
	document.getElementById('resultat').innerHTML='Vous devez payer '+ tabinp +'€ et que ça saute!!!';
	});
}