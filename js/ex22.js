let requestURL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"

fetch(requestURL)
.then((res) => {return res.json()})
.then((data) => {populateList(data);});

let studentData = document.getElementById("studentData");
function populateList(data){
    let stringStudent = '';
    data.map((obj) => {
        stringStudent+=`
        <tr>
            <td>${obj.fname}</td>
            <td>${obj.lname}</td>
            <td>${obj.address}</td>
            <td>${obj.city}</td>
            <td>${obj.tel}</td>
        </tr>`});
    studentData.innerHTML = stringStudent;
}