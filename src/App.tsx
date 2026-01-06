import { config } from "./theme";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
// Component
import Router from "@/router";
import Toaster from "./components/ui/toaster";
// Theme

const system = createSystem(defaultConfig, config);

function App() {
  return (
    <ChakraProvider value={system}>
      <Toaster />
      <Router />
    </ChakraProvider>
  );
}

export default App;
