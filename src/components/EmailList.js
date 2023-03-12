import {
  ArrowDropDown,
  ArrowLeft,
  ArrowRight,
  CheckBox,
  Inbox,
  KeyboardHide,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import "../components/EmailList.css";
import { emailColRef } from "../firebase";
import EmailRow from "./EmailRow";
import Section from "./Section";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const q = query(emailColRef, orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <CheckBox />

          <IconButton>
            <ArrowDropDown />
          </IconButton>

          <IconButton>
            <Redo />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ArrowLeft />
          </IconButton>

          <IconButton>
            <ArrowRight />
          </IconButton>

          <IconButton>
            <KeyboardHide />
          </IconButton>

          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected={true} />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={Inbox} title="Primary" color="green" />
      </div>

      <div className="emailList__list">
        {emails?.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            key={id}
            id={id}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
            title={to}
            subject={subject}
            desc={message}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
