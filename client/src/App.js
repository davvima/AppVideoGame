//Components
// import Nav from 'components/Nav';
// import Footer from 'components/Footer';
import AppRoutes from 'config/AppRoutes';


//Style
import "App.css";
import Nav from 'components/Nav';

function App() { 

  return(
  <>
  <Nav />
  <AppRoutes />
  {/* <Footer /> */}
  </>
  );
}

export default App;