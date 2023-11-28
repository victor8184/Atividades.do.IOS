let itens = [];
let total = [];

function adicionar() {
  let itemName = document.getElementById('itemName').value;
  let itemQty = parseInt(document.getElementById('itemQty').value);
  let itemValue = parseFloat(document.getElementById('itemValue').value);
  itens.push({ name: itemName, qty: itemQty, value: itemValue });
  document.getElementById('itemName').value = '';
  document.getElementById('itemQty').value = '';
  document.getElementById('itemValue').value = '';
  updateItemLists();
}

function updateItemLists() {
  document.getElementById('itemList').innerHTML = '';
  document.getElementById('totalList').innerHTML = '';
  let totalGeral = 0; //fixo

  itens.forEach((item, index) => {
    let listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-itens-center';
    listItem.innerHTML = `
      ${item.name} - ${item.qty} - R$ ${item.qty * item.value.toFixed(2)}
      <div class="btn-group">
        <button type="button" class="btn btnSoma btn-sm" onclick="increaseQty(${index})">+</button>
        <button type="button" class="btn btnSubt btn-sm" onclick="decreaseQty(${index})">-</button>
        <button type="button" class="btn btnExcluir btn-sm" onclick="removeItem(${index})">X</button>
      </div>`;
    document.getElementById('itemList').appendChild(listItem);

    let subTotal = item.qty * item.value;
    totalGeral += subTotal;

    let totalItem = document.createElement('li');
    totalItem.className = 'list-group-item';
    totalItem.textContent = `${item.name} - ${item.qty} - R$ ${subTotal.toFixed(2)}`;
    document.getElementById('totalList').appendChild(totalItem);
  });

  document.getElementById('totalGeral').textContent = totalGeral.toFixed(2);
}

function increaseQty(index) {
  itens[index].qty++;
  updateItemLists();
}

function decreaseQty(index) {
  if (itens[index].qty > 1) {
    itens[index].qty--;
    updateItemLists();
  }
}

function removeItem(index) {
  itens.splice(index, 1);
  updateItemLists();
}