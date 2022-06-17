export interface Profile {
  id?: 1
  name?: string
  lastname?: string
  birth_date?: Date
  nationality?: string
  email?: string
  about?: string
  ocupation?: string
  background_img_url?: string
  profile_img_url?: string
  address?: string
}

export const profile: Profile = {
  id: 1,
  name: 'Jose',
  lastname: 'Velarde',
  birth_date: new Date('1988-01-01T00:00:00.000+00:00'),
  nationality: 'Argentina',
  email: 'josevelarde00@gmail.com',
  about: 'Electronic Engineer - Software Developer',
  ocupation: 'Developer',
  background_img_url: 'null',
  profile_img_url: 'null',
  address: 'Salta, Argentina',
}
