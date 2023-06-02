import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VidCard from "../components/VidCard";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  // console.log(type);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`/videos/${type}`);
        console.log(res.data);
        setVideos(res.data);
      } catch (err) {
        console.log(err.response.data);
        setError(err.response.data);
      }
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <VidCard key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
