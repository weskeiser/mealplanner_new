import { ThemeProvider } from "styled-components";
import { PageTitle } from "../../features/PageTitle";
import { Theme } from "../../styles";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <main>
        <PageTitle>Hi</PageTitle>
      </main>
    </ThemeProvider>
  );
};

export default App;
