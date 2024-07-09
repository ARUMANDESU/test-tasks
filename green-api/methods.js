function getSettings() {
    document.getElementById('output').innerText = JSON.stringify({ message: `getSettings clicked` }, null, 4);

}

function getStateInstance() {
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

window.onload = function () {

    getQueryVariables()

    setUpInputChanged()
}