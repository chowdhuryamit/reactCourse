import Chai from "./Chai"

function App() {
  const username="amit chowdhury";

  return (
    // <h1>hello react||starting react course</h1> return only one element to do that we use fragment <></>
    <>
    <Chai/>
    <h1>fragmentation</h1>
    <h2>using fragmentaion we send multiple element {username}</h2>
    </>
  )
}

export default App
