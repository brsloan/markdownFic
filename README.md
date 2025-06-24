# markdownFic
MarkdownFic is a variation of markdown which allows the use of tabs for use in writing fiction. I originally developed it for use in [WareWoolf](https://github.com/brsloan/warewoolf), but it could be handy for anyone writing fiction in plain text, so I've decided to put it out independently as well. You can use the online converter [here](https://brsloan.github.io/markdownFic/) or read below for how it works.

Unlike Markdown, MarkdownFic allows you to use regular indented paragraphs without space between them. It will keep your manual tabs and your white space. You are freed from writing fiction like it's a blog!

- The core supported syntax is all the same as Markdown:
  - Headings: '\# My Heading 1', '\#\# My Heading 2' 
      - WareWoolf supports up to 4 heading levels.
  - Italics: '\*italicized text\*'
  - Bold: '\*\*bold text\*\*'
  - Blockquote: '\> blockquoted text'
  - Strikethrough: '\~\~struck through text\~\~'
  - Footnotes:
    - 'Text with a footnote. \[^1]'
    - '\[^1]: The footnote.'

But here are some differences:
- Tabs/Indentation. MarkdownFic ignores all tabs, so they can be used as normal for writing conventional pargraphs in fiction.
- Paragraph breaks. Unlike in conventional Markdown, you do not have to put blank lines between paragraphs. This goes along with the indentation feature in allowing you to write fiction in a normal way. But you are allowed to add blank lines wherever you want them, as is often done between scenes, chapters, etc.
- Text alignment. These are used at the beginning of a line to designate alignment for that paragraph.
  - '\[>c] This line is centered.'
  - '\[>r] This line is aligned right.'
  - '\[>j] This line is justified.'
  - no marker leaves the default, which is aligned left.
  - note that these can be used in addition to Heading markers to create centered chapter titles. But they must be used **before** the heading marker. So a centered heading would be '\[>c] \# Heading', not '\# \[>c] Heading'.
- Multi-paragraph footnotes. In Markdown, this is done using tabs beneath the original footnote marker, but here you just use the same footnote marker at the beginning of each paragraph.
- Note that if you want to apply multiple styles to one string of text, you can do so, but should always add them in the order **bold italic underline strikethrough**. So if you want one word to have all of those styles, it is written \*\*\*\_\_\~\~word\~\~\_\_\*\*\*.  Any other order will introduce errors, so this is wrong: \_\_\~\~\*\*\*bad word\*\*\*\~\~\_\_. It is not often that you need to style text with multiple styles, but just remember that when you do, you need to run the order *by us*: ****b i u s****: **b**old **i**talic **u**nderline **s**trikethrough. I think that's memorable, but then I am biased.
 
That's it! You don't need much formatting to write fiction.
