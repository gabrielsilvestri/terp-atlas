tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter','ui-sans-serif','system-ui'],
      },
    },
  },
};
    /* ------------------ DATA ------------------ */
    const data=[
      {category:"Relaxamento corporal / Sedativo",clade:"Mirceno",color:"#f97316",aroma:"Manga madura, terra úmida, cravo",bp:"166 °C",effects:"Sedativo; potencializa THC (couch-lock)",uses:"Ansiedade, espasmos, dor",times:["night"],strains:[
        {name:"Orange Bud",type:"Fotoperíodo",genetics:"Skunk #1 x unknown",flower:"8‑9 sem",yield:"450‑500 g/m²",thc:"16‑18%",cbd:"<1%",difficulty:"Fácil",notes:"Perfil cítrico de laranja; boa para extrações.",size:"compact"},
        {name:"Skunk #1",type:"Fotoperíodo",genetics:"Afghani x Acapulco Gold x Colombian",flower:"8 sem",yield:"600 g/m²",thc:"18‑22%",cbd:"≈0.5%",difficulty:"Fácil",notes:"Clássica estável; potente odor.",size:"medium"},
        {name:"Blue Dream",type:"Fotoperíodo",genetics:"Blueberry x Haze",flower:"9‑10 sem",yield:"High",thc:"17‑24%",cbd:"~2%",difficulty:"Média",notes:"Euforia suave; sweet berry.",size:"tall"},
        {name:"White Widow",type:"Fotoperíodo",genetics:"Brazilian Sativa x South Indian Indica",flower:"8‑9 sem",yield:"High",thc:"20‑25%",cbd:"≈1%",difficulty:"Média",notes:"Resin monster; efeito equilibrado.",size:"medium"}
      ]},
      {category:"Elevação de humor / Ansiolítico",clade:"Limoneno",color:"#facc15",aroma:"Casca de limão, laranja, mentolado",bp:"176 °C",effects:"Boost de humor, diminui ansiedade",uses:"Depressão, refluxo (GERD)",times:["morning","afternoon"],strains:[
        {name:"Super Lemon Haze",type:"Fotoperíodo",genetics:"Lemon Skunk x Super Silver Haze",flower:"9‑10 sem",yield:"700 g/m²",thc:"19‑22%",cbd:"<1%",difficulty:"Média",notes:"Premiada; perfil intenso de limão.",size:"tall"},
        {name:"Do-Si-Dos",type:"Fotoperíodo",genetics:"GSC x Face Off OG",flower:"8‑9 sem",yield:"500 g/m²",thc:"21‑25%",cbd:"<1%",difficulty:"Média",notes:"Entrega relaxamento com clareza mental.",size:"medium"}
      ]},
      {category:"Anti-inflamatório / Sem euforia",clade:"Cariofileno & Humuleno",color:"#4ade80",aroma:"Pimenta-do-reino, lúpulo",bp:"199 °C",effects:"Agonista CB2; relaxa sem sedar",uses:"Artrite, colite, ansiedade",times:["afternoon","night"],strains:[
        {name:"Girl Scout Cookies",type:"Fotoperíodo",genetics:"OG Kush x Durban Poison",flower:"9‑10 sem",yield:"500 g/m²",thc:"22‑26%",cbd:"≈1%",difficulty:"Média",notes:"Potente; sabor doce-terroso.",size:"medium"},
        {name:"Bubba Kush",type:"Fotoperíodo",genetics:"Northern Lights x OG Kush",flower:"8‑9 sem",yield:"400 g/m²",thc:"18‑22%",cbd:"≈1%",difficulty:"Fácil",notes:"Efeito calmante profundo.",size:"compact"}
      ]},
      {category:"Clareza mental / Foco",clade:"Pineno",color:"#5eead4",aroma:"Pinheiro, alecrim, resina",bp:"155 °C",effects:"Alerta e broncodilatador",uses:"Asma, fadiga, inflamação",times:["morning","afternoon"],strains:[
        {name:"Harlequin",type:"Fotoperíodo",genetics:"Colombian Gold x Nepali Indica x Thai x Swiss Sativa",flower:"8‑9 sem",yield:"500 g/m²",thc:"6‑8%",cbd:"10‑15%",difficulty:"Média",notes:"CBD rico; clareza sem ansiedade.",size:"medium"},
        {name:"Green Crack",type:"Fotoperíodo",genetics:"Skunk #1 descendant",flower:"7‑9 sem",yield:"600 g/m²",thc:"17‑21%",cbd:"<1%",difficulty:"Fácil",notes:"Energético; mangóide.",size:"tall"}
      ]},
      {category:"Sono profundo / Ansiedade",clade:"Linalol",color:"#60a5fa",aroma:"Lavanda, camomila",bp:"198 °C",effects:"Calmante, indutor do sono",uses:"Insônia, dor neuropática, convulsões",times:["night"],strains:[
        {name:"Lavender Gelato",type:"Fotoperíodo",genetics:"Lavender x Gelato",flower:"9‑10 sem",yield:"Medium",thc:"19‑22%",cbd:"<1%",difficulty:"Média",notes:"Perfil floral doce; relax.",size:"medium"},
        {name:"Zkittlez",type:"Fotoperíodo",genetics:"Grape Ape x Grapefruit",flower:"8‑9 sem",yield:"550 g/m²",thc:"18‑22%",cbd:"≈1%",difficulty:"Média",notes:"Cores lindas e sabor frutado.",size:"medium"}
      ]},
      {category:"Energia & Sociabilidade",clade:"Ocimene",color:"#818cf8",aroma:"Doce, frutado, herbáceo",bp:"198 °C",effects:"Energizante e descongestionante",uses:"—",times:["morning"],strains:[
        {name:"Golden Goat",type:"Fotoperíodo",genetics:"Hawaiian x Romulan",flower:"9‑11 sem",yield:"High",thc:"20‑24%",cbd:"≈1%",difficulty:"Média",notes:"Alegria social; aroma tropical.",size:"tall"},
        {name:"Strawberry Cough",type:"Fotoperíodo",genetics:"Haze x Strawberry Fields",flower:"9‑10 sem",yield:"High",thc:"17‑20%",cbd:"<1%",difficulty:"Média",notes:"Sabor morango; tosse característica.",size:"tall"}
      ]},
      {category:"Criatividade / High cerebral",clade:"Terpinoleno",color:"#d946ef",aroma:"Maçã verde, lilás, sálvia",bp:"186 °C",effects:"Estimulante mental, euforia leve",uses:"Antioxidante, sedativo leve",times:["morning","afternoon"],strains:[
        {name:"Jack Herer",type:"Fotoperíodo",genetics:"Haze x Northern Lights x Shiva Skunk",flower:"8‑9 sem",yield:"600 g/m²",thc:"18‑24%",cbd:"<1%",difficulty:"Média",notes:"High criativo; sabor especiado.",size:"tall"},
        {name:"Ghost Train Haze",type:"Fotoperíodo",genetics:"Ghost OG x Neville's Wreck",flower:"10‑12 sem",yield:"High",thc:"23‑27%",cbd:"<1%",difficulty:"Alta",notes:"Potência extrema; aroma cítrico-pinho.",size:"tall"}
      ]}
    ];

    /* ------------------ STATE ------------------ */
    let wheelVisible=true;const grownStrains=new Set(JSON.parse(localStorage.getItem('grownStrains')||'[]'));

    /* ------------------ WHEEL ------------------ */
    const size=Math.min(600,window.innerWidth-40);let radius=size/2;
    const svg=d3.select('#wheel').append('svg').attr('width',size).attr('height',size).append('g').attr('transform',`translate(${radius},${radius})`);
    const pie=d3.pie().sort(null).value(1);let arc=d3.arc().outerRadius(radius-8).innerRadius(radius*.45);let labelArc=d3.arc().outerRadius(radius*.8).innerRadius(radius*.8);
    const tooltip=d3.select('#tooltip');
    const slices=svg.selectAll('path').data(pie(data)).enter().append('path').attr('d',arc).attr('fill',d=>d.data.color).attr('stroke','#fff').attr('stroke-width',2).style('cursor','pointer')
      .on('mousemove',(e,d)=>{tooltip.style('opacity',1).html(`<strong>${d.data.category}</strong>`).style('left',e.pageX+12+'px').style('top',e.pageY-28+'px');})
      .on('mouseout',()=>tooltip.style('opacity',0))
      .on('click',(_,d)=>showInfo(d.data));
    svg.selectAll('text').data(pie(data)).enter().append('text').attr('transform',d=>`translate(${labelArc.centroid(d)}) rotate(${angle(d)})`).attr('text-anchor','middle').attr('dominant-baseline','middle').attr('class','text-[10px] sm:text-xs font-semibold fill-white pointer-events-none').text(d=>d.data.clade);
    function angle(d){const a=((d.startAngle+d.endAngle)/2)*(180/Math.PI);return(a>90&&a<270)?a+180:a;}

    /* Beauty gradient */
    svg.append('circle').attr('r',radius*.45).attr('fill','url(#grad)');
    const defs=svg.append('defs');defs.append('radialGradient').attr('id','grad').selectAll('stop').data([[0,'#ffffff10'],[1,'#ffffff00']]).enter().append('stop').attr('offset',d=>d[0]).attr('stop-color',d=>d[1]);

    /* ------------------ CARD GRID ------------------ */
    const cardGrid=document.getElementById('cardGrid');
    function renderCards(){cardGrid.innerHTML='';const q=searchInput.value.toLowerCase();const t=timeFilter.value;data.forEach(cat=>{if(t!=='all'&&!cat.times.includes(t))return;const matchCat=cat.category.toLowerCase().includes(q)||cat.clade.toLowerCase().includes(q);let catMatches=false;const strains=cat.strains.filter(s=>{const m=s.name.toLowerCase().includes(q)||matchCat;catMatches=catMatches||m;return m;});if(!strains.length)return;const section=document.createElement('div');section.className='col-span-full';section.innerHTML=`<h3 class='text-lg font-semibold mb-2 flex items-center gap-2'><span class='w-4 h-4 rounded-full inline-block' style='background:${cat.color}'></span>${cat.category}</h3>`;cardGrid.appendChild(section);strains.forEach(s=>{const card=document.createElement('div');card.className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow flex flex-col gap-2';card.innerHTML=`<div class='flex justify-between'><h4 class='font-bold'>${s.name}</h4><button class='text-lg'>${grownStrains.has(s.name)?'⭐':'☆'}</button></div><p class='text-xs text-gray-500 dark:text-gray-400'>${cat.clade}</p><p class='text-sm'>${cat.effects}</p>`;card.querySelector('button').addEventListener('click',()=>toggleGrow(s.name,renderCards));card.addEventListener('click',e=>{if(e.target.tagName==='BUTTON')return;openModal(s);});cardGrid.appendChild(card);});});}

    /* ------------------ LEGEND ------------------ */
    const legend=document.getElementById('legend');
    data.forEach(d=>{const div=document.createElement('div');div.className='flex items-center gap-2 justify-center';div.innerHTML=`<span class='w-4 h-4 rounded-full inline-block' style='background:${d.color}'></span><span>${d.clade}</span>`;legend.appendChild(div);});

    /* ------------------ INFO PANEL ------------------ */
    let currentData=null;function showInfo(item){currentData=item;const panel=document.getElementById('info');panel.classList.remove('hidden');document.getElementById('info-title').textContent=item.category;document.getElementById('info-clade').textContent=`Clade: ${item.clade}`;document.getElementById('info-aroma').textContent=item.aroma;document.getElementById('info-bp').textContent=item.bp;document.getElementById('info-effects').textContent=item.effects;document.getElementById('info-uses').textContent=item.uses||'—';const list=document.getElementById('info-strains');list.innerHTML='';item.strains.forEach(s=>{const btn=document.createElement('button');btn.className='bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-2 py-1 rounded flex items-center gap-1 text-xs';btn.innerHTML=`${grownStrains.has(s.name)?'⭐':'☆'}<span>${s.name}</span>`;btn.addEventListener('click',()=>openModal(s));list.appendChild(btn);});if(window.innerWidth<1024)panel.scrollIntoView({behavior:'smooth'});}  

    /* ------------------ MODAL ------------------ */
    function openModal(strain){const tmpl=document.getElementById('modalTmpl');const modal=tmpl.content.firstElementChild.cloneNode(true);modal.querySelector('#modal-name').textContent=strain.name;modal.querySelector('#modal-type').textContent=strain.type;modal.querySelector('#modal-genetics').textContent=strain.genetics;modal.querySelector('#modal-flower').textContent=strain.flower;modal.querySelector('#modal-yield').textContent=strain.yield;modal.querySelector('#modal-thc').textContent=strain.thc+' / '+(strain.cbd||'—');modal.querySelector('#modal-diff').textContent=strain.difficulty;modal.querySelector('#modal-notes').textContent=strain.notes||'';document.body.appendChild(modal);modal.classList.remove('hidden');modal.addEventListener('click',e=>{if(e.target===modal||e.target.tagName==='BUTTON')modal.remove();});}

    /* ------------------ GROWN STAR ------------------ */
    function toggleGrow(name,rerender){if(grownStrains.has(name)){grownStrains.delete(name);}else{grownStrains.add(name);}localStorage.setItem('grownStrains',JSON.stringify([...grownStrains]));if(rerender)rerender();else showInfo(currentData);}  

    /* ------------------ FILTERS ------------------ */
    const searchInput=document.getElementById('search');const timeFilter=document.getElementById('timeFilter');function applyFilters(){const q=searchInput.value.toLowerCase();const t=timeFilter.value;slices.each(function(d){const matchesText=!q||d.data.category.toLowerCase().includes(q)||d.data.clade.toLowerCase().includes(q)||d.data.aroma.toLowerCase().includes(q)||d.data.effects.toLowerCase().includes(q)||d.data.strains.some(s=>s.name.toLowerCase().includes(q));const matchesTime=t==='all'||d.data.times.includes(t);d3.select(this).attr('opacity',(matchesText&&matchesTime)?1:0.15);});if(!wheelVisible)renderCards();}
    searchInput.addEventListener('input',applyFilters);timeFilter.addEventListener('change',applyFilters);

    /* ------------------ INSPIRE ------------------ */
    document.getElementById('inspireBtn').addEventListener('click',()=>{const t=timeFilter.value;const filtered=data.filter(d=>t==='all'||d.times.includes(t));const random=filtered[Math.floor(Math.random()*filtered.length)];wheelVisible?showInfo(random):openModal(random.strains[Math.floor(Math.random()*random.strains.length)]);});

    /* ------------------ THEME ------------------ */
    document.getElementById('themeToggle').addEventListener('click',()=>document.documentElement.classList.toggle('dark'));

    /* ------------------ VIEW TOGGLE ------------------ */
    const toggleBtn=document.getElementById('toggleView');toggleBtn.addEventListener('click',()=>{wheelVisible=!wheelVisible;document.getElementById('wheelWrapper').classList.toggle('hidden',!wheelVisible);cardGrid.classList.toggle('hidden',wheelVisible);toggleBtn.textContent=wheelVisible?'Cards':'Roda';if(!wheelVisible)renderCards();else applyFilters();});

    /* ------------------ RESIZE ------------------ */
    function resize(){const newSize=Math.min(600,window.innerWidth-40);radius=newSize/2;d3.select('#wheel svg').attr('width',newSize).attr('height',newSize).select('g').attr('transform',`translate(${radius},${radius})`);arc.outerRadius(radius-8).innerRadius(radius*.45);labelArc.outerRadius(radius*.8).innerRadius(radius*.8);svg.selectAll('path').attr('d',arc);svg.selectAll('text').attr('transform',d=>`translate(${labelArc.centroid(d)}) rotate(${angle(d)})`);}window.addEventListener('resize',resize);
