import { Container } from "react-bootstrap";
import "./assets/app.scss";
import { Route, Routes } from "react-router";
import TodoPage from "./pages/TodoPage";
import TodosPage from "./pages/TodosPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Navigation />

      <Container className="py-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/todos/:id" element={<TodoPage />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
