export const sortListByType = (listToSort, type)=>{
      let newList
      switch(type){
        case "nameAsc":
          newList = listToSort.sort((a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0))
         break;    
       case "nameDesc":
         newList = listToSort.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
         break;
  
        case "ratingAsc":
         newList = listToSort.sort((a, b) => (a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0))
         break;
  
         case "ratingDesc":
          newList = listToSort.sort((a, b) => (a.rating > b.rating ? 1 : a.rating < b.rating ? -1 : 0))
          break;
          
          default:
         newList=listToSort
         break;       
      }     
      return newList       
    }
  
export const filterGames = (listToFilter,type)=> {
  let newList
  switch(type){
    case 'games':
      newList = listToFilter.filter(e=>e.created === false)
      break;
    case 'created':
      newList = listToFilter.filter(e=>e.created === true)
      break;
    default:
      newList=listToFilter
    break;        
  }
  return newList
}