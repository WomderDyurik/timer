window.addEventListener('load', function(){
	let timer2 = new NiceTimer('.timer', 4379);


	document.querySelector('.getSale').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});
});

class Timer{
	constructor(selector, time){
		this.box = document.querySelector(selector);
		this.time = time;
		this.interval = null;
		this.render();
		this.start();
	}

	start(){
		this.interval = setInterval(() => {
			this.tick();
		}, 1000);
	}

	stop(){
		clearInterval(this.interval);
	}

	tick(){
		this.time--;
		this.render();

		if(this.time < 1){
			this.stop();
		}
	}

	render(){
		this.box.innerHTML = this.time;
	}
}

class NiceTimer extends Timer{
	constructor(selector, time){
		super(selector, time);
	}

	tick(){
		;
		super.tick();
	}

	render(){
		this.minutes = ['минута','минуты','минут']
		this.hours = ['час','часа','часов']
		this.seconds = ['секунда','секунды','секунд']
		this.h = parseInt(this.time / 3600);
		this.hs = this.time % 3600;
		this.m = parseInt(this.hs / 60);
		this.s = this.hs % 60;
		if((this.h == 0 & this.m == 0)){
			this.box.innerHTML = this.renderTimeWithWord(this.s,this.seconds)
		} else if(this.h == 0){
			this.box.innerHTML = `${this.renderTimeWithWord(this.m,this.minutes)}:${this.renderTimeWithWord(this.s,this.seconds)}`
		} else {
		this.box.innerHTML = `${this.renderTimeWithWord(this.h,this.hours)}:${this.renderTimeWithWord(this.m,this.minutes)}:${this.renderTimeWithWord(this.s,this.seconds)}`;
		}
	}

	declOfNum(number, titles){
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
	}

	renderTimeWithWord(count, words){
		return `${count}${this.declOfNum(count, words)}`
	}
}
