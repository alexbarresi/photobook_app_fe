import { AlbumType } from "../types/Album.types";

import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";

interface Props {
  album: AlbumType;
}

const AlbumCard: React.FC<Props> = ({ album }) => {
//   console.log("album: ", album);
  
    const { photoList, title } = album;

  const navigate = useNavigate();
  const toPhotoView = () => {
    navigate("/photoView", { state: { photoList, title} });
  };

  return (
    <>
      <Card style={{ width: "16rem", margin: "2%" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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
    </>
  );
};

export default AlbumCard;
