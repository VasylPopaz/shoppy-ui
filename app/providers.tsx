"use client";

import { ThemeProvider } from "@emotion/react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { darkTheme } from "./dark.theme";
import { AuthContext } from "./auth/auth-context";

interface ProviderProps {
  children: React.ReactNode;
  authenticated: boolean;
}

export const Providers = ({ children, authenticated }: ProviderProps) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        <AuthContext.Provider value={authenticated}>
          {children}
        </AuthContext.Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
