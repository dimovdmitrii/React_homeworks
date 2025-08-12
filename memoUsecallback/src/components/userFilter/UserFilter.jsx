import { useState, useCallback, useMemo } from "react";
import UserList from "../userList/UserList";

const userList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Klark" },
  { id: 3, name: "Chak" },
  { id: 4, name: "Bob" },
  { id: 5, name: "Max" },
];

const UserFilter = () => {
  const [filter, setFilter] = useState("");

  const filterUsers = useCallback((users, filterText) => {
    console.log("Выполнение фильрации....");
    if (!filterText) {
      return users;
    }
    return users.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, []);

  const filteredUsers = useMemo(() => {
    return filterUsers(userList, filter);
  }, [filter, filterUsers]);

  return (
    <div>
      <h1>User Filter</h1>
      <input
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter users..."
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default UserFilter;
