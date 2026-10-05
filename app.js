const defaultPosts = [
  {title:"Wedding Decoration", image:"assets/placeholder.svg"},
  {title:"Flower Stage", image:"assets/placeholder.svg"},
  {title:"Birthday Setup", image:"assets/placeholder.svg"}
];
function getPosts(){try{return JSON.parse(localStorage.getItem("goldenEventsPosts"))||defaultPosts}catch(e){return defaultPosts}}
function renderGallery(){
 const g=document.getElementById("galleryGrid"); if(!g)return;
 const posts=getPosts();
 if(!posts.length){g.innerHTML='<div class="empty">No photos added yet. Admin can add the first event photo.</div>';return}
 g.innerHTML=posts.map(p=>`<figure><img src="${p.image}" alt="${escapeHtml(p.title)}" onerror="this.style.opacity=.25"><figcaption>${escapeHtml(p.title)}</figcaption></figure>`).join("");
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
document.querySelector(".menu")?.addEventListener("click",()=>document.querySelector(".nav").classList.toggle("open"));
document.getElementById("year").textContent=new Date().getFullYear();
renderGallery();
