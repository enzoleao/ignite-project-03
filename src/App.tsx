import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
      <h1>ola</h1>
      </div>
    </ThemeProvider>
  )
}

