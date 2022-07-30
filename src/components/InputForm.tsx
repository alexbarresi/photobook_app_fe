import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

interface InputFormProps {
  retrieveAlbums: (a: number) => void;
}

function InputForm({ retrieveAlbums }: InputFormProps) {
  const [userId, setUserId] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    value == null || value == ""
      ? setDisableButton(true)
      : setDisableButton(false);
    setUserId(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {    
    e.preventDefault();
    resetInput();

    const nativeEvent = e.nativeEvent as any;
    const currentUserId: number =
      nativeEvent.submitter.value === "get-all-albums" ? 0 : Number(userId);

    retrieveAlbums(currentUserId);
  };

  const resetInput = () => {
    setUserId("");
    setDisableButton(true);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row md={5}>
        <Col xs={8} md={3}>
          <Form.Group controlId="formSearchById">
            <Form.Label>Search Albums by user ID</Form.Label>
            <Form.Control
              type="number"
              min="1"
              placeholder="Enter user ID"
              value={userId}
              onChange={onChange}
            />
          </Form.Group>
        </Col>
        <Col xs={3} md={1} className="input-button">
          <Button variant="success" type="submit" disabled={disableButton}>
            Search
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={2} xs={4} className="input-button">
          <Button value="get-all-albums" variant="primary" type="submit">
            Retrieve all albums
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default InputForm;
