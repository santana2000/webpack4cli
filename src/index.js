// import _ from 'lodash';

// 引入就够了，会自动赋值，不需要再add了
import "./index.css";
// import './sass/index.scss';
require("./sass/index.scss");

// const element = document.getElementsByClassName('item');
// element.classList.add('hello');

import Vue from "vue";
import Hello from "./components/Hello.vue";

const app = new Vue({
    el: "#app",
    template: "<Hello/>",
    components: {
        Hello
    }
});

console.log(
    [1, 2, 3].map(n => n + 1),
    "------------"
);

/* function component() {
	const element = document.createElement('div');

	// ---------------------- 1 ---------------------------------


	// lodash（目前通过一个 script 引入）对于执行这一行是必需的
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	var myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);


	// ---------------------- 2 ---------------------------------
	var btn = document.createElement('button');
	btn.innerHTML = '点击查看 console！';
	btn.onclick = printMe;

	element.appendChild(btn);

	return element;
} */

// document.body.appendChild(component());
