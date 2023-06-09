import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import VidCard from "../components/VidCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Search = () => {
  const [videos, setVideos] = useState([]);
  const query = useLocation().search;

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get(`videos/search${query}`);
      setVideos(res.data);
      //   console.log(res.data);
    };

    fetchVideo();
  }, [query]);
  return (
    <Container>
      {videos.map((video) => (
        <VidCard key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Search;
