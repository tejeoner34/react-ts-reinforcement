import { useUsers } from "../hooks/useUsers";
import { User } from "../interfaces/reqRes";

export const Users = () => {
  const {users, getNextPage, getPrevPage} = useUsers();

  const renderitem = (user: User) => (
    <tr key={user.id.toString()}>
      <td>
        <img src={user.avatar} alt={user.avatar} />
      </td>
      <td>{user.first_name}</td>
      <td>{user.email}</td>
    </tr>
  );

  return (
    <div>
      <h3>Users</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map(renderitem)}</tbody>
      </table>
      <button onClick={getNextPage} className="btn btn-primary">
        Next users
      </button>
      <button onClick={getPrevPage} className="btn btn-primary">
        Prev users
      </button>
    </div>
  );
};
