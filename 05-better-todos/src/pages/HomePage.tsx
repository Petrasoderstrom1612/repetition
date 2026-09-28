import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <p>HOME. If life is on fire, create a <Link to="/todos">to-do list🔥</Link></p>
    </div>
  );
};

export default HomePage;
