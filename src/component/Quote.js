import react from "react"
import { useState } from "react"
import './Quote.css'
  
const data =  [ {
                 quote: "To live is the rarest thing in the world. Most people exist, that is all. ",
                 author: "Oscar Wilde"
                },

                {
                    quote: "That it will never come again is what makes life so sweet ",
                    author: "Emily Dickinsonh"
                },

                {
                    quote: "It is never too late to be what you might have been. ",
                    author: "George Eliot"    
                },

                {
                    quote: "o be yourself in a world that is constantly trying to make you something else is the greatest accomplishment ",
                    author: "Ralph Waldo Emerson"
                }
        
            ]
       
            const Quote = ()=>{
                return (
                    <div className="container">
                        {data.map((item , index)=>{
                           return <div className="box">
                            <div>{item.quote}</div>
                            <div>{item.author}</div>
                            </div>
                            

                        })}
                    </div>
                )
            }

            export default Quote;

                   
    
        
       
       
    
    


