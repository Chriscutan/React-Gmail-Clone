import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "../components/SendMail.css";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "../features/mailSlice";
import { useDispatch } from "react-redux";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { emailColRef } from "../firebase";

function SendMail() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    addDoc(emailColRef, {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    })
      .then(() => dispatch(closeSendMessage()))
      .catch((err) => alert(err.message));
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>

        <Close
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To"
          {...register("to", {
            required: "Required",
          })}
        />

        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", {
            required: "Required",
          })}
        />
        <input
          name="message"
          type="text"
          className="sendMail__message"
          {...register("message", {
            required: "Required",
          })}
        />

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
