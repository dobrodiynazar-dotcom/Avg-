export function parsePriceInput(value: unknown): number | null {
  if (typeof value !== "string" && typeof value !== "number") return null;
  const input = String(value);
  if (!/^\d+(?:[.,]\d{1,2})?$/.test(input)) return null;
  const price = Number(input.replace(",", "."));
  if (!(price > 0) || !Number.isSafeInteger(Math.round(price * 100))) return null;
  const [whole, fraction = ""] = input.replace(",", ".").split(".");
  const exact = `${whole.replace(/^0+(?=\d)/, "")}.${fraction.padEnd(2, "0")}`;
  const [numericWhole, numericFraction = ""] = String(price).split(".");
  return price.toFixed(2) === exact && `${numericWhole}.${numericFraction.padEnd(2, "0")}` === exact ? price : null;
}
