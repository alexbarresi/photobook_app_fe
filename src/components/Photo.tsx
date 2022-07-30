import { PhotoType } from "../types/Photo.types";
import Image from "react-bootstrap/Image";
import { Card } from "react-bootstrap";

interface Props {
  photo: PhotoType;
}

const Photo: React.FC<Props> = ({ photo }) => {
  return (
    <>
      <Card style={{ width: "16rem", margin: "2%" }}>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="card-title">{photo.title}</Card.Title>
          <Card.Img className="mt-auto" variant="bottom" src={photo.thumbnailUrl} />
        </Card.Body>
      </Card>
    </>
  );
};

export default Photo;
