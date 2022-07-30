import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import Photo from "../components/Photo";
import { PhotoType } from "../types/Photo.types";

function PhotoView() {
  const [Photos, setPhotos] = useState<PhotoType[]>([]);
  const [AlbumTitle, setAlbumTitle] = useState("");
  const location: any = useLocation();

  useEffect(() => {
    // console.log("Photos: ", location.state?.photoList);
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
            <Link to={"/"}>
              <Button className="btn btn-primary btn-lg"> Back</Button>
            </Link>
          </Col>

          <Col>
            <h2>{AlbumTitle}</h2>
          </Col>

        </Row>
        <Row className="d-flex justify-content-center justify-content-md-start">
          {Photos.map((photo: PhotoType) => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default PhotoView;
