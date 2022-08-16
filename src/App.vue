<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `DanChat ${content}` : `DanChat`
    }}</template>
  </metainfo>
  <router-view v-cloak></router-view>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  box-sizing: border-box;
}
[v-cloak] {
  display: none;
}
//null
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}
aside,
nav,
footer,
header,
section {
  display: block;
}
//html {
//	font-size: #{$fontSize + px};
//}
html,
body {
  height: 100%;
  //	min-width: $minWidth;
}
body {
  line-height: 1;
  //font-family: $fontFamily;
  //text-rendering: optimizeLegibility;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  //	font-family: $fontFamily;
  font-size: inherit;
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
  background-color: inherit;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}
</style>
