import "./Card.scss"

const Card = ({children,styles}) => {
  return (
    <div className={`cardWrapper ${styles} `}>
      {children}
    </div>
  )
}

export default Card
