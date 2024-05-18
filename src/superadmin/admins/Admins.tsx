import React, { useEffect, useState } from "react";
import Nav from "../dashboard/components/Nav";
import { Button } from "@mui/material";
import { AdminApiCall } from "../../global/api/admin_api_call";
import { SuperAdminApiCall } from "../../global/api/super_admin_api_call";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

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
          {admins.length > 0 && admins.map((e) => <p>{e.name}</p>)}
        </div>
      </div>
    </div>
  );
}
