import {useMemo} from "react"


export function  FilteredList({ list }){
    const filteredList = useMemo(
      () => list.filter(users => users.age > 18),
      [list]
    );
  
    return (
      <ul>
        {filteredList.map(users => (
          <li key={users.id}>
            Name: {users.name}, Age: {users.age}
          </li>
        ))}
      </ul>
    );
  };
