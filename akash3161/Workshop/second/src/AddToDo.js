export default function AddToDo(){
    function HandleToDo(event){
        console.log('invoked')
    }
    return(
        <form onSubmit={HandleToDo}>
            <input type="text" placeholder="AddToDo"></input>
            <button type="submit">Submit</button>
        </form>
    )
}