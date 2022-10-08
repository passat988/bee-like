import { RadioButton } from './radio'

export const RadioGroup = ({ options, value, onChange }) => {
  return (
    <>
      { options.map((option, i) => (
        <RadioButton
          key={ i }
          value={ option.value }
          label={ option.label }
          checked={ option.value === value }
          onChange={ () => onChange(option.value) }
        />
      )) }
    </>
  )
}