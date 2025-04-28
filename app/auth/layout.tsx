import { Box } from "@mui/material";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="h-[calc(100dvh-150px)] flex justify-center items-center">
      {children}
    </Box>
  );
};

export default AuthLayout;
