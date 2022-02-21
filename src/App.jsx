import { useState } from "react";

import { PalettesProvider } from "./context/SeedColorsContext";
import Palette from "./components/Palette";

function App() {
  return (
    <PalettesProvider>
      <Palette />
    </PalettesProvider>
  );
}
export default App;
