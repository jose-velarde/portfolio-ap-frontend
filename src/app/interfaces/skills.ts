export interface Skills {
  id?: number
  soft_skills: SoftSkill[]
  hard_skills: HardSkill[]
}

interface SoftSkill {
  soft_skill_name: String
  soft_skill_score: number
}

interface HardSkill {
  hard_skill_name: String
  hard_skill_score: number
}
