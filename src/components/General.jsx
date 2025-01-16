import down from '../assets/menu-down.svg'

export function General(props) {
    const { 
        title, 
        children, 
        isActive, 
        onShow, 
    } = props; 

    
  return (
    <div>
        {isActive ? (
            <>
                <h3>
                    {title}
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
