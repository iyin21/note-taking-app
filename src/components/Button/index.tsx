interface buttonInterface
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
}
const Button = ({ children, className, ...rest }: buttonInterface) => {
    return (
        
            <button
                className={` bg-[red]  text-white-100 font-semibold text-base py-[12px] px-5 rounded-full  font-semibold group-hover:bg-[#064386]  hover:shadow-md  transition ${className}`}
                {...rest}
            >
                {children}
            </button>
           
    
    )
}

export default Button
