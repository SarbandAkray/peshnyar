import { useEffect, useState } from "react";
import Nav from "../home/components/Nav";
import { decodeToken } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../models/User";
import CircularProgress from "@mui/material/CircularProgress";
import { baseBackendUrl } from "../../global/api/api_url";
import LoadingButton from "@mui/lab/LoadingButton";
import { updateUserInfo } from "../../redux/reducers/userReducer";

export default function Profile() {
  let token = useSelector((state: any) => state.user.user_session.accessToken);
  let dispatch = useDispatch();
  var [user, setUser] = useState<User>(null);
  var [loadingButton, setLoading] = useState(false);
  useEffect(() => {
    var user: any = decodeToken(token);
    setUser(user);
  }, []);
  return (
    <div>
      <Nav />
      <div>
        <div className="w-screen min-h-screen bg-primaryColor text-white  flex flex-col  items-center gap-2 pt-10">
          {user == null ? (
            <CircularProgress style={{ color: "white" }} />
          ) : (
            <>
              <div className="w-52 h-52 p-2 bg-white rounded-full relative">
                <img
                  src={baseBackendUrl + user.img_url.toString()}
                  className="object-cover"
                />
              </div>
              <h1> name: {user?.name}</h1>
              <h1> email: {user?.email}</h1>
              <h1>
                created at:{" "}
                {new Date(user?.created_at.toString())
                  .toLocaleDateString()
                  .toString()}
              </h1>
              <LoadingButton
                onClick={() => {
                  setLoading(true);
                  dispatch(updateUserInfo(null));
                  setLoading(false);
                }}
                loading={loadingButton}
                className="loadingButton"
                variant="contained"
                // className="bg-red"
                color="error"
              >
                Logout
              </LoadingButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
