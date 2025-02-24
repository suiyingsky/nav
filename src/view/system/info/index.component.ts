// @ts-nocheck
// Copyright @ 2018-present xiejiahe. All rights reserved. MIT license.
// See https://github.com/suiyingsky/nav

import { Component } from '@angular/core'
import { $t } from 'src/locale'
import { getToken } from 'src/utils/user'
import config from '../../../../nav.config'
import { VERSION } from 'src/constants'

@Component({
  selector: 'system-info',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export default class SystemInfoComponent {
  $t = $t
  token: string|null = getToken()
  config = config
  date = document.getElementById('META-NAV')?.dataset?.['date'] || $t('_unknow')
  currentVersionSrc = `https://img.shields.io/badge/release-v${VERSION}-red.svg?longCache=true&style=flat-square`

  constructor (
  ) {}

  ngOnInit () {
  }
}
