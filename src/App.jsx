import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Tracker from './Pages/Tracker';
import { action as trackerLoader } from './features/transaction/Transaction';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Tracker />,
      action: trackerLoader,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
