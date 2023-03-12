import {
  CheckBoxOutlineBlank,
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../components/EmailRow.css";
import { selectMail } from "../features/mailSlice";

function EmailRow({ id, title, subject, desc, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        desc,
        time,
      })
    );
    navigate("/mail");
  };
  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow__Options">
        <CheckBoxOutlineBlank className="emailRow__checkbox" />

        <IconButton>
          <StarBorderOutlined />
        </IconButton>

        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>

      <h3 className="emailRow__title">{title}</h3>

      <div className="emailRow__message">
        <h4>
          {subject} <span className="emailRow__description">-{desc}</span>
        </h4>
      </div>

      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
