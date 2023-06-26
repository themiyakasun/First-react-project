import React from 'react';
import {
  Navbar,
  Hero,
  Collection,
  Creators,
  Categories,
  Nfts,
  Highlights,
  Getstarted,
  Inbox,
} from '../components';

function Home() {
  return (
    <>
      <Hero />
      <Collection />
      <Creators />
      <Categories />
      <Nfts />
      <Highlights />
      <Getstarted />
      <Inbox />
    </>
  );
}

export default Home;
