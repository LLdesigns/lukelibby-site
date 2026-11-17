import type { ProjectDocument } from './types'
import { labsProject } from './labs'
import { lumaProject } from './luma'
import { ovrmapsProject } from './ovrmaps'
import { playItProProject } from './playitpro'
import { plottrProject } from './plottr'
import { slidekitProject } from './slidekit'
import { videokitProject } from './videokit'
import { wyldtracksProject } from './wyldtracks'

const projects: ProjectDocument[] = [
  wyldtracksProject,
  slidekitProject,
  lumaProject,
  videokitProject,
  plottrProject,
  ovrmapsProject,
  labsProject,
  playItProProject,
]

export function getV2Project(slug: string | undefined): ProjectDocument | undefined {
  if (!slug) return undefined
  return projects.find((project) => project.slug === slug)
}
