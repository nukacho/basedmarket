export default function searchDone() {
    return (<>
      <div className="done p-4">
        <h4>თხოვნა გამოგზავნილია!</h4>
        <img src="/done.png"/>
        <p>მოვძებნით მოთხოვნილ პროდუქტს, პოვნის შემთხვევაში კი დავამატებთ გვერდზე და დაგიკავშირდებით ინსტაგრამზე.
        </p>
        <div className="button"><a href="/" className="btn btn-outline-dark">პროდუქტების გვერდი ↻</a></div>
      </div>
    </>)
}