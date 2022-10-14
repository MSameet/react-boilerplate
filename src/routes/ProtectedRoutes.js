import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const ProtectedRoutes = ({ children }) => {
  return children;
};
