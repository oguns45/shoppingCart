

// Define the Items
const items = [
    { name: 'Apple', price: 1.00, quantity: 3 },
    { name: 'Bread', price: 2.50, quantity: 2 },
    { name: 'Milk', price: 3.00, quantity: 1 }
];

// Calculate Subtotal
function calculateSubtotal(items) {
    return items.reduce((subtotal, item) => {
        return subtotal + (item.price * item.quantity);
    }, 0);
}

// Apply Discount
function applyDiscount(subtotal, discountPercentage) {
    return subtotal - (subtotal * (discountPercentage / 100));
}

// Calculate Tax
function calculateTax(discountedTotal, taxRate) {
    return discountedTotal + (discountedTotal * (taxRate / 100));
}

// Calculate Final Total
function calculateTotal(items, discountPercentage, taxRate) {
    const subtotal = calculateSubtotal(items);
    const discountedTotal = applyDiscount(subtotal, discountPercentage);
    const finalTotal = calculateTax(discountedTotal, taxRate);
    return finalTotal;
}

// Test the Functions
const discountPercentage = 10; // 10% discount
const taxRate = 8; // 8% tax

const finalTotal = calculateTotal(items, discountPercentage, taxRate);
console.log(`Final Total: $${finalTotal.toFixed(2)}`);

    