import chalk from 'chalk';
import fs from 'fs';

function trataError(error){
    throw new Error (chalk.red (error.code, 'o diretorio esta incorreto'))
}


async function pegaArquivo(caminhoDoArquivo){
    try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.green(texto))
    }
    catch(error){
        trataError(error)
    }
}

pegaArquivo('./arquivo/')