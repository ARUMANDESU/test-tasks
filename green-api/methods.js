function getSettings() {
    const apiUrl = getAPIUrl()
    const instanceId = getInstanceId()
    const apiToken = getApiToken()

    if (!instanceId || !apiToken) {
        document.getElementById('output').innerText = JSON.stringify({ error: 'Please provide instanceId and apiToken' }, null, 4);
        return
    }

    fetch(`${apiUrl}/waInstance${instanceId}/getSettings/${apiToken}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(data => {
            document.getElementById('output').innerText = JSON.stringify(data, null, 4)
        })
        .catch((error) => {
            document.getElementById('output').innerText = JSON.stringify({ error: error.message }, null, 4)
        })
}

function getStateInstance() {
    const apiUrl = getAPIUrl()
    const instanceId = getInstanceId()
    const apiToken = getApiToken()

    if (!instanceId || !apiToken) {
        document.getElementById('output').innerText = JSON.stringify({ error: 'Please provide instanceId and apiToken' }, null, 4);
        return
    }

    fetch(`${apiUrl}/waInstance${instanceId}/getStateInstance/${apiToken}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(data => {
            document.getElementById('output').innerText = JSON.stringify(data, null, 4)
        })
        .catch((error) => {
            document.getElementById('output').innerText = JSON.stringify({ error: error.message }, null, 4)
        })

    document.getElementById('output').innerText = JSON.stringify({ message: "getStateInstance clicked" }, null, 4);
}

function sendMessage() {
    const phoneNumber = getPhoneNumber()
    const message = getMessage()
    document.getElementById('output').innerText = JSON.stringify({ phoneNumber, message }, null, 4);
}

function sendFileByUrl() {
    const phoneNumber = getPhoneNumber()
    const fileUrl = getPhoneNumberFile()
    document.getElementById('output').innerText = JSON.stringify({ phoneNumber, fileUrl }, null, 4);
}

function getQueryVariables() {
    const urlParams = new URLSearchParams(window.location.search)

    const vars = [
        {queryName: 'instanceId', elementId: 'idInstance'},
        {queryName: 'apiToken', elementId: 'apiTokenInstance'},
    ]

    vars.forEach((v) => {
        const value = urlParams.get(v.queryName)
        if (value) {
            document.getElementById(v.elementId).value = value
        }
    })
}

function setUpInputChanged() {
    const urlParams = new URLSearchParams(window.location.search)

    const vars = [
        {queryName: 'instanceId', elementId: 'idInstance'},
        {queryName: 'apiToken', elementId: 'apiTokenInstance'},
    ]

    vars.forEach((v) => {
        document.getElementById(v.elementId).oninput = function (e) {
            urlParams.set(v.queryName, e.target.value)
        }
    })
}

function getInstanceId () {
    return document.getElementById('idInstance').value
}

function getApiToken () {
    return document.getElementById('apiTokenInstance').value
}

function getPhoneNumber () {
    return document.getElementById('phoneNumber').value
}

function getMessage () {
    return document.getElementById('message').value
}

function getPhoneNumberFile () {
    return document.getElementById('phoneNumberFile').value
}

function getAPIUrl () {
    return config.apiUrl
}

window.onload = function () {

    getQueryVariables()

    setUpInputChanged()
}