const bcrypt = require("bcrypt");

const salt = 10;

const pass1 = "perro";
const pass2 = "perro1";

const bsalt = bcrypt.genSaltSync(salt);
const hash_p1 = bcrypt.hashSync(pass1, bsalt);
const hash_p2 = bcrypt.hashSync(pass2, bsalt);

console.log("p1", hash_p1);
console.log("p2", hash_p2);
