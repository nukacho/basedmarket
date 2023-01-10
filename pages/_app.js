import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Fixed from '../fixed'

export default function App({ Component, pageProps }) {
  return <Fixed>
      <Component {...pageProps} />
    </Fixed>
}
