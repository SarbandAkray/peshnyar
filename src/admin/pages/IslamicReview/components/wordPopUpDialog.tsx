import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React, { useState } from "react";

export default function WordPopUpDialog({
  open,
  handleClose,
  index,
  value,
  islamicExplenation,
  setIslamicExplenation,
}) {
  const [explaination, setExplanation] = useState("");
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Give details</DialogTitle>
        <DialogContent>
          <DialogContentText>{value} :</DialogContentText>
          <br />
          <TextareaAutosize
            autoFocus
            required
            id="name"
            name="explain"
            cols={20}
            minRows={5}
            onChange={(e) => {
              setExplanation(e.target.value);
            }}
            placeholder="word description .. "
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              var isin =
                islamicExplenation != null
                  ? islamicExplenation.some((item) => item.id === index)
                  : false;
              if (isin) {
                setIslamicExplenation((islamicExplenation) =>
                  islamicExplenation.map((item) =>
                    item.id === index ? { ...item, value: explaination } : item
                  )
                );
              } else {
                setIslamicExplenation([
                  ...islamicExplenation,
                  { id: index, value: value, explaination: explaination },
                ]);
              }
              handleClose();
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
