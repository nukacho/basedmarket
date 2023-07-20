import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import { useState } from "react"
import { database } from "../firebaseConfig"


export default function Upload() {
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [product, setProduct] = useState('')

    function addProduct() {
        addDoc(collection(database, 'products'), {
            details,
            image,
            price,
            product
        }).then(() => {
            setName('')
            setDetails('')
            setImage('')
            setPrice('')
            setProduct('')
        })
    }

    return (<>
    <div style={{width: '400px'}}>
      <div className="input-group mb-3 d-block">
        <input style={{width: '100%'}} placeholder="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
        <input style={{width: '100%'}} placeholder="details" className="form-control" value={details} onChange={(e) => setDetails(e.target.value)}/>
        <input style={{width: '100%'}} placeholder="image" className="form-control" value={image} onChange={(e) => setImage(e.target.value)}/>
        <input style={{width: '100%'}} placeholder="price" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)}/>
        <input style={{width: '100%'}} placeholder="product" className="form-control" value={product} onChange={(e) => setProduct(e.target.value)}/>
      </div>
      <button style={{width: '100%'}} onClick={addProduct} className="btn btn-outline-success width300">log</button>
    </div>
    </>)
}