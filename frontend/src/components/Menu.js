import React from "react";
import styled from "styled-components";
import CloneTube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlined from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlined from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlined from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlined from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlined from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlined from "@mui/icons-material/MovieOutlined";
import ArticleOutlined from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlined from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import FlagOutlined from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlined from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlined from "@mui/icons-material/SettingsBrightnessOutlined";

const Container = styled.div`
  flex: 1;
  background-color: #0f0f0f;
  color: #f1f1f1;
  height: 100vh;
  font-size: 14px;
`;

const Wrapper = styled.div`
  padding: 20px 30px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={CloneTube} /> CloneTube
        </Logo>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Item>
          <VideoLibraryOutlined />
          Library
        </Item>
        <Item>
          <HistoryOutlined />
          History
        </Item>
        <Item>
          <LibraryMusicOutlined />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlined />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlined />
          Gaming
        </Item>
        <Item>
          <MovieOutlined />
          Movies
        </Item>
        <Item>
          <ArticleOutlined />
          News
        </Item>
        <Item>
          <LiveTvOutlined />
          Live
        </Item>
        <Item>
          <AccountCircleOutlined />
          Profile
        </Item>
        <Item>
          <SettingsOutlined />
          Settings
        </Item>
        <Item>
          <FlagOutlined />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlined />
          Help
        </Item>
        <Item>
          <SettingsBrightnessOutlined />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
