export default function Button({title , ...props}){


    return (
        <div className= "text-black bg-[#12F7D6] flex items-center p-2 rounded-lg"  {...props}>{title}</div>
    )
}