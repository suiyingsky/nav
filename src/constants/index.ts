// Copyright @ 2018-present xiejiahe. All rights reserved. MIT license.
// See https://github.com/suiyingsky/nav

import { getCDN } from '../services'

export const DB_PATH = 'data/db.json'

export const TAG_PATH = 'data/tag.json'

export const SETTING_PATH = 'data/settings.json'

export const SEARCH_PATH = 'data/search.json'

export const LOGO_PATH = 'logo.png'

export const LOGO_CDN = getCDN('logo.png')

export const VERSION = '7.0.0'

export const STORAGE_KEY_MAP = {
  token: 'token',
  location: 'location',
  s_url: 's_url',
  isDark: 'isDark',
  website: 'website',
  engine: 'engine',
  language: 'language',
  total: 'total'
}
