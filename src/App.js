import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import AppRouter from './routes';

function App() {
  return (
       <Layout>
            <AppRouter />
      </Layout>
  );
}

export default App;
