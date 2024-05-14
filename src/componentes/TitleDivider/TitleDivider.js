import React from 'react';
import { Row } from 'react-bootstrap';
import './TitleDivider.css';

const TitleDivider = ({ title, icon, fontSize }) => {
  const titleStyle = {
    fontSize: fontSize
  };

  return (
    <Row className="title-divider-row">
      <hr className="title-divider-line" />
      <h2 className="title-left" style={titleStyle}>
        {icon} {title}
      </h2>
      <hr className="title-divider-line" />
    </Row>
  );
};

export default TitleDivider;