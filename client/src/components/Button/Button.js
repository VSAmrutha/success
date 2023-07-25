import "./Button.scss"


const Button = ({children,style}) => {
  return (
    <button className={`btn ${style}`}>{children}</button>
  )
}

export default Button
