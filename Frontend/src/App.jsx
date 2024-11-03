import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Components/Dashboard';
import NotFound from './Components/NotFound';
import Form from './Components/Form'
import { UserProvider, useUser } from './UserContext';
import SharedTask from './Components/ShareTask';

function AppRouter() {
  const { user, setUser } = useUser();

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard user={user} />,
    },
    {
      path: '/form',
      element: <Form setUser={setUser} />,
    },
    {
      path: '/sharedtask/:taskId',
      element: <SharedTask />,
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);

  return <RouterProvider router={appRouter} />;
}

function App() {
  return (
    <UserProvider>
      <ToastContainer />
      <AppRouter />
    </UserProvider>
  );
}

export default App;
