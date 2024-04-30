/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
function Profile() {
  return <div>profile page</div>;
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <div>Loading...</div>,
});
