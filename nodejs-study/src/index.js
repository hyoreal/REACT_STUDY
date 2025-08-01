// CJS
// math.js에서 export할때 객체 형태로 내보냈기 때문에 변수로 할당해준다.
// const moduleData = require("./math"); 

// console.log(moduleData);
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// ESM
import { add, sub } from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));