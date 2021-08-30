## tham tri

` number, string, boolean,...`

```bash
  let a = 3;
  let b = 3;
  a === b => true
```

## tham chieu

`object, array, object,..`

```bash
 let c = (type) => {
   return fetch(`http://reqres.in/api/${type}`);
 }; // dia chi o trong bo nho
```

```bash
 let d = (type) => {
   return fetch(`http://reqres.in/api/${type}`);
 }; // dia chi o trong bo nho
```

**Tham chieu vao 2 bo nho khac nhau nen tra ve false**

```bash
c === d => false;
```
