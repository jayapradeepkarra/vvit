fetch("data.json")
.then((response)=>{
    return response.json()
}).then((data)=>{
    // console.log(data);
    display_info(data.basics);
})

var bodyElement=document.querySelector("#root");
function display_info(info){
    // cardview
    let card=document.createElement("div");
    card.classList.add("card");
    // heading
    let heading=document.createElement("h2");
    heading.textContent=info.name;
    card.append(heading);
    bodyElement.append(card)
    // role
    let line=document.createElement("hr");
    // role.textContent=info.line
    card.append(line)
    let role=document.createElement("h3");
    role.textContent=info.role;
    card.append(role)
    // email
    let email=document.createElement("a");
    email.href="mailto:"+info.email;
    email.textContent=info.email;
    card.append(email)
    let line2=document.createElement("hr");
    card.append(line2)
    // contact
    let contact=document.createElement("a");
    contact.href="tel:"+info.contact;
    contact.textContent=info.contact;
    card.append(contact)
    // button
    var button=document.createElement("a");
    button.textContent="View Profile";
    button.classList.add("btn");
    card.append(button)

}