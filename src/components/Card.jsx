export default function Card({ children, ...props }) {


    return (
        <section className="
        border 
        border-white 
        rounded-tl-3xl 
        rounded-br-3xl 
        shadow-card-shadow 
        text-white 
        text-center 
        grid 
        text-nowrap
        gap-[2vh]" {...props}>
            {children}
        </section>)

}