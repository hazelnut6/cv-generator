import up from '../assets/chevron-up.svg'
import down from '../assets/chevron-down.svg'

export function Work(props) {
  const { 
    title, 
    children, 
    isActive, 
    onShow, 
    onClose
  } = props; 

    
  return (
    <div>
      {isActive ? (
        <>
          <h3>
            {title}
            <img 
              onClick={onClose}
              src={up}
              alt="Close button"
              style={{width: 35, border: '1px solid black'}}
            />
          </h3>
          <p>{children}</p>
        </>
      ) : (
        <>
          <h3>
            {title} 
            <img 
              onClick={onShow}
              src={down}
              alt="Up button"
              style={{width: 35, border: '1px solid black'}}
            />
          </h3>
        </>
      )}
    </div>
  )
}
