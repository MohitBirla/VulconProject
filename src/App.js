import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Project from './components/Home/project';
import { AuthProvider } from './providers/AuthProvider';
function App() {
  return (
    <AuthProvider>
      <Project />
    </AuthProvider >
  );
}

export default App;
