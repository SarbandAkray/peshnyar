import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { AdminApiCall } from "../../../global/api/admin_api_call";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function DeletePopUpDialog({ open, handleClose, id }) {
  var token = useSelector((state: any) => state.user.user_session);
  var dispatch = useDispatch();
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this content?
          </DialogContentText>
          <br />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button
            onClick={async () => {
              console.log(id);
              const result = await AdminApiCall(
                "contents/delete",

                { id: id },
                {
                  authorization: token.accessToken,
                },
                token,
                dispatch
              );

              if (result.data.success != null) {
                alert(result.data.success);
                location.href = "/";
              } else {
                alert(result.data.error);
                location.href = "/";
              }
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
