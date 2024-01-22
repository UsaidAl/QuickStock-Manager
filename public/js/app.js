function toggleViewItems() {
    const itemTable = document.getElementById("itemTable");
    itemTable.style.display = itemTable.style.display === "none" ? "table" : "none";
}

function openAddItemModal() {
    document.getElementById("addItemModal").style.display = "flex";
}

function closeAddItemModal() {
    document.getElementById("addItemModal").style.display = "none";
}

function addItem() {
    const productName = document.getElementById("productName").value;
    const itemDescription = document.getElementById("itemDescription").value;
    const quantity = document.getElementById("quantity").value;

    const itemList = document.getElementById("itemList");

    const newRow = itemList.insertRow();
    newRow.innerHTML = `
        <td>${productName}</td>
        <td>${itemDescription}</td>
        <td>${quantity}</td>
        <td><button onclick="deleteItem(this)">Delete</button></td>
    `;

    document.getElementById("productName").value = "";
    document.getElementById("itemDescription").value = "";
    document.getElementById("quantity").value = "";

    closeAddItemModal();
}

function deleteItem(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
