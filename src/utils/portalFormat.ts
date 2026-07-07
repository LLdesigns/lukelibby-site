import { discoveryQuestions } from '../data/discoveryQuestions'

export type FormattedAnswer = {
  label: string
  value: string
}

const choiceLabelMap = new Map<string, string>()

for (const question of discoveryQuestions) {
  if (question.type === 'choice') {
    for (const choice of question.choices) {
      choiceLabelMap.set(`${question.id}:${choice.id}`, choice.label)
    }
  }
}

const questionLabelMap = new Map(
  discoveryQuestions.map((question) => [question.id, question.prompt]),
)

function formatAnswerKey(key: string): string {
  if (key.endsWith('_detail')) {
    const base = key.replace(/_detail$/, '')
    const baseLabel = questionLabelMap.get(base) ?? base
    return `${baseLabel} (detail)`
  }
  return questionLabelMap.get(key) ?? key.replace(/_/g, ' ')
}

function formatAnswerValue(key: string, value: string): string {
  if (key.endsWith('_detail')) {
    return value
  }
  const baseKey = key
  const choiceLabel = choiceLabelMap.get(`${baseKey}:${value}`)
  return choiceLabel ?? value
}

export function formatDiscoveryAnswers(
  answers: Record<string, string>,
): FormattedAnswer[] {
  const orderedKeys = discoveryQuestions
    .flatMap((question) => {
      const keys = [question.id]
      if (question.type === 'choice' && question.allowDetail) {
        keys.push(`${question.id}_detail`)
      }
      return keys
    })
    .filter((key) => answers[key])

  const extraKeys = Object.keys(answers).filter((key) => !orderedKeys.includes(key))
  const allKeys = [...orderedKeys, ...extraKeys]

  return allKeys.map((key) => ({
    label: formatAnswerKey(key),
    value: formatAnswerValue(key, answers[key]),
  }))
}

export const projectStatusLabels: Record<string, string> = {
  discovery: 'Discovery',
  scoped: 'Scoped',
  active: 'Active',
  paused: 'Paused',
  complete: 'Complete',
}

export function formatRelativeTime(iso: string): string {
  const date = new Date(iso)
  const diffMs = Date.now() - date.getTime()
  const diffMinutes = Math.floor(diffMs / 60000)

  if (diffMinutes < 1) return 'Just now'
  if (diffMinutes < 60) return `${diffMinutes}m ago`

  const diffHours = Math.floor(diffMinutes / 60)
  if (diffHours < 24) return `${diffHours}h ago`

  const diffDays = Math.floor(diffHours / 24)
  if (diffDays < 7) return `${diffDays}d ago`

  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined,
  })
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}
