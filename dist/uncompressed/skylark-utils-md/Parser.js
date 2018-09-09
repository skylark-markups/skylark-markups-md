define([
	"skylark-langx/langx",
    "./markdown",
    "./primitives/marked"
], function(langx,markdown, marked) {
	var Parser = markdown.Parser;

   langx.mixin(Parser,markdown);

   return Parser ;
});