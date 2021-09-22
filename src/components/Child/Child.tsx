interface parentProps  {
    color :string
}
export const Child = ({color} : parentProps) => {
    return(
        <div style={{color:color}}>
            hello
        </div>
    )
}