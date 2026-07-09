export function parseWorkStatusLabel(statusLabel: string): {
  category: string
  outcome: string | null
} {
  const parts = statusLabel
    .split(' / ')
    .map((part) => part.trim())
    .filter(Boolean)

  if (parts.length >= 2) {
    return {
      category: parts[0],
      outcome: parts.slice(1).join(' / '),
    }
  }

  return { category: statusLabel, outcome: null }
}
