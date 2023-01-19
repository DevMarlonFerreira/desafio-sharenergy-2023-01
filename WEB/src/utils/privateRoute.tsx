import { Navigate } from 'react-router-dom';
import isConnected from './isConnected';

type ProtectedRouteProps = {
    path: string;
    outlet: JSX.Element;
};

export default function PrivateRouter({ path, outlet }: ProtectedRouteProps) {
    if (isConnected()) {
        return outlet;
    } else {
        return <Navigate to={{ pathname: path }} />;
    }
};
