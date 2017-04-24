# Vigenere Cipher
- a simple module implementation of vigenere cipher

## Encryption

- example

```javascript
	const { encrypt } = require('vigenere-cipher');
	const plainText = 'lorem ipsum dolor';
	const keys = 'lemon';
	const cipherText = encrypt(plainText, keys);
	console.log(cipherText) // => wsdsz mbghx pcyzv
```

## Decryption

- example

```javascript
	const { decrypt } = require('vigenere-cipher');
	const cipherText = 'wsdsz mbghx pcyzv';
	const keys = 'lemon';
	const plainText = encrypt(cipherText, keys);
	console.log(plainText) // => lorem ipsum dolor
```

## Guessing key

by providing cipher text and plain text, the key can be guessed

- example

```javascript
	
	const { getEncryptionKeys } = require('vigenere-cipher');
	const cipherText = 'wsdsz mbghx pcyzv';
	const plainText = 'lorem ipsum dolor';
	const keys = getEncryptionKeys(plainText, cipherText);
	console.log(keys) // => lemon_emonl_monle

```
The result from guessing the key is not the exact key, but there is always pattern in the result of key guessing, you can analyze by yourself to get the exact key.

## Word pattern Analyzer


This function is useful for finding pattern in key, if you want to decrypt cipher text that encrypted by vigenere cipher but you dont know the key.
By using technique, such as dictionary attack on the cipher text, and analyze the results of key guesser, and find the key that have consistent pattern. 

- example

```javascript
	
	const { analyzeWordPattern } = require('vigenere-cipher');
	const word = 'loremlorem';
	const analyzeResult = analyzeWordPattern(word);
	
	console.log(analyzeResult)
	
	/**
		the result will be

		[
			{
				numberOfChars : 5,
				havePattern : true
			}
		]

		that mean, 5 characters have pattern
	*/

```
- advance example

now we try to do some dictionary attack to cipher text

```javascript
	
	const cipherText = 'eldchrlaig xts gezwfsmzu rshseysd ffwbspew o aydghph gcpguoytwf'; 

	// the first word have 10 characters, now we list some english words that have 10 characters

	const wordToBeAnalyzed = 'eldchrlaig';
	
	const tenCharactersWord = [
		'embezzling',
		'dizzyingly',
		'blackjacks',
		'equivoques',
		'throughout',
		'pozzolanas',
		'highjacked',
		'zombifying',
		'equalizing',
		'liquidized'
	];

	const result = tenCharactersWord
		.map(word => {
			return getEncryptionKeys(word, cipherText); // transform plain word and cipher to keys
		})
		.map(key => {
			return {
				key : key,
				analyzeResult : analyzeWordPattern(key) // do some analyzation on key
			}
		})
		.filter(key => {
			return key.analyzeResult.length !== 0; // only pass key that have pattern
		})
		.map(resultOfAnalyzation => {
			
			const resultWithdecryption = resultOfAnalyzation.analyzeResult.map(data => {
				const exactKey = resultOfAnalyzation.key.slice(0, data.numberOfChars);
				const decryption = decrypt(cipherText, exactKey);
				
				return Object.assign(data, { decryption, exactKey });
			})

			return Object.assign(resultOfAnalyzation, { analyzeResult : resultWithdecryption });
		})

		console.log(JSON.stringify(result))
```

- the result

```json
	[
		{
			"key":"azcyisasva",
			"analyzeResult":[
				{
					"numberOfChars" : 9,
					"havePattern" : true,
					"decryption" : "embezzling vvk gmewgqorc zxhtcakl nkwcqrwe w azbizxh lcqewggtek",
					"exactKey" : "azcyisasv"
				}
			]
		},
		{
			"key":"lemonlemon",
			"analyzeResult":[
				{
					"numberOfChars" : 5,
					"havePattern" : true,
					"decryption" : "throughout the vanishing governor suspects a pursued specialist",
					"exactKey": "lemon"
				}
			]
		},
		{
			"key":"avjcwjmsva",
			"analyzeResult":[
				{
					"numberOfChars":9,
					"havePattern":true,
					"decryption":"equalizing orw umewkjkdl zxhxvwwu nkwgjnin w aduelgv lcuxssphek",
					"exactKey" : "avjcwjmsv"
				}
			]
		}
	]
```

now we can see the plain text above, on array index 1.

# Test

To test, clone this repo, enter the project directory run

```
	npm install
	npm test
```