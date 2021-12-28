const app = {};
// CREATE
app.post = async (url, json) => {
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {'Content-Type': 'application/json'}
    }).then(data => data.text())
}
// READ
app.get = async url => {
    return await fetch(url).then(data => data.json())
}

export default app;