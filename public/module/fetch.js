const app = {};
// CREATE
app.post = async (url, json) => {
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {'Content-Type': 'application/json'}
    }).then(data => data.text())
}
// UPDATE
app.put = async (url, json) => {
    return await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(json),
        headers: {'Content-Type': 'application/json'}
    }).then(data => data.text())
}
// READ
app.get = async url => {
    return fetch(url)
    .then(data => data.json())
    .catch(err => err);
}

export default app;