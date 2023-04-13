import React from 'react';

import Hero from '../components/Hero';
import Row from '../components/Row';
import RowContainer from '../components/RowContainer/'
import requests from '../api/constants';

const Home = () => (
    <>
        <Hero />
        <RowContainer maxWidth="xl">
        <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
        <Row title={"Most Popular"} fetchUrl={requests.fetchPopular} />
        <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
        </RowContainer>
    </>
);

export default Home;