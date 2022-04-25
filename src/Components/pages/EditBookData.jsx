import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";

// add style for form
export const Form = styled.form`
`;
// add style for text area
export const Textarea = styled.textarea`

`;

export const EditBookData = () => {
    const [thumbnail, setThumbnail] = useState("");
    const [description, setDescription] = useState("");
    const params = useParams();
    let navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault();
    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    // on successfull request navigate to previous page

    try {
      let res = fetch(`http://localhost:8080/books/${params.id}`,{
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          thumbnail,
          description,
        }),
      });

      navigate("/books");
    } catch (error) {

      console.log(error);
      
    }
  };

  return (
    <>

      <Form onSubmit={handleUpdate}>
        <Input
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />

        <Textarea
          data-testid="update-form-description"
          placeholder="Update long Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>

    </>
  );
};
