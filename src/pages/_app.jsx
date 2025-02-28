// import '../pages' // Global styles
import "@radix-ui/themes/styles.css"; 
import { Theme } from "@radix-ui/themes";
function MyApp({ Component, pageProps }) {

    return (
        <Theme>
        <Component {...pageProps} />;
        </Theme>)}

export default MyApp;
