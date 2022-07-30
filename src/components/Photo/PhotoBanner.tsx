import React, { useCallback, useState } from "react";
import { Modal } from "react-bootstrap";

interface Properties {
  close: () => void;
  imageUrl: string;
  imageTitle: string;
}

const PhotoBanner: React.FC<Properties> = ({ close, imageUrl, imageTitle }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onClick = useCallback(() => {
    close();
  }, [close]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton onClick={onClick}>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imageUrl} alt={imageTitle} />
        </Modal.Body>
      </Modal>
    </>
    // <div className="invisible" />
    // <div className="photoBanner" onClick={onClick}>
    //   <Button className="btn btn-dark mb-1">close X</Button>
    //   <div>
    //     <img src={imageUrl} alt={imageTitle} />
    //   </div>
    // </div>
  );
};

export default PhotoBanner;
