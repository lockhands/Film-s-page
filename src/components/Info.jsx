export const Info = ({title,back,url,overview,rate}) =>{
  
    
   return(
    <div className="flex items-center justify-center mt-5">
      
        <div className=" bg-emerald-800 border-black border-0 rounded-lg w-3/4 h-56 absolute bg-cover">
    
        </div>
    

    <div className="flex relative items-center justify-center space-x-10">
    <img className="rounded-lg" src={`http://image.tmdb.org/t/p/w185/${url}`} alt={title}/>
    <div className="flex-col w-1/2 text-white space-y-5">
    <p className="text-3xl font-bold">{`${title}`}</p>
       <p className="text-white">{`${overview}`}</p>
        <p>{`Score: ${rate}`}</p>  
       
    </div>
    </div>

<div>




</div>
    </div>
   );
   
}