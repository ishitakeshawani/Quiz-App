import { Navigate } from "react-router-dom";

type RequireAuthProps = {
  children: JSX.Element;
  isLoggedIn: boolean;
}


export function RequireAuth({ children, isLoggedIn }: RequireAuthProps) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}
