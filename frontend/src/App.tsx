import { axiosSingleUser } from './network/axios/axios.custom';
import { useAppSelector, useAppDispatch } from './redux/hooks'
import { userAll } from "./redux/slices/userSlice";

function App() {
  const user = useAppSelector((state) => state.user);  
  const dispatch = useAppDispatch();
  
  const handleClick = () => {
    axiosSingleUser()
      .then((res: any) => {
        dispatch(userAll(res.data.data));
        console.log(user);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };
  return (
    <div>
      <h1>Hello!</h1>
      <button onClick={handleClick}> Click me ! {user.email} </button>
    </div>
  );
}
export default App;
