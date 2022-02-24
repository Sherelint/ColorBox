import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Palette from "./components/Palette";
import { PalettesContext } from "./context/SeedColorsContext";
function App() {
  const { setId } = useContext(PalettesContext);

  return (
    <Routes>
      <Route exact path="/" element={<h1>PALETTE</h1>} />
      <Route
        excat
        path="/palette/:id"
        render={
          ((routerProps) => <Palette id={setId(routerProps.match.params.id)} />,
          (routerProps) => setId(routerProps.match.params.id))
        }
      />
    </Routes>
  );
}
export default App;
