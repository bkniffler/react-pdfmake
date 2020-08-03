import React from 'react';

interface IPDFStyle {
  fontSize?: number;
  bold?: boolean;
  margin?: number[];
  color?: string;
  alignment?: 'justify' | 'left';
}
interface IPDFStyles {
  [x: string]: IPDFStyle;
}
interface IPDFInfo {
  title?: string;
  author?: string;
  subject?: string;
  keywords?: string;
  creator?: string;
  producer?: string;
  creationDate?: string;
  modDate?: string;
  trapped?: string;
}

interface IPDFCurrentNodePosition {
  pageNumber: number;
  pageOrientation: 'portrait' | 'landscape';
  left: number;
  right: number;
  verticalRatio: number;
  horizontalRatio: number;
}
interface IPDFNode {
  id?: string;
  headlineLevel?: number;
  text?: string;
  style?: string;
  ul?: any;
  ol?: any;
  table?: any;
  image?: any;
  qr?: any;
  canvas?: any;
  columns?: any;
  pageOrientation: 'portrait' | 'landscape';
  pageNumbers: [number, number] | [number];
  pages: number;
  stack: boolean;
  startPosition: IPDFCurrentNodePosition;
}
export interface IPDFDocument {
  compress?: boolean;
  pageSize?:
    | '4A0'
    | '2A0'
    | 'A0'
    | 'A1'
    | 'A2'
    | 'A3'
    | 'A4'
    | 'A5'
    | 'A6'
    | 'A7'
    | 'A8'
    | 'A9'
    | 'A10'
    | 'B0'
    | 'B1'
    | 'B2'
    | 'B3'
    | 'B4'
    | 'B5'
    | 'B6'
    | 'B7'
    | 'B8'
    | 'B9'
    | 'B10'
    | 'C0'
    | 'C1'
    | 'C2'
    | 'C3'
    | 'C4'
    | 'C5'
    | 'C6'
    | 'C7'
    | 'C8'
    | 'C9'
    | 'C10'
    | 'RA0'
    | 'RA1'
    | 'RA2'
    | 'RA3'
    | 'RA4'
    | 'SRA0'
    | 'SRA1'
    | 'SRA2'
    | 'SRA3'
    | 'SRA4'
    | 'EXECUTIVE'
    | 'FOLIO'
    | 'LEGAL'
    | 'LETTER'
    | 'TABLOID';
  pageOrientation?: 'landscape' | 'portrait';
  color?: string;
  styles?: IPDFStyles;
  defaultStyle?: IPDFStyle;
  info?: IPDFInfo;
  pageBreakBefore?: (
    currentNode: IPDFNode,
    followingNodesOnPage: Array<IPDFNode>,
    nodesOnNextPage: Array<IPDFNode>,
    previousNodesOnPage: Array<IPDFNode>
  ) => boolean;
}
const PDFDocument: React.SFC<IPDFDocument> = (props) => null;
export default PDFDocument;
