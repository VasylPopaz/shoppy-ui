import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";

const Signin = () => {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
      <TextField label="Email" type="email" variant="outlined" />
      <TextField label="Password" type="password" variant="outlined" />
      <Button variant="contained">Sign in</Button>
      <Link component={NextLink} href="/auth/signup" className="self-center">
        Signup
      </Link>
    </Stack>
  );
};

export default Signin;
