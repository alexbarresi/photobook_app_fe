import AlbumCard from "../components/AlbumCard";
import InputForm from "../components/InputForm";
import { AlbumType } from "../dataModels/types/Album.types";

import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

const Home: React.FC = () => {
  const [Albums, setAlbums] = useState([]);
  const [Error, setError] = useState({});

  const retrieveAlbums = (userId?: number) => {
    const url: string =
      userId != null && userId > 0
        ? `https://localhost:7101/API/Photobook/${userId}`
        : "https://localhost:7101/API/Photobook";

    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) => {
        setAlbums(res);
        window.sessionStorage.setItem("Albums", JSON.stringify(res));
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    if (
      window.sessionStorage.getItem("Albums") != null &&
      window.sessionStorage.getItem("Albums") !== ""
    )
      setAlbums(JSON.parse(window.sessionStorage.getItem("Albums") as string));
  }, []);

  return (
    <Container>
      <Row>
        <InputForm retrieveAlbums={retrieveAlbums}></InputForm>
      </Row>
      <Row className="d-flex justify-content-center justify-content-md-start">
        {Albums.map((album: AlbumType) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
