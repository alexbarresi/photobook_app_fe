import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { AlbumType } from "../types/Album.types";
import AlbumCard from "./AlbumCard";
import InputForm from "./InputForm";

function AlbumContainer() {
  const [Albums, setAlbums] = useState([]);
  const [Error, setError] = useState({});

  const retrieveAlbums = (userId?: number) => {
    
    const url: string =
      userId != null && userId != 0
        ? `https://localhost:7101/API/Photobook/${userId}`
        : "https://localhost:7101/API/Photobook";

    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(setAlbums(res));
      })
      .catch((err) => setError(err));
  };

  return (
    <>
      <Container>
        <Row>
          <InputForm retrieveAlbums={retrieveAlbums}></InputForm>
        </Row>
        <Row className="d-flex justify-content-center justify-content-md-start">
          {/* {Albums.length > 0
            ? Albums.map((album: AlbumType) => (
                <AlbumCard key={album.id} album={album} />
              ))
            : "Loading..."} */}

          {Albums.map((album: AlbumType) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default AlbumContainer;
