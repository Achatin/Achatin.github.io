---
author: "Achatin"
title: "Generative Art"
date: 2022-08-18
description: "My post about Generative Art."
tags: ["generative", "art", "generative art"]
featured_image: /generative-banner.png
---

Computer generated graphics may be the future of art 🎨.

<!--more-->
---

I recently visited an interesting subreddit - [r/Generative](https://www.reddit.com/r/generative/). This subreddit is a collection of what's called *Generative Art*.

*Generative art refers to art that in whole or in part has been created with the use of an autonomous system. This subreddit is for sharing and discussing anything generative (including music, design and natural phenomena), but especially art.*

I was amazed and wanted to try it out 👀.

---

Generative artists typically use [**p5.js**](https://p5js.org/) or [**Processing**](https://processing.org/) programming languages. They contain rich utility for working with digital canvas.

However, I chose GO 🐹 because of its simplicity and my extensive experience with it. Then I found a great go-package for drawing - [**gg**](https://github.com/fogleman/gg). It has a straight-forward simple syntax and enough drawing capabilities.

```go
package main

import "github.com/fogleman/gg"

func main() {
    dc := gg.NewContext(1000, 1000)
    dc.DrawCircle(500, 500, 400)
    dc.SetRGB(0, 0, 0)
    dc.Fill()
    dc.SavePNG("out.png")
}
```

---

Then I started to play with it this 🔽🔽🔽

![Placeholder](/generative-banner.png)

I call them Unfamiliar [Blocks]. These are basically isometric cubes made of simple geometric shapes. They are stacked on each other and colored in 3 basic colors - red 🔴, white ⚪ & blue 🔵. Additionally, adjacent cubes with same color are linked 🔗

---

**TL;DR:** You should definitely give Generative Art a try. It's satisfying and surprisingly simple. Choose any language you like as long as it has some sort of image processing capabilities. But GO 🐹 definitely does a great job as well.

**Be creative and enjoy ❤**

{{< css.inline >}}

<style>
.canon { background: white; width: 100%; height: auto; }
</style>

{{< /css.inline >}}
