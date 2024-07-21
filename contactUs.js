document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const tableBody = document.getElementById('table-body');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const name = document.getElementById('exampleInputName').value;
        const email = document.getElementById('exampleInputEmail1').value;
        const message = document.getElementById('exampleFormControlTextarea1').value;

        
        const newRow = document.createElement('tr');

        
        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        newRow.appendChild(nameCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = email;
        newRow.appendChild(emailCell);

        const messageCell = document.createElement('td');
        messageCell.textContent = message;
        newRow.appendChild(messageCell);

       
        tableBody.appendChild(newRow);

        
        form.reset();
    });
});