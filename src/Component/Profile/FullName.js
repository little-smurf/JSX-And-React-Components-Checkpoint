// Component that receives parameters(props)
const Greetings = (props) => {
    return <p>This is {props.name}.</p>
    }

function FullName(){
    return (
    <div>
    <Greetings name="Oumayma Selmi" />
    </div>
    )
}
export default FullName;
//export * from "./FullName";