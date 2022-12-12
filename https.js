// import {send} from './internals/request.js';
// import {read} from './internals/response.js';

const {send, read} = require('./internals');
function makeRequest(url, data){
    send(url,data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);
