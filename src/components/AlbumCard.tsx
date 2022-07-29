import { Button } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import { AlbumType } from "../types/Album.types";

interface Props {
  album: AlbumType;
}

const AlbumCard: React.FC<Props> = ({ album }) => {
  return (
    <>
    {console.log(album.photoList)}
      <Card style={{ width: "16rem", margin: "2%" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body className="d-flex flex-column">
          <Card.Title className="card-title">{album.title}</Card.Title>
          <Card.Text className="card-text">
            Album Id° {album.id}
            <span><hr /></span>
            Photos quantity: {album.photoList.length} 
          </Card.Text>
          <Button className="card-button text-light mt-auto" variant="secondary">Visualize Photos</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default AlbumCard;
