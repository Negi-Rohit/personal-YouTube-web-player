import SearchIcon from '@material-ui/icons/Search';

const Input = ({value, changed, submit}) => (

                <form onSubmit={submit} className="mb-4 p-3 border-2 border-transparent hover:border-gray-400 hover:shadow-lg">
                        <label className="block mb-2 font-medium text-xl">Search For Videos</label>
                        <SearchIcon style={{fontSize: "33px"}} className="text-red-500 border-t-2 border-l-2 border-b-2 border-red-500 rounded-l-xl" />
                        <input
                            className="w-4/5 border-t-2 border-r-2 border-b-2 border-red-500 rounded-r-xl focus:outline-none " 
                            style={{paddingBottom:"5px"}}
                            type="text" 
                            value={value} 
                            onChange={changed} 
                        />      
                        <button type="submit"></button>
                </form>
    
)

export default Input;

