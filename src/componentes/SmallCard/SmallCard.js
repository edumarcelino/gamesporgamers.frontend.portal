import React from 'react';
import { Card } from 'react-bootstrap';

const SmallCard = ({ title, image, description }) => {
  return (
    <CCard className="mb-3" style={{ maxWidth: '540px' }}>
      <CRow className="g-0">
        <CCol md={4}>
          <CCardImage src={card.image} />
        </CCol>
        <CCol md={8}>
          <CCardBody>
            <CCardTitle>{card.title}</CCardTitle>
            <CCardText>
              {card.description}
            </CCardText>
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  );
};

export default SmallCard;