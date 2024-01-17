# vercel-test

## NPM
### Vercel
* git push and deploy
* npm vercel dev (localhost)

Vi testar skapa en simpel Node API-endpoint som Serverless Function, steg för steg:
Skapa repo på GitHub (välj .gitignore för Node )
Skapa ett projekt på Vecel, länka repon (Framework Preset: Other)
Klona ner repon, kör npm init och skapa en  /api/hello.js med innehållet
export default function handler(req, res) {
	res.status(200).json({ hello: "world" });
}


I VSCode-terminalen: 
npm i -g vercel (endast första gången)
vercel  (endast första gången, svara på frågorna)
vercel dev (devva lokalt, lite som  npm run dev med nodemon)
Öppna http://localhost:3000/api/hello i browsern!
git commit + push driftsätter
Se: https://vercel.com/docs/functions/serverless-functions/quickstart 
Problem med att köra vercel på Windows? Lägg till hela sökvägen under scripts i package.json, t.ex: 