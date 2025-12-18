
import { useStore } from './store/Store'
import UserProfile from './UserProfile';

const App = () => {
  const {count, decrement, increment,reset} = useStore();
  return (
    <div>
      <h1>hello dev{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <UserProfile />
    </div>
  )
}

export default App
