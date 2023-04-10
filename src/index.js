import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados.length !== 0 ? resultados : 'nao a links no arquivo';
} 

function trataError(error){
    throw new Error (chalk.red (error.code, 'o diretorio esta incorreto'))
}


async function pegaArquivo(caminhoDoArquivo){
    try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    return extraiLinks(texto)
   
    }
    catch(error){
        trataError(error)
    }
}

export default pegaArquivo;