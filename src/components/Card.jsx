import "../index.css";

export const Card = ({title,url,date}) =>{
    return(
        <div className="Card">
          
          <div className="w-full rounded-t-lg" >
          <img className="w-full rounded-t-lg bg-cover "src={url} alt={title}/>
          </div>

          <div className="w-auto h-24 shadow-lg  shadow-blue-300 flex items-center justify-center flex-col rounded-b-lg border-black ">
                <p className="font-sm font-bold">{title}</p>
                <p className="text-gray-400 font-bold text-xs">{date}</p>
          </div>  

        </div>
    );
}