import { useEffect, useState, useRef } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResData, User } from "../interfaces/reqRes";

export const useUsers = (page = 0) => {
  const isPagesLimit = useRef(false);
  const pageRef = useRef(page);
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    getNextPage();
  }, []);

  const getUsersData = async () => {
    const response = await reqResApi.get<ReqResData>("/users", {
      params: {
        page: pageRef.current,
      },
    });
    return response;
  };

  const getNextPage = async () => {
    if (!isPagesLimit.current) {
      pageRef.current++;
      const response = await getUsersData();
      isPagesLimit.current = response.data.total_pages === pageRef.current;
      setUsers(response.data.data);
    }
  };

  const getPrevPage = async () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      const response = await getUsersData();
      isPagesLimit.current = response.data.total_pages === pageRef.current;
      setUsers(response.data.data);
    }
  };

  return { users, getNextPage, getPrevPage };
};
