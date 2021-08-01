import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userData, setUserData] = useState({});

  async function getUserData() {
    let access_token = Cookies.get('access_token');
    let data = {
      headers: {
        Authorization: 'Bearer ' + access_token,
      },
    };

    fetch('https://api.spotify.com/v1/me', data)
      .then((response) => response.json())
      .then((data) =>
        setUserData({ userDisplayName: data.display_name, username: data.id }),
      );
  }

  useEffect(() => {
    getUserData();
  });

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
