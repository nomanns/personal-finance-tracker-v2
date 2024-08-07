import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error-page';
import SignInSignUp from '../pages/signin-signup';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SignInSignUp />,
        errorElement: <ErrorPage />
    }
])

export default router