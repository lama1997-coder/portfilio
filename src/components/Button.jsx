export default function Button({title , ...props}){


    return (
        <div className="button" {...props}>{title}</div>
    )
}