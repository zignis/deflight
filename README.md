# [De-flight](https://npmjs.com/package/deflight)

<p>
  <a href="https://npmjs.com/package/deflight" target="_blank">
    <img alt="Package version" src="https://badgen.net/npm/v/deflight" />
  </a>
  <img alt="Package downloads" src="https://badgen.net/npm/dm/deflight" />
  <a href="./LICENSE">
    <img alt="Package license" src="https://badgen.net/npm/license/deflight" />
  </a>
</p>

A middleware wrapper for [express](https://expressjs.com/) that skips calling the middleware for pre-flight requests.

## Installation

```shell
# Yarn
yarn add deflight

# NPM
npm install deflight
```

The package exports both a named and a default export:

```js
import { deflight } from "deflight";
// Or
import deflight from "deflight";

app.use(deflight(someMiddleware));
```

## When to use it?

If your app serves requests coming from a different origin than your server is hosted on, and you need to do something specifically with the pre-flight requests, for example, sending the `Access-Control-Allow-Methods` header on a per-route basis:

```js
app.use(deflight(someExpensiveMiddleware));

app.all('/example', (req, res, next) => {
  if ((req.method || '').toLowerCase() === 'options') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Content-Length', '0');

    return res.status(204).end();
  }
  
  // Route logic
});
```

## Gotchas

### Using with the [CORS](https://expressjs.com/en/resources/middleware/cors.html) middleware

You need to enable the `preflightContinue` option to let the CORS middleware pass the pre-flight request
to subsequent middlewares and not return early.

```js
app.use(
  cors({
    origin: "https://example.com",
    preflightContinue: true, // Required
  })
);
```

### TypeScript

The wrapper uses the default `Request` type from the express package.
If you have extended the request object, or your middleware expects a different request object:

```ts
interface ExtendedRequest extends Request {
    customProp: string;
}

app.use(deflight<ExtendedRequest>(someMiddleware));
```

## License

Deflight is released under the [MIT License](./LICENSE).
