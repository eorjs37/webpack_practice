// src/js/main.js
// ES6 모듈
import "@babel/polyfill";
import { pi, power, Foo } from './lib';

console.log(pi);
console.log('test push 4');
console.log(power(pi, pi));

const f = new Foo();
console.log(f.foo());
console.log(f.bar());