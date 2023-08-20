// Layout Component
import CmsHeader from './layouts/cms-header';
import HomePage from './pages/home/home-page';
import DetailPage from './pages/home/detail-page';

// CSS
import "./assets/styles/bootstrap.min.css";
import "./assets/styles/elegant-icons.css";
import "./assets/styles/font-awesome.min.css";
import './assets/styles/style.css';

//Library
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/home",
      element: <HomePage />,
    },

    {
      path: "/detail",
      element: <DetailPage />,
    },
  ])

  return (
    <div className="App">
      <CmsHeader></CmsHeader>
      
      <RouterProvider router={router} />

      {/* Footer Section Begin */}
      <footer class="footer">
          <div class="page-up">
              <a href="#" id="scrollToTopButton"><span class="arrow_carrot-up"></span></a>
          </div>
          <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="footer__logo">
                        <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="footer__nav">
                        <ul>
                            <li class="active"><a href="./index.html">Homepage</a></li>
                            <li><a href="./categories.html">Categories</a></li>
                            <li><a href="./blog.html">Our Blog</a></li>
                            <li><a href="/">Contacts</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="/" target="_blank">Adjie Wijaya Kusuma</a></p>

                  </div>
              </div>
          </div>
      </footer>
      {/* Footer Section End */}

      {/* Search model Begin */}
      <div class="search-model">
        <div class="h-100 d-flex align-items-center justify-content-center">
            <div class="search-close-switch"><i class="icon_close"></i></div>
            <form class="search-model-form">
                <input type="text" id="search-input" placeholder="Search here....."/>
            </form>
        </div>
      </div>
      {/* Search model end */}
    </div>
  );
}

export default App;
