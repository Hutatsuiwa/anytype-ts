const $ = require('jquery');

class KeyBoard {
	
	history: any = null;
	focus: boolean = false;
	
	init (history: any) {
		this.history = history;
		this.clear();
		
		let win = $(window); 
		win.on('keydown.common', (e: any) => { this.keyDown(e); })
		win.on('keyup.common', (e: any) => { this.keyUp(e); });
	};
	
	clear () {
		$(window).unbind('keyup.common keydown.common');
	};
	
	keyUp (e: any) {
		let k = e.which;
		
		if (!this.focus) {
			if (k == Key.backSpace) {
				e.preventDefault();
				this.history.goBack();
			};			
		};
	};
	
	keyDown (e: any) {
	};
	
	setFocus (v: boolean) {
		this.focus = v;
	};
	
};

export enum Key {
	backSpace = 8
};

export let keyBoard: KeyBoard = new KeyBoard();