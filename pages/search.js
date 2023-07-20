import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import { useState } from "react"
import { database } from "../firebaseConfig"
import { useRouter } from "next/router"

export default function SearchProduct() {

  const router = useRouter()

    const [product, setProduct] = useState('')
    const [price, setPrice] = useState('')
    const [exactName, setExactName] = useState('')
    const [instagram, setInstagram] = useState('')

    const [error, setError] = useState('')

    function addProduct() {
      
      if(product || exactName) {
        if(instagram) {
          addDoc(collection(database, 'searching'), {
            product,
            price,
            exactName,
          }).then(() => {
              setProduct('')
              setPrice('')
              setExactName('')
              setInstagram('')
              router.push('/searchdone')
          })
        } else {
          setError('მიუთითეთ ინსტაგრამი დასაკავშირებლად')
        }
      } else {
        setError('დაახასიათეთ ან მიუთითეთ პროდუქტი')
      }
    }

    return (<> 
    <div style={{width: '550px'}}>
      <p>ამ გვერდის საშუალებით შეგიძლიათ მიუთითოთ პროდუქტი, სასურველი ფასი და ითხოვოთ მისი დამატება საიტზე, პოვნის შემთხვევაში კი დაგიკავშირდებით მითითებულ ინსტაგრამზე. <a href="/">უკან დაბრუნება</a></p>
      <div className="input-group mb-3 d-block">
        <input style={{width: '100%'}} placeholder="დაახასიათეთ პროდუქტი" className="form-control" value={product} onChange={(e) => setProduct(e.target.value)}/>
        <input style={{width: '100%'}} placeholder="მიუთითეთ სასურველი ფასი" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)}/>
        <input style={{width: '100%'}} placeholder="დაასახელეთ ზუსტი პროდუქტი" className="form-control" value={exactName} onChange={(e) => setExactName(e.target.value)}/>
      </div>
      <div className="input-group mb-3">
        <img style={{width: '45px'}} src="/instagram_2.png" className="insta input-group-text"/>
        <input value={instagram} onChange={(e) => setInstagram(e.target.value)}
                type="text" className="form-control" placeholder="ინსტაგრამი"/>
      </div>
      <button style={{width: '100%'}} onClick={addProduct} className="btn btn-outline-success width300">გაგზავნეთ დამატების თხოვნა</button>
      <p className="error" style={{width: '100%'}}>{error}</p>
    </div>
    </>)
}