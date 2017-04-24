const encrypt = require('./encryptor');
const decrypt = require('./decryptor');
const getEncryptionKeys = require('./get-encryption-keys');
const analyzeWordPattern = require('./do-word-have-pattern');

module.exports = { 
	encrypt, 
	decrypt, 
	getEncryptionKeys, 
	analyzeWordPattern 
};
