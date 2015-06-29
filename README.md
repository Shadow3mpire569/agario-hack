# agario-hack
A tool to dominate agar.io without problems

# Installation
Type this into the developer console
```javascript
var agario_hack = document.createElement('script');
agario_hack.async = true;
agario_hack.type = 'text/javascript';
agario_hack.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//raw.githubusercontent.com/D3strukt0rLP/agario-hack/master/agario-hack.js';
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(agario_hack, node);
```
