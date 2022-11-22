import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Component/NavBar";

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers"

function NewBeer() {
   const [name, setName] = useState("")
   const [tagline, setTagline] = useState("")
   const [description, setDescription] = useState("")
   const [first_brewed, setFirstBrewed] = useState("")
   const [attentuation_level, setAttentuationLevel] = useState("")
   const [contributed_by, setContributedBy] = useState("")

   const navigate = useNavigate()

   const nameHandler = (event) => {
      setName(event.target.value)
   }
   const taglineHandler = (event) => {
      setTagline(event.target.value)
   }

   const descriptionHandler = (event) => {
      setDescription(event.target.value)
   }

   const firstbrewerHandler = (event) => {
      setFirstBrewed(event.target.value)
   }

   const attentuationLevelHandler = (event) => {
      setAttentuationLevel(event.target.value)
   }

   const contributedByHandler = (event) => {
      setContributedBy(event.target.value)
   }


   const submitHandler = (event) => {
      event.preventDefault()

      const newBeer =  {
         name: name,
         tagline: tagline,
         description: description,
         first_brewed:first_brewed,
         attentuation_level, attentuation_level,
         contributed_by:contributed_by,
      }

      const postApi = async () => {
        try {
           const res = await axios.post(apiEndpoint, newBeer)
           navigate("/")
        } catch (error) {
        }
     }

     postApi()

     setName("")
     setTagline("")
     setDescription("")
     setFirstBrewed("")
     setAttentuationLevel("")
     setContributedBy("")
   }
    

  return (
     <div>
      <NavBar></NavBar>
        <form onSubmit={submitHandler}>
           <label>Name</label>
           <input type="text" name="name" value={name} onChange={nameHandler} />
           <br></br>

           <label>Tagline</label>
           <input type="text"  name="tagline" value={tagline}  onChange={taglineHandler} />
           <br></br>

           <label>Description</label>
           <input type="text" name="description" value={description} onChange={descriptionHandler} />
           <br></br>

           <label>First brewed</label>
           <input type="text" name="first_brewed" value={first_brewed} onChange={firstbrewerHandler} />
           <br></br>

           <label>Attentuation level</label>
           <input type="text" name="attentuation_level" value={attentuation_level} onChange={attentuationLevelHandler} />
           <br></br>

           <label>Contributed by</label>
           <input type="text" name="contributed_by" value={contributed_by} onChange={contributedByHandler} />
           <br></br>

           <button type="submit">Create</button>
        </form>
     </div>
  )
}


export default NewBeer
