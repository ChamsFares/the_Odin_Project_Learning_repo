import { useParams, Link } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name ? (
        name.toLowerCase() === "popeye" ? (
          <Popeye />
        ) : name.toLowerCase() === "spinach" ? (
          <Spinach />
        ) : (
          <DefaultProfile name={name} />
        )
      ) : (
        <div>
          <h3>Welcome to the general profile page!</h3>
          <p>Please select a specific profile to view more details.</p>
          <ul>
            <li>
              <Link to="/profile/popeye">Popeye</Link>
            </li>
            <li>
              <Link to="/profile/spinach">Spinach</Link>
            </li>
            <li>Or enter any name in the URL</li>
          </ul>
        </div>
      )}
      {name && (
        <p>
          <Link to="/profile">Back to general profile page</Link>
        </p>
      )}
    </div>
  );
};

export default Profile;
