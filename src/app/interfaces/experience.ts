export interface Experience {
  id: number
  company: string
  company_img_url: string
  location: string
  position: string
  start_date: Date
  end_date?: Date
  achievements?: string[]
}
