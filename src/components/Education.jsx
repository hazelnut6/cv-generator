import up from '../assets/chevron-up.svg'
import down from '../assets/chevron-down.svg'
import '../styles/educ.css'

export function Education(props) {
  const { 
    title, 
    children, 
    isActive, 
    onShow, 
    onClose
  } = props; 

    
  return (
    <div className='educ'>
      {isActive ? (
        <div className='educOpenDiv'>
          <h3>
            {title}
            <img 
              onClick={onClose}
              src={up}
              alt="Close button"
              className='educCloseBtn'
              // className='closeBtn'
            />
          </h3>
          <p className='educChildren'>{children}</p>
        </div>
      ) : (
        <div className='educCloseDiv'>
          <h3>
            {title} 
            <img 
              onClick={onShow}
              src={down}
              alt="Show button"
              className='educOpenBtn'
            />
          </h3>
        </div>
      )}
    </div>
  )
}
