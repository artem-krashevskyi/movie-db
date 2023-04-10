import { useState, useEffect } from "react";
import { Box, Container, Typography } from '@mui/material';
import styled from 'styled-components';

import { imgUrl }  from '../../request';

const RowWrapper = styled(Container)`
`

const RowHeader = styled(Typography)`
`

const PostersContainer = styled(Box)`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px 0;
    gap: 10px;
`
const Poster = styled.img`
    object-fit: contain;
    width: 100%;
    max-height: 250px;
    transition: transform .1s;
    // margin-right: 10px;

    &:hover {
      transform: scale(1.1);
    }
`

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(fetchUrl);
      const data = await request.json();
      setMovies(data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <RowWrapper>
      <RowHeader>{title}</RowHeader>
      <PostersContainer>
        {movies.map((movie) => (
          <Poster
            key={movie.id}
            src={`${imgUrl}${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </PostersContainer>
    </RowWrapper>
  );
};

export default Row;