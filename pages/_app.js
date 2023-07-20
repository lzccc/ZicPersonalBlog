import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";
import { AuthProvider } from "@/src/components/AuthContext";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    setTimeout(() => {
      setContent(true);
    }, 1000);
  }, []);
  return (
    <AuthProvider>
      <Fragment>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>ZIC Personal Space</title>
        {loading && <Preloader />}
        {content && <Component {...pageProps} />}
      </Fragment>
    </AuthProvider>
  );
}
