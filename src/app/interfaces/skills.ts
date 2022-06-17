export interface Skills {
  id: Number
  soft_skills: Skill[]
  hard_skills: Skill[]
}

interface Skill {
  skill_name: String
  score: Number
}
