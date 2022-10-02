export const RadioButton = ({ value, label, checked, onChange }) => (
  <label>
    <input checked={ checked } onChange={ onChange } type="radio" value={ value }/>
    { label }
  </label>
)