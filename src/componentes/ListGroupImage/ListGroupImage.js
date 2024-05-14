import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ListGroupImage = ({ analyses }) => {
    return (
        <Container >
            <ListGroup as="ol" >
                {analyses.map((analysis, index) => (

                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        key={index}
                        style={{backgroundColor:'black', height: '166px'}}
                    >
                        <Container>
                            <Row>
                                <Col lg={2}>
                                    <Image src={analysis.urlImage} fluid width={90} />
                                </Col>
                                <Col lg={9}>
                                    <Row>
                                        <h6 style={{ textAlign: 'left', color:'white' }}>
                                            {analysis.title}
                                        </h6>
                                    </Row>
                                    <Row>
                                        <h6 style={{ textAlign: 'left', fontSize: '12px' , color:'white'}}>
                                            Descrição: {analysis.description}
                                        </h6>
                                    </Row>
                                    <Row>
                                        <h6 style={{ textAlign: 'left', fontSize: '12px', color:'white' }}>
                                            Plataformas: {analysis.platform}
                                        </h6>
                                    </Row>
                                    <Row>
                                        <h6 style={{ textAlign: 'left', fontSize: '12px' , color:'white'}}>
                                            Data de Lançamento: {analysis.releaseDate}
                                        </h6>
                                    </Row>
                                </Col>
                                <Col lg={1}>
                                    <Row>
                                        <h6 style={{ textAlign: 'right' , color:'white'}}>
                                            Nota
                                        </h6>
                                    </Row>
                                    <Row>
                                        <h6 style={{ textAlign: 'right', fontSize: '26px', fontWeight: 'bold' , color:'white'}}>
                                            {analysis.average}
                                        </h6>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}

export default ListGroupImage;