import React from "react";
import { useStyles } from "../App";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ user }) => {
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        background: "red",
      }}
    >
      <h1>asdlfknaslk</h1>
    </div>
  );
};

export default UserProfile;
