import isType from './is-type';
import { PDFTable, PDFTableRow, PDFColumns } from './elements';
import PDFDocument from './document';

const convert = (element: any) => {
  if (!element) {
    return {};
  }
  if (typeof element === 'string') {
    return element;
  }
  const { children, ...props } = element.props;
  if (children) {
    if (typeof children === 'string') {
      props.text = children;
    } else if (Array.isArray(children)) {
      props.children = children.map(convert);
    } else {
      props.children = [convert(children)];
    }
  }
  if (Object.keys(props).length === 1 && props.text) {
    return props.text;
  }
  if (isType(element, PDFDocument)) {
    const { children, ...rest } = props;
    return {
      ...rest,
      content: children
    };
  }
  if (isType(element, PDFTable)) {
    const { children, style, pageBreak, pageOrientation, ...rest } = props;
    return {
      style,
      pageBreak,
      pageOrientation,
      table: {
        ...rest,
        body: children
      }
    };
  }
  if (isType(element, PDFColumns)) {
    const { children, ...rest } = props;
    return {
      ...rest,
      columns: children
    };
  }
  if (isType(element, PDFTableRow)) {
    return props.children;
  }
  return props;
};
export default convert;
