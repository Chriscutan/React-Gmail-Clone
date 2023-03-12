import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import "../components/Sidebar.css";
import { openSendMessage } from "../features/mailSlice";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        startIcon={<Add fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>

      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={Star} title="Starred" number={65} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={10} />
      <SidebarOption Icon={LabelImportant} title="Important" number={4} />
      <SidebarOption Icon={NearMe} title="Sent" number={30} />
      <SidebarOption Icon={Note} title="Drafts" number={20} />
      <SidebarOption Icon={ExpandMore} title="More" number={15} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>

          <IconButton>
            <Duo />
          </IconButton>

          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
