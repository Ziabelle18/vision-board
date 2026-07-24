
const cards = [

{
title:"About Me",
content:"Dreamer with ambition"
},

{
title:"Strengths",
content:"Resilient, Independent"
},

{
title:"Future Goals",
content:"Travel, Freedom, Business"
},

{
title:"Healing Journey",
content:"Growing every day"
},

{
title:"Fashion Style",
content:"Elegant • Timeless"
},

{
title:"Big Dreams",
content:"Perform on bigger stages"
},

{
title:"Things I Love",
content:"Singing • Coffee • Horror Movies"
},

{
title:"Daily Reminder",
content:"You got this."
}

];

const board=document.getElementById("vision-board");

cards.forEach(card=>{

const div=document.createElement("div");

div.className="card";

div.innerHTML=`

<h2>${card.title}</h2>

<p>${card.content}</p>

`;

board.appendChild(div);

});
