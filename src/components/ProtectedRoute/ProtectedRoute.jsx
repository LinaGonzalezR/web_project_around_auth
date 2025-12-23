import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, isLoggedIn }) {
    if (isLoggedIn) { 
        return <Navigate to="/signin"  replace/>;
}
return children;
}

