import up from '../assets/chevron-up.svg'
import down from '../assets/chevron-down.svg'
import '../styles/general.css'

export function General(props) {
    const { 
        title, 
        children, 
        isActive, 
        onShow,
        onClose 
    } = props; 

    
  return (
    <div className='genDiv'>
        {isActive ? (
            <div className='genOpenDiv'>
                <h3>
                    {title}
                    <img 
                        onClick={onClose}
                        src={up}
                        alt="Close button"
                        className='closeBtn'
                    />
                </h3>
                <p className='children'>{children}</p>
            </div>
        ) : (
            <div className='closeDiv'>
                <h3>
                    {title} 
                    <img 
                        onClick={onShow}
                        src={down}
                        alt="Show button"
                        className='genOpenBtn'
                    />
                </h3>
            </div>
        )}
    </div>
  )
}
