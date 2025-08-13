import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Users from './Users'

function App() {
  function handle() {
    alert('Btn Clickd')
  }
  const handle2 = () =>{
    alert('clickd 2')
  }
  const addToFour = (num) =>{
    alert(num + 4)
  }
  return (
    <>  
      <h1>Explore React Core Concepts Part2</h1> 
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handle}> Click Me</button>
      <button onClick={handle2}> Click Me2</button>
      <button onClick={() => alert('clickd 3')}> Click Me 3</button>
      <button onClick={() => addToFour(22)}> Click Me 4</button>
    </>
  )
}

export default App
