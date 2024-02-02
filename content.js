function fetchAndDisplayTestResults() {
    const table = document.querySelector('.coderunner-test-results');

    if (!table) {
        console.error("Table not found.");
        return;
    }

    const tbody = table.querySelector('tbody');

    if (!tbody) {
        console.error("Table body not found.");
        return;
    }

    const testRows = tbody.querySelectorAll('tr');
    testRows.forEach((testRow, id) => {
        const checkCol = testRow.querySelector('td:nth-child(1)');
        const testCol = testRow.querySelector('td:nth-child(2)');
        const testColContent = testCol.querySelector("pre")
        const columns = testRow.querySelectorAll("td")
        const status = checkCol.querySelector('i');
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle Row';
        toggleButton.className = 'toggleRowButton';
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault()
            columns.forEach((col, id) => {
                if(id != 0){
                    col.style.display = (col.style.display === 'none') ? '' : 'none';
                }
            })
        });

        const copy = document.createElement('button');
        copy.textContent = 'Copy Test Case';
        copy.className = 'copyTestCase';
        copy.addEventListener('click', (e) => {
            e.preventDefault()
            const textarea = document.createElement('textarea');
            textarea.value = testColContent.innerText;
            document.body.appendChild(textarea);
            textarea.select();
            textarea.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(textarea.value+"\n");
            document.body.removeChild(textarea);
        });

        status.parentNode.appendChild(toggleButton);
        status.parentNode.appendChild(copy);
    }); 
}

fetchAndDisplayTestResults();

