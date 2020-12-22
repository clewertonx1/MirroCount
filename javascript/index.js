console.log("teste")

const a = [{a: '1'}, {a: '1'},{a: '1'},{a: '1'},{a: '1'},{a: '1'},{a: '1'},]


async function inputKeyPressed(){
    var textarea = document.getElementById("fistText")

    var textareaValue = textarea.value
    document.getElementById('secondText').innerHTML = textareaValue

    var textareaValueLength = textareaValue.length
    console.log(textareaValueLength)
    document.getElementById('countCharects').innerHTML = textareaValueLength
}