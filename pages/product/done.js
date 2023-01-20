export default function Order() {
    return (<>
      <div className="done p-4">
        <h4>შეკვეთა მიღებულია!</h4>
        <img src="/done.png"/>
        <p>დაგიკავშირდებით შესაძლებელ დროში,
            იყავით კონტაქტზე.
        </p>
        <div className="button"><a href="/" className="btn btn-outline-dark">პროდუქტების გვერდი ↻</a></div>
      </div>
    </>)
}