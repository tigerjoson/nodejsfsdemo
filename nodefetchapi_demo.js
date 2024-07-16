//ref: https://stackoverflow.com/questions/35325370/how-do-i-post-a-x-www-form-urlencoded-request-using-fetch
const express = require('express');
const homedir = require('os').homedir();
const client_id= 'your_id';
const client_secret= 'your_secret';

const mytool = require("./mymodule");
const {look_keys,print} = mytool;
const now = new Date();
const axios = require('axios');
const auth_url = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token"
const paragraph = "=================================================";
console.clear();

var details =	{
			grant_type:"client_credentials" ,	
			client_id:`${client_id}`,
			client_secret:`${client_secret}`
			};
let formBody = [];
for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

fetch(`${auth_url}`,{
	method:'POST',
	headers: { "Accept-Encoding": "br,gzip",'content-type': 'application/x-www-form-urlencoded'},
	body : formBody
})
.then(res=> res.json())
.then(d=> d.access_token)
.then(t=> console.log(t))
.catch(err=>console.log(err))
