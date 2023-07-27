import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { store } from "../store/index.js";
import { Provider } from "react-redux";
if (typeof window !== 'undefined') {
  require('flowbite/dist/flowbite');
}


export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
