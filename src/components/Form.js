export default function FormBox() {
  return (
    <form>
      <h3>ADD NEW BOOK</h3>
      <div className="row">
        <input className="col-sm-6" type="text" placeholder="Book Title" />
        <select className="col-6 col-sm-3">
          <option disabled="disabled" selected="selected">Category</option>
          <option>Action</option>
        </select>
        <button className="col-6 col-sm-3" type="submit">ADD BOOK</button>
      </div>
    </form>
  );
}
