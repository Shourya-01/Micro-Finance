/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from "./sidebar";
function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <Sidebar></Sidebar>
    </div>
  );
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <div>Loading...</div>,
});
