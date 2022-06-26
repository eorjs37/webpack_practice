// src/js/main.js
// ES6 모듈
import "@babel/polyfill";
import { pi, power, Foo } from './lib';
import "@/assets/img/home.png";
import "@/assets/img/logo.png";

console.log(pi);
console.log('test push 4');
console.log(power(pi, pi));

const f = new Foo();
console.log(f.foo());
console.log(f.bar());