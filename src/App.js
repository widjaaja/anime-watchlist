import CmsHeader from './layouts/cms-header';

import HomePage from './pages/home/home-page';

// Bootstrap CSS
import "./assets/styles/bootstrap.min.css";
// Bootstrap Bundle JS
// import "./assets/js/bootstrap.bundle.min";
import './assets/styles/style.css';


function App() {
  return (
    <div className="App">
      <CmsHeader></CmsHeader>

      {/* <!-- Product Section Begin --> */}
      <HomePage></HomePage>
      {/* <!-- Product Section End --> */}
    </div>
  );
}

export default App;
