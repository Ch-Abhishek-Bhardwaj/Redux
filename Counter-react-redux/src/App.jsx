import Header from "./Components/Header";
import DisplatCounter from "./Components/DisplatCounter";
import Container from "./Components/Container";
import Controls from "./Components/Controls";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {

  return (
    
     <center className="px-4 py-5 my-5 text-center"> 
      <Container>
        <Header/> 
        <div className="col-lg-6 mx-auto">
          <DisplatCounter/>
          <Controls/> </div> 
          </Container>
    </center>
      

  )
}

export default App
