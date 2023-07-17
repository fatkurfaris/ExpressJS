const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [
    {
        id : 0,
        name : 'Albeeerst einstein',
    },
    {
        id : 1,
        name : 'Nikola Tesla',
    },
    {
        id : 2,
        name : 'Sir Issac Newton',
    }
]

server.on('request', (req, res) => {
    const items = req.url.split('/');
    if (req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data)=> {
            const friend = data.toString();
            console.log('Request :', data);
            friends.push(JSON.parse(friend));
        })
    } else if (req.method === 'GET' && items[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length === 3){
            const friendsIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendsIndex]))
        } else {
            res.end(JSON.stringify(friends));
            
        }
        // res.end(JSON.stringify({
        //     id : 1,
        //     name : 'Sir Issac Newton',
        // }));
    } else if (req.method === 'GET' && items[1] === '/messages') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Issac</li>');
        res.write('<li>Hello Faris</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
})

server.listen(PORT, () =>{
    console.log(`listening on port ${PORT}...`);
});    