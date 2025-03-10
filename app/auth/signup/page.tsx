import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";

const Signup = () => {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
      <TextField label="Email" type="email" variant="outlined" />
      <TextField label="Password" type="password" variant="outlined" />
      <Button variant="contained">Sign up</Button>
      <Link component={NextLink} href="/auth/signin" className="self-center">
        Signin
      </Link>
    </Stack>
  );
};

export default Signup;
