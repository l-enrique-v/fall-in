import React, {useState, useEffect }from 'react'
import generateCompletion from '../../services/openAI';

const FindVeterans=()=> {
const [veterans, setVeterans] = useState()
const [veteranCards, setVeteransCards]=useState()

const inputText = `The top 10 UserIds with simliar hobbies from this JSON:[{"UserId":1,"Hobbies":[{"hobby_name":"Weightlifting"},{"hobby_name":"Weightlifting"},{"hobby_name":"Hunting"},{"hobby_name":"Fishing"},{"hobby_name":"Weightlifting"},{"hobby_name":"Hunting"},{"hobby_name":"Fishing"}]}
and compare to these table rows 
UserId	Hobbies
2	[{"hobby_name":"Hunting"},{"hobby_name":"Woodworking"},{"hobby_name":"Martial arts"},{"hobby_name":"Automotive restoration"}]
6	[{"hobby_name":"Fishing"},{"hobby_name":"Leatherworking"},{"hobby_name":"Survival skills training"},{"hobby_name":"Metalworking"},{"hobby_name":"Leatherworking"},{"hobby_name":"Survival skills training"},{"hobby_name":"Metalworking"}]
7	[{"hobby_name":"Woodworking"},{"hobby_name":"Golfing"},{"hobby_name":"Boxing"},{"hobby_name":"Weightlifting"},{"hobby_name":"Golfing"},{"hobby_name":"Boxing"},{"hobby_name":"Weightlifting"}]
8	[{"hobby_name":"Martial arts"},{"hobby_name":"Hunting"},{"hobby_name":"Fishing"},{"hobby_name":"Woodworking"},{"hobby_name":"Hunting"},{"hobby_name":"Fishing"},{"hobby_name":"Woodworking"}]
9	[{"hobby_name":"Automotive restoration"},{"hobby_name":"Martial arts"},{"hobby_name":"Automotive restoration"},{"hobby_name":"Archery"},{"hobby_name":"Martial arts"},{"hobby_name":"Automotive restoration"},{"hobby_name":"Archery"}]
10	[{"hobby_name":"Archery"},{"hobby_name":"Motorcycling"},{"hobby_name":"BBQ grilling and smoking"},{"hobby_name":"Home brewing"},{"hobby_name":"Motorcycling"},{"hobby_name":"BBQ grilling and smoking"},{"hobby_name":"Home brewing"}]
11	[{"hobby_name":"Motorcycling"},{"hobby_name":"Camping"},{"hobby_name":"Competitive shooting"},{"hobby_name":"Hiking and mountaineering"}]
12	[{"hobby_name":"BBQ grilling and smoking"},{"hobby_name":"Playing sports"},{"hobby_name":"DIY projects"},{"hobby_name":"Leatherworking"}]
13	[{"hobby_name":"Home brewing"},{"hobby_name":"Survival skills training"},{"hobby_name":"Metalworking"},{"hobby_name":"Golfing"}]
14	[{"hobby_name":"Camping"},{"hobby_name":"Boxing"},{"hobby_name":"Weightlifting"},{"hobby_name":"Hunting"}]
15	[{"hobby_name":"Competitive shooting"},{"hobby_name":"Fishing"},{"hobby_name":"Woodworking"},{"hobby_name":"Martial arts"}]
16	[{"hobby_name":"Hiking and mountaineering"},{"hobby_name":"Automotive restoration"},{"hobby_name":"Archery"},{"hobby_name":"Motorcycling"}]
17	[{"hobby_name":"Playing sports"},{"hobby_name":"BBQ grilling and smoking"},{"hobby_name":"Home brewing"},{"hobby_name":"Camping"}]
18	[{"hobby_name":"DIY projects"},{"hobby_name":"Competitive shooting"},{"hobby_name":"Hiking and mountaineering"},{"hobby_name":"Playing sports"}]
19	[{"hobby_name":"Leatherworking"},{"hobby_name":"DIY projects"},{"hobby_name":"Leatherworking"},{"hobby_name":"Survival skills training"}]
20	[{"hobby_name":"Golfing"},{"hobby_name":"Metalworking"},{"hobby_name":"Golfing"},{"hobby_name":"Boxing"}]
21	[{"hobby_name":"Home brewing"},{"hobby_name":"Weightlifting"},{"hobby_name":"Hunting"},{"hobby_name":"Fishing"}]
22	[{"hobby_name":"DIY projects"},{"hobby_name":"Woodworking"},{"hobby_name":"Martial arts"},{"hobby_name":"Automotive restoration"}]
23	[{"hobby_name":"Archery"},{"hobby_name":"Archery"},{"hobby_name":"Motorcycling"},{"hobby_name":"BBQ grilling and smoking"}]
24	[{"hobby_name":"Fishing"},{"hobby_name":"Home brewing"},{"hobby_name":"Camping"},{"hobby_name":"Competitive shooting"}]
25	[{"hobby_name":"Survival skills training"},{"hobby_name":"Hiking and mountaineering"},{"hobby_name":"Playing sports"},{"hobby_name":"DIY projects"}]
26	[{"hobby_name":"Playing sports"},{"hobby_name":"Leatherworking"},{"hobby_name":"Survival skills training"},{"hobby_name":"Metalworking"}]
27	[{"hobby_name":"Competitive shooting"},{"hobby_name":"Golfing"},{"hobby_name":"Boxing"},{"hobby_name":"Weightlifting"}]
28	[{"hobby_name":"Automotive restoration"},{"hobby_name":"Hunting"},{"hobby_name":"Fishing"},{"hobby_name":"Woodworking"}]
29	[{"hobby_name":"Hiking and mountaineering"},{"hobby_name":"Martial arts"},{"hobby_name":"Automotive restoration"},{"hobby_name":"Archery"}]
30	[{"hobby_name":"BBQ grilling and smoking"},{"hobby_name":"Motorcycling"},{"hobby_name":"BBQ grilling and smoking"},{"hobby_name":"Home brewing"}]
31	[{"hobby_name":"Camping"},{"hobby_name":"Camping"},{"hobby_name":"Competitive shooting"},{"hobby_name":"Hiking and mountaineering"}]
32	[{"hobby_name":"Motorcycling"},{"hobby_name":"Playing sports"},{"hobby_name":"DIY projects"},{"hobby_name":"Leatherworking"}]
33	[{"hobby_name":"Martial arts"},{"hobby_name":"Survival skills training"},{"hobby_name":"Metalworking"},{"hobby_name":"Golfing"}]
34	[{"hobby_name":"Leatherworking"},{"hobby_name":"Boxing"},{"hobby_name":"Weightlifting"},{"hobby_name":"Hunting"}]
35	[{"hobby_name":"Woodworking"},{"hobby_name":"Fishing"},{"hobby_name":"Woodworking"},{"hobby_name":"Martial arts"}]
36	[{"hobby_name":"Weightlifting"},{"hobby_name":"Automotive restoration"},{"hobby_name":"Archery"},{"hobby_name":"Motorcycling"}]
37	[{"hobby_name":"Metalworking"},{"hobby_name":"BBQ grilling and smoking"},{"hobby_name":"Home brewing"},{"hobby_name":"Camping"}]
38	[{"hobby_name":"Hunting"},{"hobby_name":"Competitive shooting"},{"hobby_name":"Hiking and mountaineering"},{"hobby_name":"Playing sports"}]
39	[{"hobby_name":"Boxing"},{"hobby_name":"DIY projects"},{"hobby_name":"Leatherworking"},{"hobby_name":"Survival skills training"}]
40	[{"hobby_name":"DIY projects"},{"hobby_name":"Metalworking"},{"hobby_name":"Golfing"},{"hobby_name":"Boxing"}]
41	[{"hobby_name":"Camping"},{"hobby_name":"Weightlifting"},{"hobby_name":"Hunting"},{"hobby_name":"Fishing"}]
42	[{"hobby_name":"Woodworking"},{"hobby_name":"Woodworking"},{"hobby_name":"Martial arts"},{"hobby_name":"Automotive restoration"}]
43	[{"hobby_name":"Automotive restoration"},{"hobby_name":"Archery"},{"hobby_name":"Motorcycling"},{"hobby_name":"BBQ grilling and smoking"}]
44	[{"hobby_name":"BBQ grilling and smoking"},{"hobby_name":"Home brewing"},{"hobby_name":"Camping"},{"hobby_name":"Competitive shooting"}]
45	[{"hobby_name":"Home brewing"},{"hobby_name":"Hiking and mountaineering"},{"hobby_name":"Playing sports"},{"hobby_name":"DIY projects"}]
46	[{"hobby_name":"Golfing"},{"hobby_name":"Leatherworking"},{"hobby_name":"Survival skills training"},{"hobby_name":"Metalworking"}]
47	[{"hobby_name":"Hiking and mountaineering"},{"hobby_name":"Metalworking"},{"hobby_name":"Golfing"},{"hobby_name":"Boxing"},{"hobby_name":"Golfing"},{"hobby_name":"Boxing"},{"hobby_name":"Weightlifting"}]
are
return result as an array []
\n\n`
useEffect(() => {
 getVeteranIds(inputText)
}, []);

const getVeteranIds = async(inputText)=>{
const userIds = await generateCompletion(inputText)
const [userArray]= JSON.parse("[" + userIds + "]")
setVeterans(userIds)
for (let i = 0; i < userArray.length; i++) {
  const element = userArray[i];
  console.log(element)
  console.log(thisUser(element))
  
}

}

const thisUser = async (userId) => {
  return await new Promise((resolve, reject) => {
      fetch(`https://localhost:7293/api/user/${userId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
      })
          .then(response => resolve(response))
          .catch(error => reject( error )) 
  }); 
};


return (
    <div>
      <h3>User Ids</h3>
      <p>
      {veterans}
      {veteranCards}
      </p>
    </div>
  );
}

export default FindVeterans;