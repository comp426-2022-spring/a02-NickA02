import minimist from "minimist";
import {flipACoin} from "./modules/coin.mjs"

const argv = minimist(process.argv.slice(2))

if (argv.call == "heads" || argv.call == "tails") {
    console.log(flipACoin(argv.call))
}else {
    console.error('Error: no input.')
    console.log('Usage: node guess-flip --call=[heads|tails]')
}