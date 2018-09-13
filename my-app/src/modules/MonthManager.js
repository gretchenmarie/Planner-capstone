
const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/month/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/month`).then(e => e.json())
        }
    },



post: {
    value: function (newMonth) {
        return fetch(`${remoteURL}/month`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMonth)
        }).then(e => e.json())
    }
},
edit: {
    value: function (editMonth) {
        return fetch(`${remoteURL}/month`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editMonth)
        }).then(e => e.json())
    }
}
})