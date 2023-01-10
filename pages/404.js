import { useRouter } from "next/router"

export default function Error() {

    const router = useRouter()

    return (<>
      <div class="error">
        <img src="/error.png" class="card-img-top"/>
        <div class="card-body text-center">
          <button onClick={() => router.push('/')} href="#" 
            className="btn btn-outline-dark">Home Page</button>
        </div>
      </div>
    </>)
}