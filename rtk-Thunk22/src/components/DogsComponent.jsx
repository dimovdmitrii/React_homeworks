import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDogs } from "../redux/thunks";

function DogsComponent() {
  const dispatch = useDispatch();
  const { data: dogsList, status, error } = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(fetchDogs());
  }, []);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error</p>;

  return (
    <>
      <h1>Dog Breeds</h1>
      <ul>
        {dogsList.map(({ name, breed_group }) => (
          <li>
            <h3>{name}</h3>
            <p>{breed_group}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
export default DogsComponent;
