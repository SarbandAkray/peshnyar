import React, { useEffect, useState } from "react";
import Nav from "../dashboard/components/Nav";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { AdminApiCall } from "../../global/api/admin_api_call";
import { SuperAdminApiCall } from "../../global/api/super_admin_api_call";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function Admins() {
  var token = useSelector((state: any) => state.user.user_session);
  let dispatch = useDispatch();
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    getAdmins();
  }, []);

  const getAdmins = async () => {
    const admins = await SuperAdminApiCall(
      "superadmin/admins",
      {},
      {
        authorization: token.accessToken,
      },
      token,
      dispatch
    );
    setAdmins(admins.data);
  };

  return (
    <div>
      <Nav />
      <div>
        <div className="w-screen min-h-screen bg-primaryColor text-white  flex flex-col  items-center gap-2 pt-10">
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              location.href = "/superadmin/admin/create";
            }}
          >
            Add Admin
          </Button>
          <TableContainer
            component={Paper}
            sx={{ maxWidth: "50vw", marginTop: "10vh" }}
          >
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Admins</TableCell>
                  <TableCell align="center">name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Privlages</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {admins.length > 0 &&
                  admins.map((e) => (
                    <TableRow
                      key={e.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {e.name}
                      </TableCell>
                      <TableCell align="center"> {e.name}</TableCell>
                      <TableCell align="center"> {e.email}</TableCell>
                      <TableCell align="center"> {e.privlages}</TableCell>
                      <TableCell align="center">
                        {" "}
                        <div className="flex flex-col gap-2">
                          <Button
                            variant="contained"
                            color="warning"
                            onClick={() =>
                              (location.href = `/superadmin/admin/${e.id}`)
                            }
                          >
                            {" "}
                            edit
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={async () => {
                              await SuperAdminApiCall(
                                "superadmin/admin/delete",
                                { id: e.id },
                                { authorization: token.accessToken },
                                token,
                                dispatch
                              );
                              location.href = `/superadmin/admins`;
                            }}
                          >
                            delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
