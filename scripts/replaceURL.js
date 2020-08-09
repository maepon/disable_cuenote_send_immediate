// replaceURL

const radioButtonId = 'queue_mode_immediate'
const labelSelector = 'label[for="queue_mode_immediate"]'

const main = () => {
    const radioElement = document.getElementById(radioButtonId)

    if (!radioElement){
        return
    }

    radioElement.disabled = true;

    const labelElement = document.querySelector(labelSelector)

    if (!labelElement){
        return
    }

    labelElement.style.color = '#ccc'
}

main();
