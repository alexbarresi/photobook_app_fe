import { AlbumCardProps } from "../dataModels/interfaces/Props.interfaces";

import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  const { photoList, title } = album;

  const navigate = useNavigate();
  const toPhotoView = () => {
    navigate("/photoView", { state: { photoList, title } });
  };

  return (
    <Card className="main-card">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="card-title">{album.title}</Card.Title>
        <span>
          <hr />
        </span>

        <Card.Text className="card-text">
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
  );
};

export default AlbumCard;
