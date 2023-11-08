import styled from "styled-components";
import { AiFillClockCircle } from "react-icons/ai";
import { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";

const Body = () => {
  const [{ token, selectedPlaylistId }, dispatch] = useStateProvider();

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const res = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`
      );
    };
  }, [token, dispatch]);
  return <Container>Body</Container>;
};

export default Body;

const Container = styled.div``;
