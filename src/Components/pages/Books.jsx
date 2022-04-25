import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr)
// add required style here
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    const getData = async ()=>{
      try{
         let res = await fetch(`http://localhost:8080/books`)
         let data = await res.json()
         setData(data)
      }catch(error){
        console.log(error)
      }
    }
    getData()
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
           {data.map((elem)=>(
            <BookCard isbn={elem.isbn} thumbnailUrl={elem.thumbnailUrl} id={elem.id} title = {elem.title} pageCount={elem.pageCount} />
            // id, title, isbn, pageCount, thumbnailUrl
         ))} 
      </Grid>
    </>
  );
};
export default Books;
