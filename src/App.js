import react, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Input,
  Typography
} from "@mui/material";

import { Search } from "./components/Search";
import { CardList } from "./components/CardList";

import "./styles.css";

const API_URL = `https://8b3kdsuglk.execute-api.us-east-1.amazonaws.com/production/location/search`;

export default function App() {
  const [loading, setLoading] = useState(false);
  const [cardList, setCardList] = useState([]);

  const fetchCards = async (keyword, location) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${API_URL}?keyword=${keyword}&address=${location}`
      );
      const json = await res.json();
      const result = json.result;
      setCardList(result || []);
      console.log(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Grid container>
      <Search search={fetchCards} />
      {loading && "Loading..."}
      <CardList cardList={cardList} />
    </Grid>
  );
}
