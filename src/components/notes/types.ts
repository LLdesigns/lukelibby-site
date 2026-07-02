export type PlacedNote = {
  id: string
  x: number
  y: number
  content: string
  rotation: number
}

export type PullDragState = {
  pointerId: number
  startX: number
  startY: number
  currentX: number
  currentY: number
}

export type NoteDragState = {
  noteId: string
  pointerId: number
  offsetX: number
  offsetY: number
}
