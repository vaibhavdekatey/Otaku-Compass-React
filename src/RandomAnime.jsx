import { NavLink } from 'react-router-dom';



function RandomAnime(props) {

  

  
  return (
    <>
      <div className="main-head">
				<form 
					className="search-box"
					onSubmit={props.handleSearch}>
					<input 
						type="search"
						placeholder="Search for an anime..."
						required
						value={props.search}
            			onChange={e => props.setSearch(e.target.value)}
						/>
            		<button >Search</button>
				</form>
		</div>

      <NavLink to='/Random' onClick={props.fetchRamdomAnime}><button >Random</button></NavLink> 

    </>
  )
}

export default RandomAnime;