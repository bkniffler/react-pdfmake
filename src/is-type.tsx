import React from 'react';

const isType = (child: any, Bar: any) => {
  const inst = <Bar />;
  return child.type === Bar || child.type === inst.type;
};

export default isType;
