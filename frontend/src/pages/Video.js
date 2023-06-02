import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
import VidCard from "../components/VidCard";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { fetchSuccess } from "../redux/videoSlice";
import { format } from "timeago.js";
import ThumbUp from "@mui/icons-material/ThumbUp";
import ThumbDown from "@mui/icons-material/ThumbDown";
import { like, dislike, resetDislike, resetLike } from "../redux/videoSlice";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
  /* background-color: red; */
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
  background-color: blue;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: #fff;
  border: none;
  border-radius: 4px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);

  const { currentVideo } = useSelector((state) => state.video);

  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];
  // console.log(path);

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        setChannel(channelRes.data);

        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchVideo();
  }, [path, dispatch]);

  const handleLike = async () => {
    if (
      currentUser &&
      currentVideo &&
      currentVideo.likes?.includes(currentUser._id)
    ) {
      // User has already liked the video, dispatch resetLike
      await axios.put(`/users/reset-like/${currentVideo._id}`);
      dispatch(resetLike(currentUser._id));
    } else {
      // User hasn't liked the video, dispatch like
      await axios.put(`/users/like/${currentVideo._id}`);
      dispatch(like(currentUser._id));
    }
  };

  const handleDislike = async () => {
    if (
      currentUser &&
      currentVideo &&
      currentVideo.dislikes?.includes(currentUser._id)
    ) {
      // User has already disliked the video, dispatch resetDislike
      await axios.put(`/users/reset-like/${currentVideo._id}`);
      dispatch(resetDislike(currentUser._id));
    } else {
      // User hasn't disliked the video, dispatch dislike
      await axios.put(`/users/dislike/${currentVideo._id}`);
      dispatch(dislike(currentUser._id));
    }
  };

  console.log(currentVideo);
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="778"
            src="https://www.youtube.com/embed/ES3VyWNBCKY"
            title="Why Chris Will Soon Be A Nightmare For MrBeast | Asmongold Reacts"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>
            {currentVideo?.views} views ⦁ {format(currentVideo?.createdAt)}
          </Info>
          <Buttons>
            {currentUser && currentVideo && (
              <>
                {" "}
                <Button onClick={handleLike}>
                  {currentVideo.likes?.includes(currentUser._id) ? (
                    <ThumbUp />
                  ) : (
                    <ThumbUpOutlinedIcon />
                  )}
                  {currentVideo.likes?.length}
                </Button>
                <Button onClick={handleDislike}>
                  {currentVideo.dislikes?.includes(currentUser._id) ? (
                    <ThumbDown />
                  ) : (
                    <ThumbDownOutlinedIcon />
                  )}
                  {currentVideo.dislikes?.length}
                </Button>
              </>
            )}
            {!currentUser && currentVideo && (
              <>
                <Button>
                  <ThumbUpOutlinedIcon />
                  {currentVideo.likes?.length}
                </Button>
                <Button>
                  <ThumbDownOutlinedIcon />
                  {currentVideo.dislikes?.length}
                </Button>
              </>
            )}
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channel?.img} />
            <ChannelDetails>
              <ChannelName>{channel?.name}</ChannelName>
              <ChannelCounter>
                {channel?.subscribers} Subscribers
              </ChannelCounter>
              <Description>{currentVideo?.desc}</Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />

        <Comments />
      </Content>
      {/* <Recommendation>
        <VidCard type="small" />
        <VidCard type="small" />
        <VidCard type="small" />
        <VidCard type="small" />
        <VidCard type="small" />
        <VidCard type="small" />
        <VidCard type="small" />
        <VidCard type="small" />
      </Recommendation> */}
    </Container>
  );
};

export default Video;
