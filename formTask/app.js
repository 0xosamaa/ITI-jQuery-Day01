const table = $('#_tbl');
const nameInput = $('#txtName');
const ageInput = $('#txtAge');
const add = $('#Add');

add.click(function () {
    let td = document.createElement('td');
    let tr = document.createElement('tr');
    td.innerText = nameInput.val();
    tr.append(td);
    td = document.createElement('td');
    tr.append(td);
    td.innerText = ageInput.val();
    table.append(tr);
});
