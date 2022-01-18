const listener = Deno.listen({ port: 8000 })
console.log("http://localhost:8000");

const turtle = `
<html>
<head>
<title>kame.deno.dev</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body>
<pre>
<code style="font-size: 0.7em;">
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
</code>
</pre>
</body>
</html>
`

async function handle(conn) {
  const requests = Deno.serveHttp(conn);
  for await (const {respondWith} of requests) {
        respondWith(new Response(new TextEncoder().encode(turtle)));
    }
}

for await (const conn of listener) {
    handle(conn);
}
