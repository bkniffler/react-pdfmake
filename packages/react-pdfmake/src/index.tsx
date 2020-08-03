import React from 'react';
import convert from './convert';
import { IPDFDocument } from './document';
export { default as PDFDocument } from './document';
export * from './elements';

const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');

pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface IPDFActions {
  download: () => void;
  open: () => void;
  print: () => void;
}

export const pdf = (content: React.ReactElement<IPDFDocument>): IPDFActions =>
  pdfMake.createPdf(convert(content));

export const downloadPDF = (content: React.ReactElement<IPDFDocument>) =>
  pdf(content).download();

export const printPDF = (content: React.ReactElement<IPDFDocument>) =>
  pdf(content).print();

export const openPDF = (content: React.ReactElement<IPDFDocument>) =>
  pdf(content).open();

export default pdf;
