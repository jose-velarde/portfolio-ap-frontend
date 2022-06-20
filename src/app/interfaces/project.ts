export interface Project {
  id: number
  project_name: string
  project_url: string
  repository_url: string
  description: string
  stack?: string[]
}
