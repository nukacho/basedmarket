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
          <title>Based Market</title>
          <link rel="icon" href="/logo.png"/>
        </Head>
        <div id="thediv">
          {children}
        </div>
        <footer>
          <div className="social">
            <a href="https://www.instagram.com/marketisbased/" target={"_blank"}><img src="/instagram.png"/></a>
            <a href="https://www.facebook.com/profile.php?id=100089590171747" target={"_blank"}><img src="/facebook.png"/></a>
            <a href="/search"><img src="/search.png"/></a>
          </div>
          <p className="copyright">Based Market 2023 ©</p>
        </footer>
        </>}
    </>)
}