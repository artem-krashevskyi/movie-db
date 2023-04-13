import React from 'react';
import { useState, useEffect } from "react";
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';

import requests from "../../api/constants";

const HeaderWrapper = styled(Container)`
    display: flex !important;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 25px;

    // h2 {
    //     font-weight: bold;
    // }
`;

const Hero = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(requests.fetchTrending);
      const data = await request.json();
      setMovie(
        data.results[
          Math.floor(Math.random() * data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  const Header = styled.header`
    width: 100%;
    min-height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}");
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

  return (
    <Header>
        <HeaderWrapper maxWidth="lg">
            <Typography variant="h4" component="h2">
                {movie?.title}
            </Typography>
            <Typography variant="body1" component="p">
                {movie?.overview}
            </Typography>
        </HeaderWrapper>
    </Header>
  );
};

export default Hero;