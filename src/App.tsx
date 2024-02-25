import { Toaster } from "react-hot-toast";
import Container from "./components/ui/Container";
import { Navbar } from "./components/ui/Navbar";
import { Tabs } from "./components/ui/Tabs";

function App() {
  return (
    <Container>
      <Navbar />
      <Tabs />
      <Toaster/>
    </Container>
  );
}

export default App;
