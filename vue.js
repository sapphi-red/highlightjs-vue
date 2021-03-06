/*
Language: Vue.js
Requires: xml.js, javascript.js, typescript.js, css.js, stylus.js, scss.js, less.js
Author: Sara Lissette Luis Ibáñez <lissette.ibnz@gmail.com>
Description: Single-File Components of Vue.js Framework
*/
var module = module ? module : {};

function hljsDefineVue(hljs) {
  return {
    subLanguage: "xml",
    contains: [
      hljs.COMMENT("<!--", "-->", {
        relevance: 10,
      }),
      {
        begin: /^(\s*)(<script>)/gm,
        end: /^(\s*)(<\/script>)/gm,
        subLanguage: "javascript",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(\s*)(<script lang=["']ts["']>)/gm,
        end: /^(\s*)(<\/script>)/gm,
        subLanguage: "typescript",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(\s*)(<style(\s(scoped|module(=\"\w+\")?))?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: "css",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(\s*)(<style lang=["'](scss|sass)["'](\s(scoped|module(=\"\w+\")?))?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: "scss",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(\s*)(<style lang=["']less["'](\s(scoped|module(=\"\w+\")?))?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: "less",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(\s*)(<style lang=["']stylus["'](\s(scoped|module(=\"\w+\")?))?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: "stylus",
        excludeBegin: true,
        excludeEnd: true,
      },
    ],
  };
}

module.exports = function(hljs) {
  hljs.registerLanguage("vue", hljsDefineVue);
};

module.exports.definer = hljsDefineVue;
