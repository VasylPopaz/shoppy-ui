"use client";

import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import { useFormState } from "react-dom";
import { createUser } from "./create-user";

const Signup = () => {
  const [state, formAction] = useFormState(createUser, { error: "" });

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
          Sign up
        </Button>
        <Link component={NextLink} href="/auth/signin" className="self-center">
          Signin
        </Link>
      </Stack>
    </form>
  );
};

export default Signup;
