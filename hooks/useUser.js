import { useEffect, useState } from "react";
import apiInstance from "../instances/apiInstances";

function useUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getUser = async () => {
      try {
        let url = "http://localhost:8000/";
        const response = await apiInstance().get(url + "getuserdetails");
        setUser(response.data.data);
        setIsLoading(false);
      } catch (err) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    getUser();
  }, []);
  return {
    user: user,
    isLoading,
  };
}

export default useUser;
