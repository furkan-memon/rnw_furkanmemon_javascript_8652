document.addEventListener('DOMContentLoaded', function () {


    const userSessionData = sessionStorage.getItem('loggedInUser');

    if (userSessionData) {

        const user = JSON.parse(userSessionData);
        document.querySelector(".username").textContent = user.username
        document.querySelector(".user-email").textContent = user.email
    } else {
        console.warn("No active user session found. Redirecting to sign-in.");
    }
});
const SAVE_STD_INFO = "stdinfo"
const Stdname = document.querySelector("#student-name")
const Stdemail = document.querySelector("#student-email")
const Stdage = document.querySelector("#student-age")
const StdGrid = document.querySelector("#student-grid")
const Stdgender = document.querySelector("#student-gender")
const StdCourse = document.querySelector("#student-course")
const StdDep = document.querySelector("#student-dept")
const Stdno = document.querySelector("#student-contact")
const btn = document.querySelector(".save-btn")
const tbody = document.querySelector("tbody")

let stdinfo = []

function saveitem() {
    localStorage.setItem(SAVE_STD_INFO, JSON.stringify(stdinfo))
    document.getElementById('addStudentModal').style.display = 'none';
}
function getItem() {
    const getdata = localStorage.getItem(SAVE_STD_INFO)
    if (getdata) {
        try {
            const data = JSON.parse(getdata);
            stdinfo = Array.isArray(data) ? data : [];
        } catch (e) {
            console.error("JSON parse error:", e);
            stdinfo = [];
        }
    } else {
        stdinfo = [];
    }


}
function renderinfo() {
    tbody.innerHTML = "";
    stdinfo.forEach((s) => {
        tbody.innerHTML += `
        <tr>
                                <td data-label="Name"><strong>${s.Stdname}</strong></td>
                                <td data-label="Email">${s.Stdemail}</td>
                                <td data-label="Age">${s.Stdage}</td>
                                <td data-label="GRID">${s.StdGrid}</td>
                                <td data-label="Gender">${s.Stdgender}</td>
                                <td data-label="Course">${s.StdCourse}</td>
                                <td data-label="Department">${s.StdDep}</td>
                                <td data-label="Contact Number">(+91) ${s.Stdno}</td>
                                <td><i class="fas fa-ellipsis-v action-dots"></i></td>
                            </tr>`
    })
}
btn.addEventListener("click", function () {
    const std = {
        Stdname: Stdname.value.trim(),
        Stdemail: Stdemail.value.trim(),
        StdGrid: StdGrid.value.trim(),
        Stdage: Stdage.value.trim(),
        Stdgender: Stdgender.value.trim(),
        StdCourse: StdCourse.value.trim(),
        StdDep: StdDep.value.trim(),
        Stdno: Stdno.value.trim(),
    }
    if (
        !std.Stdname ||
        !std.Stdemail ||
        !std.Stdage ||
        !std.StdGrid ||
        !std.Stdgender ||
        !std.StdCourse ||
        !std.StdDep ||
        !std.Stdno
    ) {
        alert("Please Fill All Fields.");
        return;
    }

    stdinfo.push(std)
    saveitem()
    renderinfo()
})

getItem();
renderinfo();
