import minimist from "minimist";
import { coinFlip, countFlips } from "./modules/coin.mjs";

const argv = minimist(process.argv.slice(2))

const number = argv.number || 1

const flips = new Array()
for (var i = 0; i < number; i++) {
    flips.push(coinFlip())
}

console.log(flips)
if (flips.length == 1) console.log(`{ ${flips.pop()}: 1 }`)
else console.log(countFlips(flips))