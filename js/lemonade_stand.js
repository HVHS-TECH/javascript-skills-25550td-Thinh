const state = {
  day: 1,
  cash: 20,
  inventory: {
    lemons: 0,
    sugar: 0,
    ice: 0,
    cups: 0,
  },
};

const prices = {
  lemons: 0.2,
  sugar: 0.1,
  ice: 0.05,
  cups: 0.05,
};

const inventoryLabels = {
  lemons: 'Lemons',
  sugar: 'Sugar',
  ice: 'Ice',
  cups: 'Cups',
};

const dayLabel = document.getElementById('dayLabel');
const cashLabel = document.getElementById('cashLabel');
const messageBox = document.getElementById('marketMessage');

function formatMoney(value) {
  return `$${value.toFixed(2)}`;
}

function updateDashboard() {
  dayLabel.textContent = state.day;
  cashLabel.textContent = formatMoney(state.cash);

  Object.entries(state.inventory).forEach(([key, value]) => {
    const element = document.getElementById(`${key}Count`);
    if (element) {
      element.textContent = value;
    }
  });

  document.querySelectorAll('.buy-btn').forEach((button) => {
    const item = button.dataset.item;
    const quantity = Number(document.getElementById(`${item}Qty`).value || 1);
    const total = prices[item] * quantity;
    button.disabled = total > state.cash;
  });
}

function showMessage(text) {
  messageBox.textContent = text;
}

function buySupply(item) {
  const quantity = Number(document.getElementById(`${item}Qty`).value) || 1;
  const totalCost = prices[item] * quantity;

  if (totalCost > state.cash) {
    showMessage(`Not enough cash to buy ${quantity} ${inventoryLabels[item].toLowerCase()}.`);
    return;
  }

  state.cash -= totalCost;
  state.inventory[item] += quantity;
  updateDashboard();
  showMessage(`Bought ${quantity} ${inventoryLabels[item].toLowerCase()} for ${formatMoney(totalCost)}.`);
}

window.addEventListener('DOMContentLoaded', () => {
  updateDashboard();
  showMessage('Choose your supplies and start building your stand.');

  document.querySelectorAll('.buy-btn').forEach((button) => {
    button.addEventListener('click', () => buySupply(button.dataset.item));
  });
});
