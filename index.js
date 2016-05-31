import main from '@act/main'
import value from '@act/main/processes/value'

const view = (name) => (
  ['main', [
    ['h1', ['Hello ', name]],
    ['input', {keyup: {update: value}, defaultValue: name}]
  ]]

)
main(view, { model: 'Joe' })
