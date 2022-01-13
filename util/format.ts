export const formatPrice = (value: number) => {
  return `R$ ${String(value.toFixed(2)).replace('.',',')}`
}