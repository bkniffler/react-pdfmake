import React from 'react';

interface IPDFRootElement {
  style?: string;
  pageBreak?: 'before' | 'after';
  pageOrientation?: 'portrait' | 'landscape';
}

interface IPDFText extends IPDFRootElement {
  style?: string;
  italics?: boolean;
  color?: string;
  headlineLevel?: number;
}
export const PDFText: React.SFC<IPDFText> = () => null;

interface IPDFTable extends IPDFRootElement {
  headerRows?: number;
}
export const PDFTable: React.SFC<IPDFTable> = () => null;

interface IPDFTableRow {}
export const PDFTableRow: React.SFC<IPDFTableRow> = () => null;

interface IPDFTableColumn {
  style?: string;
}
export const PDFTableColumn: React.SFC<IPDFTableColumn> = () => null;

interface IPDFColumns extends IPDFRootElement {
  columnGap?: number;
}
export const PDFColumns: React.SFC<IPDFColumns> = () => null;

interface IPDFColumn extends IPDFRootElement {
  width?: 'auto' | '*' | number | string;
}
export const PDFColumn: React.SFC<IPDFColumn> = () => null;
