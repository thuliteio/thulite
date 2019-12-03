---
title: "Goldmark markdown parser"
description: "A markdown parser written in Go. Easy to extend, standard compliant, well structured."
date: 2019-12-02T13:47:16+01:00
draft: false
images: ["tools-for-motivation-cmR92mJs40w-unsplash.jpg", "jeremy-perkins-TgmC7oCh9Jk-unsplash.jpg"]
---

<p class="lead">A markdown parser written in Go. Easy to extend, standard compliant, well structured. goldmark is compliant to CommonMark 0.29.</p>

{{< img src="tools-for-motivation-cmR92mJs40w-unsplash.jpg" alt="This is the alt text" caption="This is the caption text" class="wide" >}}

Features
----------------------

- **Standard compliant.** : goldmark get full compliance with latest CommonMark spec.
- **Extensible.** : Do you want to add a `@username` mention syntax to the markdown?
  You can easily do it in goldmark. You can add your AST nodes, 
  parsers for block level elements, parsers for inline level elements, 
  transformers for paragraphs, transformers for whole AST structure, and
  renderers.
- **Preformance.** : goldmark performs pretty much equally to the cmark
  (CommonMark reference implementation written in c).
- **Robust** : goldmark is tested with [go-fuzz](https://github.com/dvyukov/go-fuzz), a fuzz testing tool.
- **Builtin extensions.** : goldmark ships with common extensions like tables, strikethrough,
  task lists, and definition lists.
- **Depends only on standard libraries.**

#### Headings

```
## heading ## {#id .className attrName=attrValue class="class1 class2"}

## heading {#id .className attrName=attrValue class="class1 class2"}
```

```md
heading {#id .className attrName=attrValue}
============
```
@h-enk: `code highlighting`

```bash
hugo gen chromastyles --style=monokai > syntax.css
```

```bash
# Create a new Sage project
$ composer create-project roots/sage

# Development theme build with live reloading and injection
$ yarn start

# Production theme build
$ yarn build:production
```
