import React, { EventHandler, FormEvent, useEffect, useState } from "react";
import Nav from "../dashboard/components/Nav";
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { AdminApiCall } from "../../global/api/admin_api_call";
import { SuperAdminApiCall } from "../../global/api/super_admin_api_call";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const privlagenames = [
  "Create Content",
  "General Review",
  "Islamic Review",
  "Age Restriction",
  "Editing Content",
  "Deleting Content",
  "User Management",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AddAdmins() {
  var token = useSelector((state: any) => state.user.user_session);
  let dispatch = useDispatch();

  const addAdmin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var body = {
      name: e.target["name"].value,
      email: e.target["email"].value,
      password: e.target["password"].value,
      privlages: privlages,
    };

    const response = await SuperAdminApiCall(
      "superadmin/admins/create",
      body,
      {
        authorization: token.accessToken,
      },
      token,
      dispatch
    );
    if (response.data.success != null) {
      alert(response.data.success);
    } else {
      alert(response.data.error);
    }
    location.href = "/superadmin/admins";
  };
  const theme = useTheme();
  const [privlages, setPrivlages] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof privlages>) => {
    const {
      target: { value },
    } = event;
    setPrivlages(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div>
      <Nav />
      <div>
        <div className="w-screen min-h-screen bg-primaryColor text-black  flex flex-col  items-center gap-2 pt-10">
          <form
            onSubmit={(e) => {
              addAdmin(e);
            }}
            className="flex flex-col  bg-white p-10 rounded-md gap-4"
          >
            <Typography>Add Admin</Typography>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              required
            />
            <TextField
              id="outlined-basic"
              label="Email@example.com"
              variant="outlined"
              name="email"
              type="email"
              required
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              required
            />
            <FormControl sx={{ width: "300px" }}>
              <InputLabel id="demo-multiple-chip-label">privlages</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={privlages}
                onChange={handleChange}
                input={
                  <OutlinedInput id="select-multiple-chip" label="privlages" />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {privlagenames.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, privlages, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained" color="success" type="submit">
              Add Admin
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
