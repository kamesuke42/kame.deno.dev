const listener = Deno.listen({ port: 8000 })
console.log("http://localhost:8000");

const turtle = `
                             ___-------___
                         _-~~             ~~-_
                      _-~                    /~-_
   /^\\__/^\\         /~  \\                   /    \\
 /|  O|| O|        /      \\_______________/        \\
| |___||__|      /       /                \\          \\
|          \\    /      /                    \\          \\
|   (_______) /______/                        \\_________ \\
|         / /         \\                      /            \\
 \\         \\^\\\\         \\                  /               \\     /
   \\         ||           \\______________/      _-_       //\\__//
     \\       ||------_-~~-_ ------------- \\ --/~   ~\\    || __/
       ~-----||====/~     |==================|       |/~~~~~
        (_(__/  ./     /                    \\_\\      \\.
               (_(___/                         \\_____)_)
`

async function handle(conn) {
    const requests = Deno.serveHttp(conn);
    for await (const { respondWith } of requests) {
        respondWith(new Response(turtle));
    }
}

for await (const conn of listener) {
    handle(conn);
}
