import React from "react";
import "../components/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Apps, ArrowDropDown, Notifications } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signout = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://imgs.search.brave.com/lnn-35ZJ1lvLz484-7sQXfH2t7WDzm48QruTkL6pda0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzAzL2dtYWlsLWxv/Z28tMC5wbmc"
          alt=""
          className="header__leftLogo"
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDown className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>

        <IconButton>
          <Notifications />
        </IconButton>

        <IconButton onClick={signout}>
          <Avatar src={user?.photo} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
