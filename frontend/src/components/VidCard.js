import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";

const Container = styled.div`
  width: ${(props) => props.type !== "small" && "360px"};
  margin-bottom: ${(props) => (props.type === "small" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "small" && "flex"};
  /* background-color: red; */
  gap: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "small" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => (props.type === "small" ? "0px" : "16px")};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "small" && "none"};
`;

const Text = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 10px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const VidCard = ({ type, video }) => {
  const [channel, setChannel] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const res = await axios.get(`/users/find/${video.userId}`);
        console.log(res.data);
        setChannel(res.data);
      } catch (err) {
        console.log(err.response.data);
        setError(err.response.data);
      }
    };
    fetchChannel();
  }, [video.userId]);
  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        {/* Video Thumbnail */}
        <Image type={type} src={video.imgUrl} />
        <Details type={type}>
          {/* Channel avatar */}
          <ChannelImage type={type} src={channel.img} />
          <Text>
            {/* Video name */}
            <Title>{video.title}</Title>
            {/* Channel name */}
            <ChannelName>{channel.name}</ChannelName>
            {/* Views - times */}
            <Info>
              {video.views} views ⦁ {format(video.createdAt)}{" "}
            </Info>
          </Text>
        </Details>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </Container>
    </Link>
  );
};

export default VidCard;
