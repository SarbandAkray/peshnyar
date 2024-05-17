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

export default function EditPopUpDialog({ open, handleClose, part, id }) {
  const [update, setUpdate] = useState("");
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>change {part}</DialogTitle>

        <DialogContent>
          <DialogContentText>{part} :</DialogContentText>
          <br />
          <TextareaAutosize
            autoFocus
            required
            id="name"
            name="explain"
            cols={20}
            minRows={5}
            onChange={(e) => {
              setUpdate(e.target.value);
            }}
            placeholder="updated value...."
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              console.log(part, id, update);
            }}
          >
            update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
