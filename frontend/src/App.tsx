import { axiosSingleUser } from './network/axios/axios.custom';
import { useAppSelector, useAppDispatch } from './redux/hooks'
import { userAll } from "./redux/slices/userSlice";
import User from "./component/User";

function App() {
  const user = useAppSelector((state) => state.user);  
  const dispatch = useAppDispatch();
  
  const handleClick = () => {
    axiosSingleUser()
      .then((res: any) => {
        dispatch(userAll(res.data.data));
      })
      .catch((err: any) => {
        console.error(err);
      });
  };
  return (
    <div>
      <h1>Hello!</h1>
      <button onClick={handleClick}> Click me ! </button>
      <User
        id={user.id}
        email={user.email}
        first_name={user.first_name}
        last_name={user.last_name}
        avatar={user.avatar}
      />
    </div>
  );
}
export default App;
