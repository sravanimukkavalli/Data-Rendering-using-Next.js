import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const Router = useRouter();

  useEffect(() => {
    if (Router.pathname === "/") {
      Router.push("/home");
    }
  });
}
