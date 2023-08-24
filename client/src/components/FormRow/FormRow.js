import "./FormRow.scss"

const FormRow = ({onChange,name ,value ,labelText,type}) => {
    return (
      <div className='form-row'>
      { type==="textarea" ?<>
          <label htmfor={name} className="form-label">{labelText || name}</label>
          <textarea rows={4} cols={40} className="form-textarea"  onChange={onChange}/>
          </>:<> <label htmfor={name} className="form-label">{labelText || name}</label>
          <input type={type} className="form-input" value={value} name={name} onChange={onChange}/></>}
      </div>
    )
  }
  
  export default FormRow
  