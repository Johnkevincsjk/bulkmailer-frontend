import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FirstPage from './Frontend/Mailer/FirstPage/FirstPage';
import Nav from './Frontend/Mailer/NavBar/Nav';
import { Route, Routes } from 'react-router-dom';
import SecondPage from './Frontend/Mailer/SecondPage/SecondPage';
import Login_page from './Frontend/Login_page/Login_page';
import Signin from './Frontend/Signin_Page/Signin';
import Feedback from './Frontend/Mailer/Feedback/Feedback';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className='body'>

      <section>
        <Routes>

          <Route path='/' Component={Login_page} />
          <Route path='/Singnin' Component={Signin} />
          <Route path='/FirstPage' Component={FirstPage} />
          <Route path='/SecondPage' Component={SecondPage} />
          <Route path='/Feedback' Component={Feedback} />
        </Routes>
      </section>
      <ToastContainer />
    </div>






  );

}



{/* <Route path='/FirstPage' Component={() => ( 
        <Layout>
          <FirstPage />
        </Layout>
      )} /> */} // this comes inside the component 



// The below mentioned code is used to hide nav bar in log in page

// function Layout(props) {
//   return (
//     <div className='body'>

//       <Nav />
//       <section>
//         {props.children}

//       </section>


//     </div>
//   )
// }



export default App;
