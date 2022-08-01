import { PhotoCardProps } from "../dataModels/interfaces/Props.interfaces";

import { Card, Col, Modal } from "react-bootstrap";
import { useState } from "react";

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col className="mb-4 d-flex justify-content-start">
        <Card className="main-card photo-card d-flex justify-content-start mt-auto" onClick={handleShow}>
          <Card.Body className="d-flex flex-column justify-content-start">
            <Card.Title className="card-title">{photo.title}</Card.Title>
            <Card.Img className="mt-auto" src={photo.thumbnailUrl} />
          </Card.Body>
        </Card>
      </Col>
      <Modal show={show} size="lg" onHide={handleClose} keyboard={false}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <img src={photo.url} alt={photo.title} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PhotoCard;
