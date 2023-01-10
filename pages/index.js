import { collection, query, onSnapshot } from "@firebase/firestore"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { app, database } from "../firebaseConfig"

export default function Index() {

  const router = useRouter()
  const [product, setProduct] = useState([])
  const [max, setMax] = useState(6)

  useEffect(() => {
    const productRef = collection(database, 'products')
    const productQue = query(productRef)
    onSnapshot(productQue, (snap) => {
      setProduct(snap.docs.map((data) => {
        return { ...data.data(), id: data.id }
      }))
    })
  }, [])

  return (
    <main id="mainindex">
      <div className="maindiv row">
        {product.map((data) => {
          const { image, id, price, product } = data
          return (<div className="col product" key={id}> 
            <div className="prod" onClick={() => router.push(`/product/${id}`)}> 
              <div>
                <img src={image}/>
              </div>
              <h4>{product}</h4>
              <h6>{price}</h6>
            </div>
          </div>)
        })}
      </div>
    </main>
  )
}