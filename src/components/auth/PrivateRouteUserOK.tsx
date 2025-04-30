import { Navigate, RootState, useLocation, useSelector } from '@/utils/alias';

interface PrivateRouteProps {
  children: React.ReactNode;
  requiredPermissions?: string[];
}

export const PrivateRouteUserOK: React.FC<PrivateRouteProps> = ({
  children,
}) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const location = useLocation();

  if (user) { return <Navigate to="/dashboard" state={{ from: location }} replace />; }

  return <>{children}</>;
};

export default PrivateRouteUserOK;
