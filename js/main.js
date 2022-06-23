var _svg = {}, _data = {}, _callback = {};
var _item = [];
var _current = '';

/**
 * Verification des elements
 * @param svg object le svg
 * @param item array liste des item cliquable
 * @param data object les données de l'utilisateur
 * @param callback function function de retour
 * @return object les données
 *
**/
function init(svg, item, data, callback) {
	if(svg === undefined || typeof(svg) != 'object') {
		console.error('Application can not be started. Param 1 : <svg> is not available.')
		return false;
	}
	if(item === undefined || typeof(item) != 'object') {
		console.error('Application can not be started. Param 2 : [<item>] is not available.')
		return false;
	}
	if(data === undefined || typeof(data) != 'object') {
		console.error('Application can not be started. Param 3 : {data} is not available.')
		return false;
	}
	if(callback === undefined || typeof(callback) != 'function') {
		console.error('Application can not be started. Param 4 : callback(res){} is not available.')
		return false;
	}

	_svg = svg;
	_item = item;
	_data = data;
	_callback = callback;

	setItemClick(_item);
}


/**
 * Add click event to the items
 * @param item array liste des item cliquable
 *
**/
function setItemClick(item) {
	var _class = '';

	for(var i = 0; i < item.length; i++) {
		item[i].style.cursor = 'pointer';

		item[i].addEventListener('click', function(e) {
			_class = (this.classList.item(0)) ? this.classList.item(0) : false;

			if(_current == '' && _class) {
				_current = _class;
				show(_class);
			}
			if(_current != _class && _class) {
				hide(_current);
				show(_class);
				_current = _class;
			}
		});
	}
}


/**
 * Add class is_active
 * @params string _class la class pour la selection des elements
 * @return object les données de l'utilisateurs
**/
function show(_class) {
	var el = [];

	if(_data[_class]) {
		el = document.querySelectorAll('.' + _class);
		for(var i = 0; i < el.length; i++) {
			el[i].classList.add('is_active');
		}

		// renvoi les data pour l'utilisateur
		_callback(_data[_class]);
	} 
}


/**
 * Remove class is_active
 * @params string _class la class pour la selection des elements
 * 
**/
function hide(_class) {
	var el = [];

	el = document.querySelectorAll('.' + _class);
	for(var i = 0; i < el.length; i++) {
		el[i].classList.remove('is_active');
	}

}