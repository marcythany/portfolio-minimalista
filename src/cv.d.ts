export interface CV {
  basics?: Basics
  work?: Work[]
  skills?: Skills[]
  languages?: Languages[]
  projects?: Projects[]
}

interface Basics {
  name?: string
  label?: string
  image?: string
  email?: string
  phone?: string
  url?: string
  summary?: string
  location?: Location
  profiles?: Profiles[]
}

interface Location {
  address?: string
  postalCode?: string
  city?: string
  countryCode?: string
  region?: string
}

interface Profiles {
  network?: string
  username?: string
  url?: string
}

interface Work {
  name?: string
  position?: string
  url?: string
  startDate?: string
  endDate?: string | null
  summary?: string[]
  highlights?: string[]
}

interface Skills {
  name?: string
  level?: string
  keywords?: string[]
}

interface Languages {
  language?: Language
  fluency?: string
}

type Language = 'English' | 'Português Brasileiro' | string

interface Projects {
  name?: string
  isActive?: boolean
  description?: string
  highlights?: string[]
  url?: string
  github?: string
}
