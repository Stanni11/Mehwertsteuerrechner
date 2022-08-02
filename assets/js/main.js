const outputBoxTax = document.getElementById('outputBoxTax')
const output_endpreis = document.getElementById('output_endpreis')



const calc = (event) => {
    event.preventDefault()

    const mwst = document.forms[0].mwst.value
    let stSatz = document.forms[0].steuersatz.value
    let input_betrag = document.forms[0].input_betrag.value


    Bruttobetrag = 0
    // Mehrwertsteuer = 0

    if (stSatz == 'neunzehn') {
        stSatz = 0.19
    } else {
        stSatz = 0.07
    }



    const mwstauf = (Bruttobetrag, stSatz, input_betrag) => {
        Bruttobetrag = input_betrag * (1 + stSatz)
        return Bruttobetrag
    }

    const mwstab = (Bruttobetrag, stSatz, input_betrag) => {
        Bruttobetrag = input_betrag / (1 + stSatz)
        return Bruttobetrag

    }


    if (mwst == "plus") {
        Bruttobetrag = mwstauf(Bruttobetrag, stSatz, input_betrag)

    } else if (mwst == "minus") {
        Bruttobetrag = mwstab(Bruttobetrag, stSatz, input_betrag)
    }

    outputBoxTax.innerHTML = Bruttobetrag

}