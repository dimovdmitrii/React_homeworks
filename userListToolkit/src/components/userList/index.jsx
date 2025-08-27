import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/userSlice";

const UserList = () => {
  const users = useSelector(selectUsers);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default UserList;
