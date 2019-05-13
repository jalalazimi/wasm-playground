import * as wasm from "../pkg/wasm_playground";

const sum = (a, b) => a ^ b;

console.time("Time WASM");
console.log(wasm.add(223234234234234, 233333333333333333));
console.timeEnd("Time WASM");

console.time("Time JS");
console.log(sum(223234234234234, 233333333333333333));
console.timeEnd("Time JS");