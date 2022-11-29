import { myFirebase } from "service";
import { useEffect, useState } from "react";

export const useFbAuth = () => {
  const [authUser, setAuthUser] = useState();

  useEffect(() => {
    const unsubscribe = myFirebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
      return unsubscribe; 
    });
  }, []);

  return{
    authUser,
  }
};
