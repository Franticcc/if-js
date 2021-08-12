// const sum = (a) => (b) => a + b;
function sum(a) {
  return (b) => a + b;
}

console.log(sum(5)(2));


const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const text = document.getElementsByTagName('p');

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


// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// const text1 = document.getElementsById('text1');
// const text2 = document.getElementsById('text2');
// const text3 = document.getElementsById('text3');
// // const text = document.getElementById('text');- I can't do it through id

// const changeTextColor = (textElement) => {
// 	let color = 0;
// 	return function () {
// 		textElement.style.color = colors[color];
// 		color++;
// 		if (color === colors.length) {
// 			color = 0;
// 		};
// 	};
// };

// text1.addEventListener('click', changeTextColor(text1));
// text2.addEventListener('click', changeTextColor(text2));
// text3.addEventListener('click', changeTextColor(text3));