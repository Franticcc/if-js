// const sum = (a) => (b) => a + b;
function sum(a) {
  return (b) => a + b;
}

console.log(sum(5)(2));


const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const text = document.getElementsByTagName('p');
// const text = document.getElementById('text');- I can't do it through id

const changeTextColor = () => {
	let color = 0; 
	return function () {
		this.style.color = colors[color];
		color++;
    
		if (color === colors.length) {
      color = 0;
    };
	};
};

for (let i = 0; i < text.length; i++) {
	text[i].addEventListener('click', changeTextColor());
};
