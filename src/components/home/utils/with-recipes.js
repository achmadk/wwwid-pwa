import React from 'react'

import { recipes } from './data'

const withRecipes = Component => props => <Component recipes={recipes} {...props} />

export default withRecipes
