const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/week/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/week`).then(e => e.json())
        }
    },



post: {
    value: function (newWeek) {
        return fetch(`${remoteURL}/week`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newWeek)
        }).then(e => e.json())
    }
},
edit: {
    value: function (editAnimal) {
        return fetch(`${remoteURL}/animals`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editAnimal)
        }).then(e => e.json())
    }
}
})