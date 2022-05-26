// faq.js
import FAQScreen from '../src/screens/FAQScreen';

export default FAQScreen;

const https = require("https");

const agent = new https.Agent({
    rejectUnauthorized: false
})

export async function getStaticProps() {
    const FAQ_URL_API = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_URL_API, { agent })
        .then((res) => res.json())
        .then((res) => res)

    return {
        props: {
            faq
        },
    }
}  