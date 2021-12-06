import'./styles.css'
export const Search = (props)=>{
    return(
        <input name="search" placeholder="search by brand" type="text" onChange={props.handleSearchUpdate}/>
    )
}