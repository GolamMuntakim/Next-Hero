import AboutContent from "@/Components/AboutContent";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const getTime = async()=>{
  const res = await fetch('http://localhost:3000/time',{next : {revalidate: 5}})
  const data = await res.json()
  return data.currentTime
}
const  AboutPage = async()=> {
  const session = await getServerSession(authOptions)
  console.log(session)
  const currentTime = await getTime()
  return (
    <div>
    <AboutContent></AboutContent>
    <h3>Time: {currentTime}</h3>
    </div>
  )
}
export default AboutPage;