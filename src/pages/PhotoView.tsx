import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { AlbumType } from "../types/Album.types";
import AlbumCard from "../components/AlbumCard";
import InputForm from "../components/InputForm";

function PhotoView() {
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
        <Row className="d-flex justify-content-center justify-content-md-start">
          Photo View Page
        </Row>
      </Container>
    </>
  );
}

export default PhotoView;
