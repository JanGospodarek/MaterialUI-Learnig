import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import { useState } from "react";
export function MuiBottomNav() {
  const [val, setVal] = useState(0);
  console.log(val);
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={val}
      onChange={(event, newValue) => {
        setVal(newValue);
      }}
    >
      <BottomNavigationAction
        label="home"
        icon={<Home></Home>}
      ></BottomNavigationAction>{" "}
      <BottomNavigationAction
        label="fav"
        icon={<Favorite></Favorite>}
      ></BottomNavigationAction>{" "}
      <BottomNavigationAction
        label="person"
        icon={<Person></Person>}
      ></BottomNavigationAction>
    </BottomNavigation>
  );
}
