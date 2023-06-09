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
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { persistor } from "../redux/store";
import { logout } from "../redux/userSlice";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 20px 30px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;
  cursor: pointer;
  font-weight: 700;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 8px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #2fa6fc;
  color: #2fa6fc;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      // Logout => clear cookie
      await axios.post("/auth/logout");

      // REMOVE THE PERSISTOR
      // persistor.pause() => Pause the persistence process, make localStorage to be eligible for change
      // persistor.flush() => kill any pending state changes
      // persistor.purge() => remove any persisted state from storage

      persistor.pause();
      await persistor.flush();
      await persistor.purge();

      // Logout => clear user data from redux store
      dispatch(logout());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={CloneTube} /> CloneTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
        </Link>
        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
        </Link>
        <Hr />
        <Item>
          <VideoLibraryOutlined />
          Library
        </Item>
        <Item>
          <HistoryOutlined />
          History
        </Item>

        {/* Hide button if user is login */}
        {!currentUser && (
          <>
            <Hr />
            <Login>
              Sign in to like videos, comment, and subscribe.
              <Link to="login" style={{ textDecoration: "none" }}>
                <Button>
                  <AccountCircleOutlined />
                  SIGN IN
                </Button>
              </Link>
            </Login>
          </>
        )}
        <Hr />
        <Title>BEST OF CLONETUBE</Title>
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
        <Hr />

        <Item onClick={handleLogout}>
          <LogoutIcon />
          Logout
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

        {/* When click ==> toogle darkMode */}
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlined />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
