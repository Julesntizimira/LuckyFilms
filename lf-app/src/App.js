import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./layout"
import { Cinematography, Documentary, DroneVisual, ProjectDocumentation, TimeLapse } from "./videoDisplay"

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="documentary" element={<Documentary />}/>
        <Route path="time_lapse" element={<TimeLapse />}/>
        <Route path="drone_visual" element={<DroneVisual />}/>
        <Route path="project_documentation" element={<ProjectDocumentation />}/>
        <Route path="cinematography" element={<Cinematography />}/>
      </Routes>
    </BrowserRouter>
  )
}