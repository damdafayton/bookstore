const appID = 'NhHHetMnF0z0pJurBigh';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

const get = () => fetch(`${url + appID}/books`).then((res) => res.json());
/* SAMPLE FORMAT
{
"1": [
    {
        "category": "Fiction",
        "title": "nice book"
    }
]
}
*/
const post = ({
  id, title, category = 'None', author,
}) => fetch(`${url + appID}/books`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    item_id: id, title, category, author,
  }),
})
  .then((res) => res.text());

const deleter = (id) => fetch(`${url + appID}/books/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ item_id: id }),
})
  .then((res) => res.text());

export { get, post, deleter };
