let clinicBTN=document.querySelector("header #clinic")
let personalBTN=document.querySelector("header #personal")
clinicBTN.addEventListener("click",()=>versionChange("clinic"))
personalBTN.addEventListener("click",()=>versionChange("personal"))
function versionChange(status) {
    let c=document.querySelector("header #clinic")
let p=document.querySelector("header #personal")
    if (status=="clinic") {
        c.classList.remove("text-dark");
        c.classList.add("text-info");
        p.classList.remove("text-info");
        p.classList.add("text-dark");
    }else{
        c.classList.remove("text-info");
        c.classList.add("text-dark");
        p.classList.remove("text-dark");
        p.classList.add("text-info");
    }
}