import { PhotoCard } from "../dataModels/interfaces/Props.interfaces";

import { Card, Modal } from "react-bootstrap";
import { useState } from "react";

const PhotoCard: React.FC<PhotoCard> = ({ photo }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="main-card photo-card" onClick={handleShow}>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="card-title">{photo.title}</Card.Title>
          <Card.Img className="mt-auto" src={photo.thumbnailUrl} />
        </Card.Body>
      </Card>

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
