# Rspress website template
This template is a show case of the [Rspress](https://rspress.dev/) which supports the [internationalization](https://rspress.dev/guide/default-theme/i18n.html) with some common documents of the open source project website.

## How to Start the website

```bash
npm install # Install NPM dependencies

npm run dev  # Start local server

npm run build # Build the production bundle, using the doc_build as the default output directory

npm run preview # Start the local preview service
```

## General Folder Structure

```txt
rspress-template
├── docs/ # Latest English docs, use kebab-case
│   ├── en  # the English version of the documents
│   │   ├── _meta.json
│   │   ├── community
│   │   │   └── index.md
│   │   ├── downloads.md
│   │   ├── guide
│   │   │   ├── _meta.json
│   │   │   ├── developer
│   │   │   │   ├── build.md
│   │   │   │   ├── contribution.md
│   │   │   │   └── release.md
│   │   │   ├── start
│   │   │   │   └── quick.md
│   │   └── index.md
│   ├── public  # the common images file share within the document
│   │   ├── rspress-dark-logo.png
│   │   ├── rspress-icon.png
│   │   └── rspress-light-logo.png
│   └── zh # the Chinese version of the documents
│       ├── _meta.json
│       ├── community
│       │   └── index.md
│       ├── downloads.md
│       ├── guide
│       │   ├── _meta.json
│       │   ├── developer
│       │   │   ├── build.md
│       │   │   ├── contribution.md
│       │   │   └── release.md
│       │   ├── start
│       │   │   └── quick.md
│       └── index.md
├── i18n.json   # the internationalization file
...
```
