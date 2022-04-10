const rn = document.querySelector("#fname").value;
const ft = document.querySelector("#pref").value;
const rad1 = document.querySelector("#radio1").checked;
const rad2 = document.querySelector("#radio2").checked;
const submit = document.querySelector("#btn")


submit.addEventListener("click", () => {
    console.log(rn)
    console.log(ft)
    console.log(rad1)
    console.log(rad2)
})


let filt = (arr) => {
    let a = arr.filter(function(el) {
        return el.category = "Restaurant"
    })
    console.log(a)
}


fetch("https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json")
    .then((response) => response.json())
    .then(data =>
        filt(data)
    )


[{}, {}]