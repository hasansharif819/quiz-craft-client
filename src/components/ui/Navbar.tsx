import { Navbar as MTNavbar, Typography } from "@material-tailwind/react";

export function Navbar() {
  return (
    <MTNavbar
      placeholder={""}
      variant="gradient"
      color="deep-purple"
      className="mx-auto max-w-screen-2xl  my-4"
    >
      <Typography
        placeholder={""}
        variant="h5"
        className="mr-4 cursor-pointer font-semibold"
      >
        Quiz Craft
      </Typography>
    </MTNavbar>
  );
}
