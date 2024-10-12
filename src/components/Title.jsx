import DefulttText from "./DefaultText"
export default function Title({logo ,text}){

    return (
       <div className="flex-align">
         <img src={logo}/>
         <DefulttText title={text} small-xx="1"></DefulttText>
       </div>
    )
}