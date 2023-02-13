import {FilteredList} from "./FilteredList"

export function App () {
  return(
    <div> 

      <FilteredList list={[
        {name : "bianca" , age: 20 , id : 1},
        {name : "jimmy" , age: 24 , id : 2},
        {name : "franco" , age: 8 , id : 3},
      ]}/>

    </div>
  )
}