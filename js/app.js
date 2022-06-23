var svg = document.getElementById('map');
var wrapInfo = document.getElementById('wrap_info').firstElementChild;
var wrapTime = document.getElementById('wrap_time').firstElementChild;
var item = document.querySelectorAll('#controls_container a, #map g[class], #map text[class], #map circle[class]');
var data = {
	'gaco' : {
		'title' : 'GACO',
		'img' : 'img/gaco.jpg',
		'content' : 'FORMATION POLYVALENTE EN GESTION POUR S\’INTÉGRER AUX  ÉQUIPES DIRIGEANTES COMME ASSISTANT : <br><br>•comptable et contrôle de gestion <br>•communication interne/externe <br>•marketing et commercial <br>•achats ou logistique <br>•gestionnaire en ressources <br> humaines <br>•conseiller clientèle en <br> banque/assurance...',
		'link' : [ 'http://www.iut-chy.univ-savoie.fr/index.php/formations/les-dut/gaco', '+ En savoir plus' ],
		'reunion' : ['A voir devant les salles concernées','']
	},
	'gccd' : {
		'title' : 'GCCD',
		'img' : 'img/gccd.jpg',
		'content' : '',
		'link' : [ 'http://www.iut-chy.univ-savoie.fr/index.php/formations/les-dut/gccd-alternance', '+ En savoir plus' ],
		'reunion' : ['toutes les demi heures','']

	},
	'mmi' : {
		'title' : 'MMI',
		'img' : 'img/mmi.jpg',
		'content' : '',
		'link' : [ 'http://www.iut-chy.univ-savoie.fr/index.php/formations/les-dut/mmi', '' ],
		'reunion' : ['9h30 - 10h30 salle 103 ', '10h00 - 11h00 salle 104 ','10h30 - 11h30 salle 103','11h00 - 12h00 salle 104 ', '13h00 - 14h00 salle 103','13h30- 14h30 salle 104 ','14h00 - 15h00 salle 103 et 14h30 - 15h30 salle 104']

	},
	'pec' : {
		'title' : 'PEC',
		'img' : 'img/pec.jpg',
		'content' : 'Trois projets créatifs, encadrés par des designers professionnels. Comment innover dans l’emballage de cosmétiques, de bonbons, de légumes bio, de produits outdoor ? Explorez votre créativité !...',
		'link' : [ 'http://www.iut-chy.univ-savoie.fr/index.php/formations/les-dut/pec', '+ En savoir plus' ],
		'reunion' : ['A voir devant les salles concernées','']

	},
	'sgm' : {
		'title' : 'SGM',
		'img' : 'img/sgm.jpg',
		'content' : '',
		'link' : [ 'http://www.iut-chy.univ-savoie.fr/index.php/formations/les-dut/sgm', '+ En savoir plus' ],
		'reunion' : ['A voir devant les salles concernées','']
	},
	'cafeteria' : {
		'title' : 'CAFETERIA',
		'content' : '',
	},
	'amphi1' : {
		'title' : 'Amphi 1',
		'content' : '',
	},
	'amphi2' : {
		'title' : 'Amphi 2',
		'content' : '',
	},
	'amphi3' : {
		'title' : 'Amphi 3',
		'content' : '',
	},
	'couloir' : {
		'title' : 'Perdu ?',
		'content' : 'Cliquer sur la filière ou sur l\'endroit que vous voulez. Enjoy !',
		'link' : [ 'http://www.iut-chy.univ-savoie.fr/', '+ En savoir plus' ],
	},
	'entree' : {
		'title' : 'Entré/Sortie',
		'content' : 'Cliquer sur la filière ou sur l\'endroit que vous voulez. Enjoy !',
		'link' : [ 'http://www.iut-chy.univ-savoie.fr/', '+ En savoir plus' ],
	},
	'position' : {
		'title' : 'Vous êtes ici',
		'content' : 'Cliquer sur la filière ou sur l\'endroit que cous voulez. Enjoy !',
		'link' : [ 'http://www.iut-chy.univ-savoie.fr/', '+ En savoir plus' ],
	}
}
	console.log(data);
var d = '';
init(svg, item, data, function(data) {
	//Recupère les données main au dev qui en fait se qu'il veux

	d = '';
	if(data.title) d += '<h1>' + data.title + '</h1>';
	if(data.img) d += '<img src="' + data.img + '" width="100%">';
	if(data.content) d += '<p>' + data.content + '</p>';

	if(data.reunion) {
		d += '<h2>Présentations</h2>'
		for(var i = 0; i < data.reunion.length; i++) {
			d += '<p class="item">' + data.reunion[i] + '</p>';
		}
	}

	if(data.link) d += '<a target="_blank" href="' + data.link[0] + '">' + data.link[1] + '</a>';

	wrapInfo.innerHTML = d;

});






function resize(svg) {
	var params = svg.firstElementChild.getBBox();
	svg.style.transform = "scale(" + ((svg.parentElement.offsetWidth - 5) / params.width) + ")";
	svg.style.height = (params.height + 25) +  'px';
	svg.style.width = (params.width + 10) + 'px';
	svg.style.marginTop = ((svg.parentElement.offsetHeight - (params.height + 25)) / 4)  + 'px';
	svg.style.transformOrigin = (window.innerWidth <= 1366) ? 'left center' : 'left';
}
resize(svg);
window.addEventListener('resize', function(e) {
	resize(svg);
});



var date = new Date();
var s = date.getSeconds();
var m = date.getMinutes();
var h = date.getHours();
var days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];

wrapTime.innerHTML = days[date.getDay()-1] + ' ' + date.getDate() + ', ' + months[date.getMonth()] + ', ' + date.getFullYear() + '<br>' + h + ' h ' + m + ' min ' + s + ' s';

function showTime() {
	h = parseInt(h);
	m = parseInt(m);
	s = parseInt(s);
	s++;

	if(s >= 60) { s = 0; m++; }
	if(m >= 60) { m = 0; h++; }
	if(h >= 24) { h = 0; }

	h = h.toString();
	m = m.toString();
	s = s.toString();

	if(s.length == 1) { s = '0' + s; }
	if(m.length == 1) { m = '0' + m; }
	if(h.length == 1) { h = '0' + h; }

	wrapTime.innerHTML = days[date.getDay()-1] + ' ' + date.getDate() + ', ' + months[date.getMonth()] + ', ' + date.getFullYear() + '<br>' + h + ' h ' + m + ' min ' + s + ' s';
}

var t = setInterval(showTime, 1000);
