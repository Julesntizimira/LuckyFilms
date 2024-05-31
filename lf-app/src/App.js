import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./layout"
import { Cinematography, Documentary, DroneVisual, ProjectDocumentation, TimeLapse } from "./videoDisplay"
import Works from "./works"
import WorkSection from "./workSection"
import { works } from "./utils"

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="works" element={<Works />}>
            <Route index element={<WorkSection container={works.index}/>}/>
            <Route path="documentary_films" element={<WorkSection container={works.documentary} />}/>
            <Route path="time_lapse" element={<WorkSection container={works.timelapse} />}/>
            <Route path="drone_visuals" element={<WorkSection container={works.drone} />}/>
            <Route path="project_documentation" element={<WorkSection container={works.documentation} />}/>
            <Route path="cinematography" element={<WorkSection container={works.cinematography} />}/>
        </Route>
        <Route path="watch/documentary" element={<Documentary />}/>
        <Route path="watch/time_lapse" element={<TimeLapse />}/>
        <Route path="watch/drone_visual" element={<DroneVisual />}/>
        <Route path="watch/project_documentation" element={<ProjectDocumentation />}/>
        <Route path="watch/cinematography" element={<Cinematography />}/>
      </Routes>
    </BrowserRouter>
  )
}