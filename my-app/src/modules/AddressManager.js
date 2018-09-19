const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/address/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/address`).then(e => e.json())
        }
    },



post: {
    value: function (newAddress) {
        return fetch(`${remoteURL}/address`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAddress)
        }).then(e => e.json())
    }
},
edit: {
    value: function (editAddress,id) {
        console.log(editAddress,"API")
        return fetch(`${remoteURL}/address/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editAddress)
        }).then(e => e.json())
    }
},
delete: {
    value: (id) => {
        return fetch(`${remoteURL}/address/${id}`, {
        method: "DELETE"
    })
   .then(e => e.json())

    }
},
})
