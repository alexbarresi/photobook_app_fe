import { AlbumCardProps } from "../dataModels/interfaces/Props.interfaces";

import { useNavigate } from "react-router-dom";
import { Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  const { photoList, title } = album;

  const navigate = useNavigate();
  const toPhotoView = () => {
    navigate("/photoView", { state: { photoList, title } });
  };

  return (
    <Col className="album-column mb-4 d-flex flex-column">
      <Card className="main-card d-flex flex-column">
        <Card.Body className="d-flex flex-column mt-auto">
          <Card.Title className="card-title">{album.title}</Card.Title>
          <span>
            <hr />
          </span>

          <Card.Text className="card-text mt-auto">
            Album Id° {album.id}
            <br />
            Quantity of Photos: {album.photoList.length}
          </Card.Text>
          <Button
            className="card-button text-light mt-auto"
            variant="secondary"
            onClick={toPhotoView}
          >
            Visualize Photos
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AlbumCard;
