import up from '../assets/chevron-up.svg'
import down from '../assets/chevron-down.svg'
import '../styles/work.css'


export function Work(props) {
  const { 
    title, 
    children, 
    isActive, 
    onShow, 
    onClose
  } = props; 

    
  return (
    <div className='workDiv'>
      {isActive ? (
        <div className='workOpenDiv'>
          <h3>
            {title}
            <img 
              onClick={onClose}
              src={up}
              alt="Close button"
              className='workCloseBtn'
            />
          </h3>
          <p className='workChildren'>{children}</p>
        </div>
      ) : (
        <div className='workCloseDiv'>
          <h3>
            {title} 
            <img 
              onClick={onShow}
              src={down}
              alt="Show button"
              className='workOpenBtn'
            />
          </h3>
        </div>
      )}
    </div>
  )
}
