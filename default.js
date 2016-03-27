var $ = { 'body': document.body }; 

$['body'].style.position = 'absolute';
$['body'].style.top = 0 + 'px';
$['body'].style.left = 0 + 'px';
$['body'].style.right = 0 + 'px';
$['body'].style.bottom = 0 + 'px';
	
function create() {
	this.list = [];
	this.style = {};
	this.mount = '';
	if ((arguments.length < 1) || (arguments.length > 3)) { 
		return false;
	} else {
		if ((arguments[0].constructor === String) || (arguments[0].constructor === Number)) {
			this.list.push(arguments[0]);
		} else if (arguments[0].constructor === Array) {
			if (arguments[0].length < 1) {
				return false;
			} else {
				for(var index in arguments[0]) {
					if ((arguments[0][index].constructor === String) || (arguments[0][index].constructor === Number)) {
						if (arguments[0][index] == '') {
							return false;
						} else {
							this.list.push(arguments[0][index]);
						}
					} else {
						return false;
					}
				}
			}
		} else {
			return false;	
		}

		if (arguments[1]) { 
			if (arguments[1].constructor === Object) { 
				for(var key in arguments[1]) {
					if ((arguments[1][key].constructor !== String) && (arguments[1][key].constructor !== Number)) {
						return false;
					} else {
						//silence;
					}
				}
						
				for(var key in arguments[1]) {
					this.style[key] = arguments[1][key];
				}
						
			} else if (arguments[1].constructor === String) {
				if (arguments[1]) {
					this.mount = arguments[1];
				}
			} else {
				return false;
			}
		} else { 
			//silence;
		}
				
		if (arguments[2]) {
			if (arguments[2].constructor !== String) {
				return false;
			} else {
				this.mount = arguments[2];
			}
		} else {
			//silence;
		}
								
		
		if (this.list.length == 0) { 
			return false; 
		} else {
			var keys = 0;
			for(var key in this.style) { keys++;}
			
			for(var name in list) {
				$[list[name]] = document.createElement('div');
			
				if(keys != 0) {
					for(var key in this.style) {
						$[list[name]].style[key] = this.style[key];
					}
				} else {
					// silence;
				}
						
						
				if (this.mount != '') {
					$[this.mount].appendChild($[list[name]]);
				} else {
					// silence;
				}
			}	
		}
	}
}
	
	
	
	
	
function modify() {
	this.list = [];
	this.style = {};
			
	if ((arguments.length < 1) || (arguments.length > 2)) { 
		return false;
	} else {
		if ((arguments[0].constructor === String) || (arguments[0].constructor === Number)) {
			this.list.push(arguments[0]);
		} else if (arguments[0].constructor === Array) {
			if (arguments[0].length < 1) {
				return false;
			} else {
				for(var index in arguments[0]) {
					if ((arguments[0][index].constructor === String) || (arguments[0][index].constructor === Number)) {
						if (arguments[0][index] == '') {
							return false;
						} else {
							this.list.push(arguments[0][index]);
						}
					} else {
						return false;
					}
				}
			}
		} else {
			return false;	
		}
				
				
		if (arguments[1]) { 
			if (arguments[1].constructor === Object) { 
				for(var key in arguments[1]) {
					if ((arguments[1][key].constructor !== String) && (arguments[1][key].constructor !== Number)) {
						return false;
					} else {
						//silence;
					}
				}
						
				for(var key in arguments[1]) {
					this.style[key] = arguments[1][key];
				}
						
			} else {
				return false;
			}
		} else { 
			//silence;
		}
				
		var keys = 0;
		for(var key in this.style) { keys++;}
		
		if(keys == 0) { 
			return false;
		} else {
			for(var name in list) {
				for(var key in this.style) {
					$[list[name]].style[key] = this.style[key];
				}
			}
		}
	}
}
	
	
	
function append() {
		
	this.list = [];
	this.mount = '';
			
	if ((arguments.length < 1) || (arguments.length > 2)) { 
		return false;
	} else {
		if ((arguments[0].constructor === String) || (arguments[0].constructor === Number)) {
			this.list.push(arguments[0]);
		} else if (arguments[0].constructor === Array) {
			if (arguments[0].length < 1) {
				return false;
			} else {
				for(var index in arguments[0]) {
					if ((arguments[0][index].constructor === String) || (arguments[0][index].constructor === Number)) {
						if (arguments[0][index] == '') {
							return false;
						} else {
							this.list.push(arguments[0][index]);
						}
					} else {
						return false;
					}
				}
			}
		} else {
			return false;	
		}
						
	
		if (arguments[1]) {
			if (arguments[1].constructor !== String) {
				return false;
			} else {
				this.mount = arguments[1];
			}
		} else {
			return false;
		}
								
		if (this.list.length == 0) { 
			return false; 
		} else {
			var keys = 0;
			for(var key in this.style) { keys++;}
	
			for(var name in list) {
				if (this.mount != '') {
					$[this.mount].appendChild($[list[name]]);
				} else {
					return false;
				}
			}	

		}
	}
}
	
	
function remove() {
	this.list = [];
	if ((arguments.length < 1) || (arguments.length > 1)) { 
		return false;
	} else {
		if ((arguments[0].constructor === String) || (arguments[0].constructor === Number)) {
			this.list.push(arguments[0]);
		} else if (arguments[0].constructor === Array) {
			if (arguments[0].length < 1) {
				return false;
			} else {
				for(var index in arguments[0]) {
					if ((arguments[0][index].constructor === String) || (arguments[0][index].constructor === Number)) {
						if (arguments[0][index] == '') {
							return false;
						} else {
							this.list.push(arguments[0][index]);
						}
					} else {
						return false;
					}
				}
			}
		} else {
			return false;	
		}
				
		for(var name in list) {
			$[list[name]].parentElement.removeChild($[list[name]]);
		}	
	}
}