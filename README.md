# vercel-test

## NPM
* npm i @vercel/postgres
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


### I VSCode-terminalen: 
* npm i -g vercel (endast första gången)
* vercel  (endast första gången, svara på frågorna)
* vercel dev (devva lokalt, lite som  npm run dev med nodemon)
* Öppna http://localhost:3000/api/hello i browsern!
* git commit + push driftsätter
* Se: https://vercel.com/docs/functions/serverless-functions/quickstart 
*Problem med att köra vercel på Windows? Lägg till hela sökvägen under scripts i package.json, t.ex: 

## Exempel: Tagger Template Literal
```js
function myFunc(foo, ...vals){
	console.log(foo, vals);
}

foo = "Foo";
bar = "Bar";

myFunc(`Normal ${foo} bar: ${bar}`);

//Tagged Template Literal
myFunc `Tagged ${foo} bar: ${bar}`;


```

### Swagger
* TODO:
	* Kolla på lektion 5 och fixa bikes.js
	* generera swagger.yaml med chatgpt
		* genereate a swagger spec for a rest api/bikes endpoint supporing methods GET, POST and
		* create swagger spec based on the following rest client test
		@apiURL = http://localhost:3000

		GET {{apiURL}}/api/bikes
		
		###
		POST {{apiURL}}/api/bikes
		Content-Type: application/json

		{
			"brand": "everest",
			"price": "500"
		}
			* unpgk link, sätt i index för att se swagger ui
				* https://swagger.io/docs/open-source-tools/swagger-ui/usage/installation/
			