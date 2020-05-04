# Grok

> **grok**: /grok/, /grohk/, vt.
>
> To understand. Connotes intimate and exhaustive knowledge.

-- [The Jargon File](http://catb.org/jargon/html/G/grok.html)

Grok turns a TypeScript declaration file into a beautiful, readable, web page.

## Installation

```bash
npm install --global @ui-js/grok
```

## Usage

```bash
# Create documentation for index.d.ts into the ./docs folder
grok index.d.ts --outDir docs
```

## Configuration

Configuration can be specified:

-   as a `grok` property in `package.json`
-   as a `grok.json`, `grok.yaml`, `grok.js` file in your project
-   or as a specific file using the `--config` CLI option

The configuration can include the following keys:

-   `sdkName` the name of the SDK being documented
-   `tutorialPath` Prefix added to the value of a `{@tutorial}` tag to determine
    the URL to redirected to.
    For example, `{@tutorial readme.html}` with `tutorialPath = 'https://example.com/docs'`
    will redirect to 'https://example.com/docs/readme.html'
-   `documentTemplate` a string which will be used to build the output file, with the following substrings substituted:
    -   `{{content}}` HTML markup of the documentation (suitable for as the content of a `<body>` tag)
    -   `{{sdkName}}` the name of the SDK, as indicated above
    -   `{{packageName}}`
