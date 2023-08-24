import "./Button.scss"


const Button = ({children,type,className,onClick}) => {
  return (
    <button type={type} onClick={onClick} className={className?`btn-${className}`:'btn'}>{children}</button>
  )
}

export default Button
