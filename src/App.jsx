
import './App.css'
import Bottles from './components/Bottle/Bottles'
import Watch from './components/Watch/Watch'

function App() {

//   const watches = [
//     {id: 1 , name: 'Apple watch' , price: 500},
//     {id: 2 , name: 'Samsung watch' , price: 200},
//     {id: 3 , name: 'MI watch' , price: 100}
// ] 

  return (
    <>
      <h1>Vite + React</h1>
      {/* {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      } */}
      <Bottles></Bottles>
    </>
  )
}

export default App
