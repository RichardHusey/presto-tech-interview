import react, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Input,
  Typography,
  TextField
} from "@mui/material";
export const Search = ({ search }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const clickSearch = () => {
    if (keyword === "" && location === "") {
      alert("You must type keyword or location!");
      return false;
    }
    search(keyword, location);
    setKeyword("");
    setLocation("");
  };
  return (
    <Grid container item xs={12} sm={12} md={12}>
      <Grid item xs={12} sm={12} md={12}>
        <TextField
          id="keyword"
          label="Keyword : "
          variant="standard"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <TextField
          id="location"
          label="Location : "
          variant="standard"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Grid>

      <Button
        style={{ marginTop: "20px" }}
        variant="outlined"
        onClick={clickSearch}
      >
        Search
      </Button>
    </Grid>
  );
};
