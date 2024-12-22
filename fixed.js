import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Fixed({children}) {

    const [display, setDisplay] = useState(false)

    useEffect(() => {
      setDisplay(true)
    }, [])

    return (<>
      {display && 
        <>
        <Head>
          <title>QERSUMA</title>
          <link rel="icon" href="/logo.png"/>
        </Head>
        <div id="thediv">
          {children}
        </div>
        <footer>
          <div className="social">
            <a href="https://www.instagram.com/qersuma/" target={"_blank"}><img src="/instagram.png"/></a>
            <a href="/search"><img src="/search.png"/></a>
          </div>
          <p className="copyright">QERSUMA 2024 ©</p>
        </footer>
        </>}
    </>)
}
