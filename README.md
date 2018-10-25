<div align="center">
  <h2>react-pdfmake</h2>
  <img alt="react-pdfmake" src="https://raw.githubusercontent.com/bkniffler/react-pdfmake/master/assets/preview.png" height="300px" />
  <br />
  <strong>Super easy way to create PDFs through react components.</strong>
  <br />
  <br />
  <a href="https://travis-ci.org/bkniffler/react-pdfmake">
    <img src="https://img.shields.io/travis/bkniffler/react-pdfmake.svg?style=flat-square" alt="Build Status">
  </a>
  <a href="https://codecov.io/github/bkniffler/react-pdfmake">
    <img src="https://img.shields.io/codecov/c/github/bkniffler/react-pdfmake.svg?style=flat-square" alt="Coverage Status">
  </a>
  <a href="https://github.com/bkniffler/react-pdfmake">
    <img src="http://img.shields.io/npm/v/react-pdfmake.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://github.com/bkniffler/react-pdfmake">
    <img src="https://img.shields.io/badge/language-typescript-blue.svg?style=flat-square" alt="Language">
  </a>
  <a href="https://github.com/bkniffler/react-pdfmake/master/LICENSE">
    <img src="https://img.shields.io/github/license/bkniffler/react-pdfmake.svg?style=flat-square" alt="License">
  </a>
  <br />
  <br />
</div>

## Install

<a name="yarn"/>

### Yarn

```
yarn add react-pdfmake
```

<a name="npm"/>

### NPM

```
npm i react-pdfmake
```

## Example

```jsx
import * as React from 'react';
import {
  PDFDocument,
  PDFText,
  PDFTable,
  PDFTableRow,
  PDFTableColumn,
  PDFColumns,
  PDFColumn
} from 'react-pdfmake';

export default (
  <PDFDocument
    pageSize="A5"
    pageOrientation="portrait"
    pageBreakBefore={(currentNode, followingNodesOnPage) => {
      return (
        currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0
      );
    }}
    styles={{
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableExample: {
        margin: [0, 5, 0, 15]
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    }}
  >
    <PDFText style="subheader">Headers</PDFText>
    You can declare how many rows should be treated as a header. Headers are automatically
    repeated on the following pages
    <PDFText color="gray" italics>
      Headers
    </PDFText>
    <PDFColumns columnGap={10}>
      <PDFColumn width="*">Hi</PDFColumn>
      <PDFColumn width="auto">Hi</PDFColumn>
    </PDFColumns>
    <PDFTable
      headerRows={1}
      style="tableExample"
      pageOrientation="landscape"
      pageBreak="before"
    >
      <PDFTableRow>
        <PDFTableColumn style="tableHeader">Header 1</PDFTableColumn>
        <PDFTableColumn style="tableHeader">Header 2</PDFTableColumn>
        <PDFTableColumn style="tableHeader">Header 3</PDFTableColumn>
      </PDFTableRow>
      <PDFTableRow>
        <PDFTableColumn>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum PDF
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
        </PDFTableColumn>
        <PDFTableColumn>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
        </PDFTableColumn>
        <PDFTableColumn>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
        </PDFTableColumn>
      </PDFTableRow>
    </PDFTable>
  </PDFDocument>
);
```

## Credits

- [pdfmake](https://github.com/bpampuch/pdfmake)
