# vue-stringify
A helper for JSON.stringify

to install

```
npm install vue-stringify
```

to use

```
import Stringify from 'vue-stringify'
```

an then you can...

```
Stringify({ hello: 'World' })
```

and get 

```
{
  "hello": "world"
}
```

```Stringify.parse(Obj)``` will JSON.stringify and JSON.parse an Object, is it then cloned, and has no setters / getters so is more easile explored in console.

```Stringify.log(Obj)``` will log to console a JSON.stringified and JSON.pased Object.

Enjoy.