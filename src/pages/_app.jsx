import '../../styles/global.css'
import "@radix-ui/themes/styles.css"; 
import { Theme } from "@radix-ui/themes";
function MyApp({ Component, pageProps }) {

    return (
        <Theme data-theme="dark">
        <Component {...pageProps} />
        </Theme>)}

export default MyApp;
