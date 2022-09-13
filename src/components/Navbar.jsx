/** @format */

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Sidesearch } from "./";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "linear-gradient(to right, #000, red)",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
    <Sidesearch />
  </Stack>
);

export default Navbar;
