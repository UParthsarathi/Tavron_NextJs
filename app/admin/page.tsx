import { Admin } from "./Admin";

// /admin: where Tavron's staff write the news and add videos. See "The admin" in README.md.
export default function Page() {
  return (
    <>
      <title>Admin | Tavron Engineers</title>
      <meta name="robots" content="noindex, nofollow" />
      <Admin />
    </>
  );
}
