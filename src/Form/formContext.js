import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import createReactContext from 'create-react-context'
import { curry } from '../utils/func'
import { deepGet } from '../utils/objects'
import { isObject, isArray } from '../utils/is'
import convert from '../Rule/convert'
import { RULE_TYPE } from '../Rule'

const context = createReactContext()

const isRule = (rules) => {
  if (!isObject(rules)) return false
  return rules.$$type === RULE_TYPE
}

// eslint-disable-next-line
export const Provider = context.Provider
// eslint-disable-next-line
export const Consumer = context.Consumer

export const formProvider = (Origin) => {
  class FormProvider extends PureComponent {
    constructor(props) {
      super(props)
      this.combineRules = this.combineRules.bind(this)
    }

    getRulesFromString(str) {
      const { rules } = this.props
      if (!str || !isRule(rules)) return []
      return convert(rules, str)
    }

    combineRules(name, propRules) {
      const { rules } = this.props
      let newRules = []
      if (isObject(rules) && !isRule(rules) && name) {
        newRules = deepGet(rules, name) || []
      } else if (isArray(rules)) {
        newRules = rules
      }

      if (typeof propRules === 'string') {
        newRules = newRules.concat(this.getRulesFromString(propRules))
      } else if (isArray(propRules)) {
        newRules = newRules.concat(propRules)
      }

      return newRules
    }

    render() {
      const {
        datum, labelAlign, labelWidth, disabled, pending, mode,
      } = this.props
      const value = {
        formDatum: datum,
        formMode: mode,
        disabled: disabled || pending,
        labelAlign,
        labelWidth,
        combineRules: this.combineRules,
      }

      return (
        <Provider value={value}>
          <Origin {...this.props} />
        </Provider>
      )
    }
  }

  FormProvider.propTypes = {
    datum: PropTypes.object,
    disabled: PropTypes.bool,
    labelAlign: PropTypes.string,
    labelWidth: PropTypes.any,
    mode: PropTypes.string,
    pending: PropTypes.bool,
    rules: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
  }

  return FormProvider
}

export const formConsumer = curry((keys, Origin, props) => {
  const filterProps = (value) => {
    const cps = {}
    if (!value) return cps
    if (!keys) return value

    keys.forEach((k) => {
      const val = value[k]
      if (val !== undefined) cps[k] = val
    })
    return cps
  }

  return (
    <Consumer>
      {value => <Origin {...filterProps(value)} {...props} />}
    </Consumer>
  )
})
