export function formatCurrency(value, type = 'EUR') {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: type,
  }).format(value);
}
