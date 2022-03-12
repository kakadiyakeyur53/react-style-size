# react-style-size
give your component height and width base on some specific component's or viewport's height and width

## installation

### npm :-

```javascript
npm install react-style-size
```

### yarn :-

```javascript
yarn add react-style-size
```

## functionality

1. give height and width to your component related with viewport size

## Functions :

### vh() :

Use for provide height related to viewport height.

syntax is:
`vh(percentage)`


```javascript
import { vh } from "react-style-size";

<div style={{height:vh(90)}}>example</div> 
```

### vw() :

Use for provide width related to viewport width.

syntax is:
`vw(percentage)`


```javascript
import { vw } from "react-style-size";

<div style={{width:vw(90)}}>example</div> 
```


## Example of usage :


```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { vh,vw } from "react-map-location";


const = App() => {

return(
<div style={{height:vh(90),width:vw(100)>
<div style={{width:vw(20)>keyur kakadiya</div>
<div style={{height:vh(50)>react-style-size</div>
</div>
);
}


ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);
<<<<<<< HEAD
```
=======
```
>>>>>>> cf2923ce23238ef900657a5ffc6e56fce12a2528
