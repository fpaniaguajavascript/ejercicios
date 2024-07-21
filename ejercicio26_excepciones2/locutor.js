//npm install gtts
//npm install play-sound


//***Importación de librerías para ejecución fuera de módulo
//const gTTS = require('gtts');//Text to speech - Conversor de texto a mp3
//const player = require('play-sound')(opts = { player: 'D:/mplayer/mplayer.exe' })//Lector de fichero
//***Fin de Importación de librerías para ejecución fuera de módulo


//***Importación de librerías para ejecutar dentro de módulo
import gTTS from 'gtts';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const playSound = require('play-sound');
const player = playSound({ player: 'D:/mplayer/mplayer.exe' });
//***Fin de Importación de librerías para ejecutar dentro de módulo

export function speechText(speech, language = 'es') {
    const gtts = new gTTS(speech, language);
    const fileName = 'speech.mp3';
    gtts.save(fileName, function (err, result) {
        if (err) {
            throw new Error(err);
        } else {
            console.log("Text to speech converted!");
            player.play(fileName, function (err) {
                if (err) throw err
            })
        }
    });
}

//speechText("Hola, buenas tardes. Es un texto normal.");
//speechText("Domani andiamo al parco", "it");