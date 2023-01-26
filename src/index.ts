// Step#01: Import http and types for parameters
import http, {IncomingMessage, ServerResponse} from "http";

// Step#02: Create a function
const requestListener = function(req: IncomingMessage, res: ServerResponse){
    // First I Kept it empty and check server by yarn start
    
    // After testing server now usinf http methods (e.g. GET) and endpoint
    if(req.method === "GET" && req.url === "/users"){
        res.write("user list");

        // Always need to close the res
        res.end();
    }

    if(req.method === "POST" && req.url === "/products"){
        res.write("create a new product");
        res.end();
    }

    if(req.method === "DELETE" && req.url === "/users/1"){
        res.write("delete user by id");
        res.end();
    }

    // If above if-statement doesn't match then also need to close the response here also a message / status code
    res.writeHead(404);
    res.end("Router Not Found"); 
}

// Step#03: Declaration and creating server variable
const server = http.createServer(requestListener);

// Step#04: Calling a function for which require 3 things
// i:   port: e.g. 5000, 5001, 5002, 8000 etc   
// ii.  hostname: localhost
// iii. Callback
const port = 5000;
server.listen( port, () => {
    console.log(`Server is running om http://localhost:${port}`);
});  

