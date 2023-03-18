import { useEffect, useState, useRef } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResData, User } from "../interfaces/reqRes";


export const useUsers = (page = 1) => {
    const pageRef = useRef(page);
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
      handlePagination();
    }, []);
  
    const handlePagination = async () => {
      const response = await reqResApi.get<ReqResData>("/users", {
        params: {
          page: pageRef.current,
        },
      });
  
      if (response.data.data.length) {
        setUsers(response.data.data);
        pageRef.current++;
      }
    };

    return {users, handlePagination}
}
