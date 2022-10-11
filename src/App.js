import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
{
  path: '/', 
  element: <Main></Main>,
  children: [
    {
      path: '/',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Home></Home>,
    },
    {
    path: '/home',
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    element: <Home></Home>,
    },
    {
      path: '/statistics',
      element: <Statistics></Statistics>,
    },

    {
      path: '/blog',
      element: <Blog></Blog>,
    },
    {
      path: '/quiz/:quizId',
      loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
      element: <QuizDetails></QuizDetails>,
    },
    {
      path: '*',
      element:<Error></Error>
    }

  ]
}
  ])
  return (
    <div className="App">
      <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;
