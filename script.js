function calc()
{
    var income = parseInt(document.getElementById("income").value)

    var rental = parseInt(document.getElementById("rental").value)
    var feed = parseInt(document.getElementById("feed").value)
    var transport = parseInt(document.getElementById("transport").value)
    var study = parseInt(document.getElementById("study").value)
    var taxes = parseInt(document.getElementById("taxes").value)
    var fun = parseInt(document.getElementById("fun").value)
    var cloth = parseInt(document.getElementById("cloth").value)
    var medicine = parseInt(document.getElementById("medicine").value)
    var sport = parseInt(document.getElementById("sport").value)
    var internet = parseInt(document.getElementById("internet").value)
    var other = parseInt(document.getElementById("other").value)

    document.getElementById("total").value = income - (rental + feed + transport + study + taxes + fun + cloth + medicine + sport + internet + other)
}