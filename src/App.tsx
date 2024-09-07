import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className=" text-9xl">a</div>
      <Button onClick={() => console.log("clicked")}> click me</Button>
    </>
  );
}

export default App;
