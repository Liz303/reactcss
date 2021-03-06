'use strict'

import flattenNames from './flattenNames'
import mergeClasses from './mergeClasses'
import autoprefix from './autoprefix'

export Component from './deprecated/Component'
export hover from './components/hover.js'
export loop from './loop.js'

export const ReactCSS = (classes, ...activations) => {
  const activeNames = flattenNames(activations)
  const merged = mergeClasses(classes, activeNames)
  return autoprefix(merged)
}

ReactCSS.m = Object.assign

export default ReactCSS
