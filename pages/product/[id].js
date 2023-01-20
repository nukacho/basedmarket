import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { database } from "../../firebaseConfig"

export default function product() {

    const router = useRouter()
    const [id, setId] = useState('')
    const [display, setDisplay] = useState()
    const [product, setProduct] = useState([])
    const [form, setForm] = useState(true)

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [instagram, setInstagram] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    useEffect(() => {
        if(router.query.id) {
            setId(router.query.id)
        }
    })

    useEffect(() => {
      if(id) {
        const ref = doc(database, 'products', id)
        getDoc(ref)
          .then((data) => {
            setProduct({...data.data()})
          }).then(() => {
            setDisplay(true)
          })
      }
    }, [id])

    useEffect(() => {
      if(display) {
        product.product ? '' : router.push('/404')
      }
    }, [display])

    function addOrder(e) {
      e.preventDefault()
      addDoc(collection(database, 'orders'), {
        name,
        number,
        instagram,
        address,
        comment,
        product: product.product,
        price: product.price,
        date: serverTimestamp()
      })
        .then(() => router.reload())
    }

    return (<>{display &&
    <div id="product" onClick={() => console.log(product)}>
      {product.product &&
      <main onClick={() => console.log(product)}>
        <div className="card">
          <h2 className="text-center mt-3">{product.product}</h2>
            <div className="img">
              <img className="card-img-top" src={product.image}/>
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.price} პროდუქტის აღწერა</h5>
              <p className="card-text">
                  {product.details}
              </p>
            </div>
          </div>
        <div className="button">
          <button onClick={() => setForm(!form)} className="btn btn-outline-success buy mt-3 mb-5">ყიდვა მსურს 🛒</button>
        </div>
        {form &&
        <form onSubmit={(e) => addOrder(e)} className="mb-5">
          <div id="form">
            <div className="mb-3 d-flex justify-content-center align-items-center">
              <img src="/contact.png"/>
              <h6 className="mt-2 ms-1">საკონტაქტო მონაცემები</h6>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">👤</span>
              <input value={name} onChange={(e) => setName(e.target.value)}
                type="text" className="form-control" placeholder="სახელი"/>
            </div>
            <div className="input-group mb-3">
              <input value={number} onChange={(e) => setNumber(e.target.value)}
                type="text" className="form-control" placeholder="ტელეფონის ნომერი"/>
              <span className="input-group-text">📞</span>
            </div>
            <div className="input-group mb-3">
              <img src="/instagram_2.png" className="insta input-group-text"/>
              <input value={instagram} onChange={(e) => setInstagram(e.target.value)}
                type="text" className="form-control" placeholder="ინსტაგრამი"/>
            </div>
            <div className="input-group mb-3">
              <input value={address} onChange={(e) => setAddress(e.target.value)}
                type="text" className="form-control" placeholder="მისამართი"/>
              <span className="input-group-text">🏠</span>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">✎</span>
              <input value={comment} onChange={(e) => setComment(e.target.value)}
                type="text" className="form-control" placeholder="დამატებითი კომენტარი"/>
            </div>
            <button type={"submit"} className="button btn btn-outline-dark">შეკვეთა</button>
          </div>
        </form>
        }
      </main>
        }
    </div>
    }</>)
}