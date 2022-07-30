import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Photo from "../components/Photo";
import { PhotoType } from "../types/Photo.types";

function PhotoView() {
  const [Photos, setPhotos] = useState<PhotoType[]>([]);
  const [AlbumTitle, setAlbumTitle] = useState("");
  const location: any = useLocation();

  const navigate = useNavigate();
  const toPhotoView = () => {
    navigate("/");
  };

  useEffect(() => {
    const photos: PhotoType[] = location.state?.photoList;
    const albumTitle: string = location.state?.title;
    setAlbumTitle(albumTitle);
    setPhotos(photos);
  }, []);

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center justify-content-md-start mb-4">
          <Col lg={2}>
            <Button onClick={toPhotoView} className="btn btn-primary btn-lg">
              Back
            </Button>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <h2 className="d-flex flex-column text-center">{AlbumTitle}</h2>
        </Row>
        <Row className="d-flex justify-content-center justify-content-lg-start">
          {Photos.map((photo: PhotoType) => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default PhotoView;
