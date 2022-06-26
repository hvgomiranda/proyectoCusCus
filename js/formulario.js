const $form = document.querySelector("#form")

$form.addEventListener("submit", handleSubmit)

async function handleSubmit(event)
{
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "Accept": "application/json"
        }
    })
    if(response.ok)
    {
        this.reset()
        alertMsg("¡Gracias por contactarnos!", "green")
    }
}

function alertMsg(message, color){
    Toastify({
        text: message,
        style: {
            background: color,
        },
        duration: 3000,
        offset: {
            y: 100
        },
        className: "toast",
        }).showToast();
}