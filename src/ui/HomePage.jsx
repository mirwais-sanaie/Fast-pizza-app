import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { getName } from "../features/user/userSlice";

function Home() {
  const userName = useSelector(getName);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!userName ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue ordering
        </Button>
      )}
    </div>
  );
}

export default Home;
