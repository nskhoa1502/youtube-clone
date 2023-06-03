import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VidCard from "./VidCard";

const Container = styled.div`
  flex: 2;
`;

const Recommendation = ({ tags }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`/videos/tag?tags=${tags.join(",")}`);
        setVideos(res.data);
      } catch (err) {}
    };
    fetchVideos();
  }, [tags]);
  return (
    <Container>
      {!videos && <div>No Video</div>}
      {videos.map((video) => (
        <VidCard key={video._id} video={video} type="small" />
      ))}
    </Container>
  );
};

export default Recommendation;
