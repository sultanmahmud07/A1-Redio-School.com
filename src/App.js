import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import CardDetails from './component/CardDetails/CardDetails';
import Home from './component/Home/Home';
import Statastics from './component/Statastics/Statastics';
import Layout from './layout/Layout';
import Topics from './Topics/Topics';

function App() {
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/topics',
          loader: async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>
        },
        {
          path: '/topics/:topicId',
          loader: async ({ params }) =>{
            // console.log(params.topicId)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <CardDetails></CardDetails>
        },
        {
          path: '/statastics',
          element: <Statastics></Statastics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <div>This rout not a Founded!!</div>
        }
      ]
    },
   
   
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
