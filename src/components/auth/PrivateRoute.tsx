import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ErrorPage } from '../../pages/ErrorPage';

interface PrivateRouteProps {
  children: React.ReactNode;
  requiredPermissions?: string[];
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  requiredPermissions = []
}) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if user has required permissions
  if (requiredPermissions.length > 0) {
    const hasPermission = requiredPermissions.every(permission =>
      user.permissions?.includes(permission)
    );

    if (!hasPermission) {
      return (
        <ErrorPage
          title="Error 403"
          message="You do not have permission to access this page"
        />
      );
    }
  }

  return <>{children}</>;
};

export default PrivateRoute;
