const argv = require('yargs')
    .option('b',{
    alias:'basse',
    type:'number',
    demandOption:true,
    describe:'Es la base de la tabla de multiplicar'
    })
    .option('l',{
    alias:'listar',
    type:'boolean',
    demandOption:true,
    default:false,
    describe:'Muestra la tabla de multiplicar'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default:10,
        describe:'Define hasta donde llega los numeros'
        })
    .check((argv,options)=>{
    if(isNaN(argv.b)){
    throw 'La base tiene que ser un numero'
    }
    return true;
    })
    .argv;

    module.exports = argv;