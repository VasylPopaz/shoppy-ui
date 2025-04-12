"use client";

import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import { useActionState } from "react";

import { signin } from "./signin";

const Signin = () => {
  const [state, formAction] = useActionState(signin, { error: "" });

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        <TextField
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          helperText={state.error}
          error={!!state.error}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          helperText={state.error}
          error={!!state.error}
        />
        <Button type="submit" variant="contained">
          Sign in
        </Button>
        <Link component={NextLink} href="/auth/signup" className="self-center">
          Signup
        </Link>
      </Stack>
    </form>
  );
};

export default Signin;
