"use strict";(self.webpackChunkakara=self.webpackChunkakara||[]).push([[8065],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=o(n),m=l,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4482:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],p={},s=void 0,o={unversionedId:"typescript/\u5de5\u5177\u7c7b\u578b",id:"typescript/\u5de5\u5177\u7c7b\u578b",title:"\u5de5\u5177\u7c7b\u578b",description:"\u5185\u7f6e\u7c7b\u578b",source:"@site/docs\\typescript\\\u5de5\u5177\u7c7b\u578b.md",sourceDirName:"typescript",slug:"/typescript/\u5de5\u5177\u7c7b\u578b",permalink:"/docs/typescript/\u5de5\u5177\u7c7b\u578b",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/\u5de5\u5177\u7c7b\u578b.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9006\u53d8\u4e0e\u534f\u53d8",permalink:"/docs/typescript/\u9006\u53d8\u4e0e\u534f\u53d8"},next:{title:"\u7248\u672c\u66f4\u65b0\u65e5\u5fd7.mdx",permalink:"/docs/typescript/\u7248\u672c\u66f4\u65b0\u65e5\u5fd7.mdx"}},d={},c=[{value:"\u5185\u7f6e\u7c7b\u578b",id:"\u5185\u7f6e\u7c7b\u578b",level:2},{value:"<code>Partial&lt;T&gt;</code>",id:"partialt",level:3},{value:"<code>Required&lt;T&gt;</code>",id:"requiredt",level:3},{value:"<code>Readonly&lt;T&gt;</code>",id:"readonlyt",level:3},{value:"<code>Pick&lt;T, K&gt;</code>",id:"pickt-k",level:3},{value:"<code>Omit&lt;T, K&gt;</code>",id:"omitt-k",level:3},{value:"<code>Extract&lt;T, U&gt;</code>",id:"extractt-u",level:3},{value:"<code>Exclude&lt;T, U&gt;</code>",id:"excludet-u",level:3},{value:"<code>Record&lt;K, T&gt;</code>",id:"recordk-t",level:3},{value:"<code>NonNullable&lt;T&gt;</code>",id:"nonnullablet",level:3},{value:"<code>Parameters&lt;T&gt;</code>",id:"parameterst",level:3},{value:"<code>ReturnType&lt;T&gt;</code>",id:"returntypet",level:3},{value:"<code>ConstructorParameters&lt;T&gt;</code>",id:"constructorparameterst",level:3},{value:"<code>InstanceType&lt;T&gt;</code>",id:"instancetypet",level:3},{value:"<code>Awaited&lt;T&gt;</code>",id:"awaitedt",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3},{value:"Equal",id:"equal",level:2},{value:"Type Challenge",id:"type-challenge",level:2},{value:"\u7b80\u5355\u9898",id:"\u7b80\u5355\u9898",level:3},{value:"Tuple To Object",id:"tuple-to-object",level:4},{value:"First Of Array",id:"first-of-array",level:4},{value:"Length Of Tuple",id:"length-of-tuple",level:4},{value:"Concat",id:"concat",level:4},{value:"Include",id:"include",level:4},{value:"\u4e2d\u7b49\u9898",id:"\u4e2d\u7b49\u9898",level:3},{value:"Readonly2",id:"readonly2",level:4},{value:"Deep Readonly",id:"deep-readonly",level:4},{value:"Tuple To Union",id:"tuple-to-union",level:4},{value:"Chainable Options",id:"chainable-options",level:4},{value:"Promise.all",id:"promiseall",level:4},{value:"Type Lookup",id:"type-lookup",level:4},{value:"Trim Left",id:"trim-left",level:4},{value:"Capitalize",id:"capitalize",level:4},{value:"Replace",id:"replace",level:4},{value:"ReplaceAll",id:"replaceall",level:4},{value:"Amend Argument",id:"amend-argument",level:4},{value:"Permutation",id:"permutation",level:4},{value:"Length Of String",id:"length-of-string",level:4},{value:"Flatten",id:"flatten",level:4},{value:"Amend To Object",id:"amend-to-object",level:4},{value:"Absolute",id:"absolute",level:4},{value:"String To Union",id:"string-to-union",level:4},{value:"Merge",id:"merge",level:4},{value:"Diff",id:"diff",level:4},{value:"IsNever",id:"isnever",level:4},{value:"isUnion",id:"isunion",level:4},{value:"Remove Index Signature",id:"remove-index-signature",level:4},{value:"DropChar",id:"dropchar",level:4},{value:"MinusOne",id:"minusone",level:4},{value:"PickByType",id:"pickbytype",level:4},{value:"StartsWith",id:"startswith",level:4},{value:"PartialByKeys",id:"partialbykeys",level:4},{value:"ObjectEntries",id:"objectentries",level:4},{value:"Tuple to Nested Object",id:"tuple-to-nested-object",level:4},{value:"Reverse",id:"reverse",level:4},{value:"Flip Arguments",id:"flip-arguments",level:4},{value:"BEM style string",id:"bem-style-string",level:4},{value:"InorderTraversal",id:"inordertraversal",level:4},{value:"Filp",id:"filp",level:4}],u={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5de5\u5177\u7c7b\u578b\u5b9e\u73b0"},"\u5de5\u5177\u7c7b\u578b\u5b9e\u73b0"),(0,r.kt)("h2",{id:"\u5185\u7f6e\u7c7b\u578b"},"\u5185\u7f6e\u7c7b\u578b"),(0,r.kt)("h3",{id:"partialt"},(0,r.kt)("inlineCode",{parentName:"h3"},"Partial<T>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// example\ninterface Todo {\n  title: string;\n  description: string;\n}\n\nfunction updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {\n  return { ...todo, ...fieldsToUpdate };\n}\n\nconst todo1 = {\n  title: "organize desk",\n  description: "clear clutter"\n};\n\nconst todo2 = updateTodo(todo1, {\n  description: "throw out trash"\n});\n\n// implement\ntype Partial<T> = {\n    [P in keyof T]?: T[P]\n}\n')),(0,r.kt)("h3",{id:"requiredt"},(0,r.kt)("inlineCode",{parentName:"h3"},"Required<T>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Required<T> = {\n    [P in keyof T]-?: T[P]\n}\n")),(0,r.kt)("h3",{id:"readonlyt"},(0,r.kt)("inlineCode",{parentName:"h3"},"Readonly<T>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Readonly<T> = {\n    readonly [P in keyof T]: T[P]\n}\n")),(0,r.kt)("h3",{id:"pickt-k"},(0,r.kt)("inlineCode",{parentName:"h3"},"Pick<T, K>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// example\ninterface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n}\n\ntype TodoPreview = Pick<Todo, "title" | "completed">;\n\nconst todo: TodoPreview = {\n  title: "Clean room",\n  completed: false\n};\n\n// implement\ntype Pick<T, K extends keyof T> = {\n    [P in K]: T[P]\n}\n')),(0,r.kt)("h3",{id:"omitt-k"},(0,r.kt)("inlineCode",{parentName:"h3"},"Omit<T, K>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// example\ninterface Todo {\n  title: string;\n  description: string;\n  completed: boolean;\n}\n\ntype TodoPreview = Omit<Todo, "description">;\n\nconst todo: TodoPreview = {\n  title: "Clean room",\n  completed: false\n};\n\n// implement\n\ntype Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>\n// or\ntype Omit<T, K> = {\n    [P in Exclude<keyof T, K>]: T[P]\n}\n')),(0,r.kt)("h3",{id:"extractt-u"},(0,r.kt)("inlineCode",{parentName:"h3"},"Extract<T, U>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Extract<T, K> = T extends K ? T : never\n")),(0,r.kt)("h3",{id:"excludet-u"},(0,r.kt)("inlineCode",{parentName:"h3"},"Exclude<T, U>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// example\ntype T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"\ntype T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"\ntype T2 = Exclude<string | number | (() => void), Function>; // string | number\n\n// implement\n// extends\u642d\u914d ?: \u8fd0\u7b97\u7b26\u4f7f\u7528\ntype Exclude<T, U> = T extends U ? never : T;\n\n// \u76f8\u5f53\u4e8e: type A = \'a\' \ntype A = Exclude<\'x\' | \'a\', \'x\' | \'y\' | \'z\'>\n')),(0,r.kt)("h3",{id:"recordk-t"},(0,r.kt)("inlineCode",{parentName:"h3"},"Record<K, T>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Record<K extends keyof any, T> = {\n    [P in K]: T\n}\n")),(0,r.kt)("h3",{id:"nonnullablet"},(0,r.kt)("inlineCode",{parentName:"h3"},"NonNullable<T>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type NonNullable<T extends keyof any> = T extends null | undefined ? never : T\n")),(0,r.kt)("h3",{id:"parameterst"},(0,r.kt)("inlineCode",{parentName:"h3"},"Parameters<T>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// infer \u5173\u952e\u5b57\ntype Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;\n")),(0,r.kt)("h3",{id:"returntypet"},(0,r.kt)("inlineCode",{parentName:"h3"},"ReturnType<T>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// infer \u5173\u952e\u5b57\ntype ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never\n")),(0,r.kt)("h3",{id:"constructorparameterst"},(0,r.kt)("inlineCode",{parentName:"h3"},"ConstructorParameters<T>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;\n")),(0,r.kt)("h3",{id:"instancetypet"},(0,r.kt)("inlineCode",{parentName:"h3"},"InstanceType<T>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;\n")),(0,r.kt)("h3",{id:"awaitedt"},(0,r.kt)("inlineCode",{parentName:"h3"},"Awaited<T>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type MyAwaited<T> = T extends Promise<infer T> ? MyAwaited<T> : T;\n")),(0,r.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Uppercase"),"\uff0c\u5168\u4f53\u5927\u5199"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Lowercase"),"\uff0c\u5168\u4f53\u5c0f\u4e9b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Capitalize"),"\uff0c\u9996\u5b57\u6bcd\u5927\u5199"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Uncapitalize"),"\uff0c\u9996\u5b57\u6bcd\u5c0f\u5199")),(0,r.kt)("h2",{id:"equal"},"Equal"),(0,r.kt)("p",null,"\u975e\u5185\u7f6e\u5de5\u5177\u7c7b\u578b\uff0c\u7528\u4e8e\u6bd4\u8f83\u4e24\u4e2a\u7c7b\u578b\u5b8c\u5168\u76f8\u7b49\uff0c\u56e0\u4e3a\u5176\u9ad8\u6cdb\u7528\u6027\u548c\u5b9e\u73b0\u7684\u7279\u6b8a\u6027\u6240\u4ee5\u7279\u522b\u62ce\u51fa\u6765\u8ba8\u8bba\u3002\u793e\u533a\u4e3b\u6d41\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650"},"\u5b9e\u73b0"),"\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export type Equal<X, Y> =\n    (\n      (<T>() => (T extends X ? 1 : 2)) extends\n      (<T>() => (T extends Y ? 1 : 2)) \n    )\n        ? true \n        : false;\n")),(0,r.kt)("h2",{id:"type-challenge"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/type-challenges/type-challenges"},"Type Challenge")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f00\u59cb\u505a\u9898")),(0,r.kt)("h3",{id:"\u7b80\u5355\u9898"},"\u7b80\u5355\u9898"),(0,r.kt)("h4",{id:"tuple-to-object"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md"},"Tuple To Object")),(0,r.kt)("p",null,"\u95ee\u9898\u7684\u672c\u8d28\u662f\u5143\u7956\u5982\u4f55\u8f6c\u5316\u4e3a\u8054\u5408\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type TupleToObject<T extends readonly any[]> = {\n  [k in T[number]]: k\n}\n")),(0,r.kt)("h4",{id:"first-of-array"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md"},"First Of Array")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type First<T extends any[]> = T extends [infer F, ...infer R] ? F : never;\n")),(0,r.kt)("h4",{id:"length-of-tuple"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md"},"Length Of Tuple")),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\u9700\u8981\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"readonly any[]"),"\uff0c\u5426\u5219\u5143\u7956\u4f1a\u8d70\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"never"),"\u5206\u652f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Length<T> = T extends readonly any[] ? T['length'] : never;\n")),(0,r.kt)("h4",{id:"concat"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md"},"Concat")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U]\n")),(0,r.kt)("h4",{id:"include"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md"},"Include")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/type-challenges/type-challenges/issues/13952"},"\u53c2\u8003"),"\uff0c\u9700\u8981\u501f\u52a9\u989d\u5916\u5b9e\u73b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Equal"),"\u7c7b\u578b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u8fed\u4ee3\u5199\u6cd5\ntype IterativeIncludes<T extends readonly any[], U> = {\n  [K in keyof T]: Equal<T[K], U>;\n}[number] extends false\n  ? false\n  : true;\n\n// \u9012\u5f52\u5199\u6cd5\ntype RecursiveIncludes<T extends readonly any[], U> = T extends [\n  infer F,\n  ...infer R\n]\n  ? Equal<F, U> extends true\n    ? true\n    : RecursiveIncludes<R, U>\n  : false;\n")),(0,r.kt)("h3",{id:"\u4e2d\u7b49\u9898"},"\u4e2d\u7b49\u9898"),(0,r.kt)("h4",{id:"readonly2"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md"},"Readonly2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type MyReadonly2<T, K extends keyof T = keyof T> = {\n  [k in Exclude<keyof T, K>]: T[k]\n} & {\n  readonly [k in K]: T[k]\n}\n")),(0,r.kt)("h4",{id:"deep-readonly"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md"},"Deep Readonly")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type DeepReadonly<T> = {\n  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]> \n}\n")),(0,r.kt)("h4",{id:"tuple-to-union"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md"},"Tuple To Union")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type TupleToUnion<T extends readonly any[]> = T[number]\n")),(0,r.kt)("h4",{id:"chainable-options"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.md"},"Chainable Options")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Chainable<T = {}> = {\n  option<K extends string, V extends any>(key: K, value: Exclude<V, K extends keyof T ? T[K] : never>): Chainable<{\n    [k in (keyof T) | K]: k extends keyof T ? K extends keyof T ? V : T[k] : V\n  }>\n  get(): T\n}\n\n")),(0,r.kt)("p",null,"\u6ce8\u610f\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"option"),"\u7684\u8fd4\u56de\u503c\u4e2d\u9700\u8981\u8fdb\u884c\u5b57\u6bb5\u7684\u8986\u76d6\uff0c\u4e0d\u7528\u5355\u7eaf\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"&"),"\uff0c\u9664\u4e86\u8fd9\u91cc\u5199\u7684\u65b9\u6cd5\u4e5f\u53ef\u4ee5\u5148",(0,r.kt)("inlineCode",{parentName:"li"},"Omit"),"\u518d",(0,r.kt)("inlineCode",{parentName:"li"},"&")),(0,r.kt)("li",{parentName:"ol"},"\u9700\u8981\u5bf9",(0,r.kt)("inlineCode",{parentName:"li"},"option"),"\u7684\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"li"},"value"),"\u7684\u7c7b\u578b",(0,r.kt)("inlineCode",{parentName:"li"},"V"),"\u8fdb\u884c\u7ea6\u675f\uff0c\u6bd4\u5982\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b",(0,r.kt)("inlineCode",{parentName:"li"},"V"),"\u7684\u7c7b\u578b\u4e0d\u80fd\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6269\u5c55\u9605\u8bfb"),(0,r.kt)("p",{parentName:"blockquote"},"Exclude<T, string> = 'hi'\uff0c\u4e00\u5143\u65b9\u7a0b\u5f0f\u6c42\u89e3\uff0c\u81ea\u52a8\u63a8\u5bfc\u51faT\u7684\u7c7b\u578b\u4e3a'hi'\uff0carg\u4e3anever"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const fn = <T extends any>(arg: Exclude<T, string>) => arg;\nfn('hi') // const fn: <\"hi\">(arg: never) => never\n"))),(0,r.kt)("h4",{id:"promiseall"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.md"},"Promise.all")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Util<T extends readonly any[]> = T extends readonly [infer F, ...infer L] ? [Awaited<F>, ...Util<L>] : []\ndeclare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<Util<typeof values>>\n")),(0,r.kt)("p",null,"\u6ce8\u610f\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8fd9\u91cc\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"extends [infer F]"),"\u6765\u9012\u5f52\u83b7\u53d6\u5143\u7ec4\u7684\u53c2\u6570\uff0c\u4f46\u662f\u6570\u7ec4\u4e0d\u4f1a\u8dd1\u5230\u8fd9\u4e2a\u5206\u652f\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u4e00\u79cd\u624b\u6bb5\u628a\u6570\u7ec4\u8f6c\u5316\u4e3a\u7b49\u6548\u7684\u5143\u7ec4\uff0c\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"values: readonly [...T]"),"\u5b9e\u73b0")),(0,r.kt)("h4",{id:"type-lookup"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.md"},"Type Lookup")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type LookUp<U, T> = U extends {\n  type: T\n} ? U : never;\n")),(0,r.kt)("h4",{id:"trim-left"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md"},"Trim Left")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type TrimLeft<S extends string> = S extends `${' ' | '\\n' | '\\t'}${infer R}` ? TrimLeft<R> : S;\n")),(0,r.kt)("h4",{id:"capitalize"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.md"},"Capitalize")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type MyCapitalize<S extends string> = S extends `${infer T}${infer R}` ?  `${Uppercase<T>}${R}`: S\n")),(0,r.kt)("h4",{id:"replace"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.md"},"Replace")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Replace<S extends string, From extends string, To extends string> = S extends `${infer L}${Exclude<From, ''>}${infer R}` ? `${L}${To}${R}` : S;\n")),(0,r.kt)("h4",{id:"replaceall"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.md"},"ReplaceAll")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${infer L}${Exclude<From, ''>}${infer R}` ? `${L}${To}${ReplaceAll<R, From, To>}` : S \n")),(0,r.kt)("h4",{id:"amend-argument"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.md"},"Amend Argument")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type AppendArgument<Fn extends (...args: any[]) => any, A> = (...args: [...Parameters<Fn>, A]) => ReturnType<Fn>\n")),(0,r.kt)("h4",{id:"permutation"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.md"},"Permutation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Permutation<T, K = T> = [T] extends [never] ? [] : T extends any ? [T, ...Permutation<Exclude<K, T>>] : never;\n")),(0,r.kt)("p",null,"\u6ce8\u610f\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u89e6\u53d1\u7c7b\u578b\u5206\u53d1\u540e\uff0c\u4e3a\u4e86\u4ecd\u7136\u80fd\u591f\u83b7\u53d6\u5b8c\u6574\u7684\u8054\u5408\u7c7b\u578b\uff0c\u6211\u4eec\u989d\u5916\u58f0\u660e\u4e86\u4e00\u4e2a\u7c7b\u578b\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"li"},"K = T"))),(0,r.kt)("h4",{id:"length-of-string"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md"},"Length Of String")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type LengthOfString<S extends string, Len extends any[] = []> = S extends `${infer L}${infer R}` ? LengthOfString<R, [...Len, L]> : Len['length'] \n")),(0,r.kt)("p",null,"\u601d\u8def\uff1a\u5b57\u7b26\u4e32\u8f6c\u5143\u7ec4"),(0,r.kt)("h4",{id:"flatten"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.md"},"Flatten")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Flatten<T> = T extends any[] ? T extends [infer L, ...infer R] ? [...Flatten<L>, ...Flatten<R>] : [] : [T]\n")),(0,r.kt)("h4",{id:"amend-to-object"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00527-medium-append-to-object/README.md"},"Amend To Object")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type AppendToObject<T, U extends keyof any, V> = {\n  [K in (keyof T | U)]: K extends keyof T ? T[K] : V\n}\n")),(0,r.kt)("h4",{id:"absolute"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.md"},"Absolute")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Absolute<T extends number | string | bigint> = T extends string ? T extends `-${infer N}` ? N : T: Absolute<`${T}`>\n")),(0,r.kt)("p",null,"\u601d\u8def\uff1a\u6570\u5b57\u8f6c\u5b57\u7b26\u4e32"),(0,r.kt)("h4",{id:"string-to-union"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00531-medium-string-to-union/README.md"},"String To Union")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type StringToUnion<T extends string> = T extends `${infer L}${infer R}` ?  L | StringToUnion<R>:  never;\n")),(0,r.kt)("h4",{id:"merge"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00599-medium-merge/README.md"},"Merge")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Merge<F, S> = {\n  [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never;\n}\n")),(0,r.kt)("h4",{id:"diff"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.md"},"Diff")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Diff<T, U> = Pick<{\n  [K in keyof T | keyof U]: K extends keyof T ? T[K] : K extends keyof U ? U[K] : never;\n}, Exclude<keyof T | keyof U, keyof T & keyof U>>\n\n")),(0,r.kt)("h4",{id:"isnever"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/01042-medium-isnever/README.md"},"IsNever")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type IsNever<T> = [T] extends [never] ? true : false;\n\n// \u4ee5\u4e0b\u662f\u9519\u8bef\u7b54\u6848\ntype IsNever2<T> = T extends never ? true : false \ntype Test = IsNever2<never> // never \n")),(0,r.kt)("p",null,"\u6ce8\u610f\u70b9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"never"),"\u4e0d\u80fd\u89e6\u53d1\u7c7b\u578b\u5206\u53d1\uff0c\u5426\u5219\u7ed3\u679c\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"never"),"\u3002")),(0,r.kt)("h4",{id:"isunion"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md"},"isUnion")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type IsUnion<T, Copy = T> = [T] extends [never] ? false : T extends Copy ? [Copy] extends [T] ? false : true : never\n")),(0,r.kt)("p",null,"\u601d\u8def\uff1a\u5148\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"\u8fdb\u884c\u7c7b\u578b\u5206\u53d1\uff0c\u7136\u540e\u518d\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"\u7684\u5b8c\u6574\u62f7\u8d1d",(0,r.kt)("inlineCode",{parentName:"p"},"U"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"\u8fdb\u884c\u6bd4\u8f83\u6765\u5224\u65ad\u662f\u5426\u4e3a\u8054\u5408\u7c7b\u578b"),(0,r.kt)("h4",{id:"remove-index-signature"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/01367-medium-remove-index-signature/README.md"},"Remove Index Signature")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type RemoveIndexSignature<T> = {\n  [K in keyof T as string extends K ? never : number extends K ? never : symbol extends K ? never : K]: T[K]\n}\n")),(0,r.kt)("p",null,"\u601d\u8def"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u95ee\u9898\u7684\u672c\u8d28\u662f\u5bf9\u8c61\u7684\u8fc7\u6ee4\u3002\u6211\u4eec\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"as"),"\u5b50\u53e5\u7684\u7279\u6027\u6765\u5b9e\u73b0\u8be5\u529f\u80fd\uff0c\u5f53",(0,r.kt)("inlineCode",{parentName:"li"},"as"),"\u6210",(0,r.kt)("inlineCode",{parentName:"li"},"never"),"\u540e\u5c31\u4f1a\u81ea\u52a8\u8fc7\u6ee4\u8be5\u952e")),(0,r.kt)("h4",{id:"dropchar"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/02070-medium-drop-char/README.md"},"DropChar")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type DropChar<S, C> = S extends `${infer L}${infer R}` ?  L extends C ?  DropChar<R, C> : `${L}${DropChar<R, C>}` : S;\n\n")),(0,r.kt)("h4",{id:"minusone"},"MinusOne"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TODO")),(0,r.kt)("h4",{id:"pickbytype"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/02595-medium-pickbytype/README.md"},"PickByType")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type PickByType<T, U> = {\n  [K in keyof T as T[K] extends U ? K : never]: T[K]\n}\n")),(0,r.kt)("h4",{id:"startswith"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/02688-medium-startswith/README.md"},"StartsWith")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type StartsWith<T extends string, U extends string> = T extends `${U}${infer R}` ? true : false;\n\ntype EndsWith<T extends string, U extends string> = T extends `${infer L}${U}` ? L : false;\n")),(0,r.kt)("h4",{id:"partialbykeys"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/02757-medium-partialbykeys/README.md"},"PartialByKeys")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Merge<T> = {\n  [K in keyof T]: T[K]\n}\ntype PartialByKeys<T, K extends keyof any = keyof T> = Merge<Omit<T, K> & Partial<Pick<T, K & keyof T>>>\n\n")),(0,r.kt)("p",null,"\u6ce8\u610f\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"Merge"),"\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"li"},"{ name: string } & { age: number}"),"\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"{ name: string; age: number}"),"\u7684\u8f6c\u5316"),(0,r.kt)("li",{parentName:"ol"},"\u6b64\u5904\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"T"),"\u7c7b\u578b\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"string | number | symbol"),"\uff0c\u4e3a\u4e86\u8ba9\u5b83\u6ee1\u8db3",(0,r.kt)("inlineCode",{parentName:"li"},"keyof T"),"\u6709\u4e24\u79cd\u601d\u8def\uff0c\u4e00\u662f\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"li"},"T extends keyof T ? T : never"),"\uff0c\u4e00\u79cd\u662f\u8fd9\u91cc\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"T & keyof T"))),(0,r.kt)("h4",{id:"objectentries"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/02946-medium-objectentries/README.md"},"ObjectEntries")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type ObjectEntries<T> = {\n  [K in keyof T]-?: [K, T[K] extends infer R | undefined ? R : T[K]]\n}[keyof T]\n")),(0,r.kt)("h4",{id:"tuple-to-nested-object"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/03188-medium-tuple-to-nested-object/README.md"},"Tuple to Nested Object")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type TupleToNestedObject<T, U> = T extends [infer L, ...infer R]  ? {\n  [K in L & keyof any]: TupleToNestedObject<R, U>\n} : U;\n")),(0,r.kt)("h4",{id:"reverse"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/03192-medium-reverse/README.md"},"Reverse")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Reverse<T, Result extends readonly any[] = []> = T extends [infer L, ...infer R] ? Reverse<R, [L, ...Result]> : Result;\n")),(0,r.kt)("h4",{id:"flip-arguments"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/03196-medium-flip-arguments/README.md"},"Flip Arguments")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer P) => infer R ? (...args: Reverse<P>) => R : never;\n")),(0,r.kt)("h4",{id:"bem-style-string"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/03326-medium-bem-style-string/README.md"},"BEM style string")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type BEM<B extends string, E extends string[], M extends string[]> = `${B}${E extends [] ? '' : E[number] extends infer T ? `__${T & string}`: never}${M extends [] ? '' : M[number] extends infer R ? `--${R & string}`: never}`\n")),(0,r.kt)("h4",{id:"inordertraversal"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/03376-medium-inordertraversal/README.md"},"InorderTraversal")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode] ? (\n  [\n    ...InorderTraversal<T['left']>,\n    T['val'],\n    ...InorderTraversal<T['right']>,\n  ]\n) : []\n")),(0,r.kt)("h4",{id:"filp"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/type-challenges/type-challenges/blob/main/questions/04179-medium-flip/README.md"},"Filp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Flip<T> = {\n  [K in keyof T as `${T[K] & (number | string | boolean) }` ]: K\n}\n")))}m.isMDXComponent=!0}}]);