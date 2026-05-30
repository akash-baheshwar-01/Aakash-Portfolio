// Set current year in footer
document.addEventListener('DOMContentLoaded',function(){
  const y=document.getElementById('year');
  if(y) y.textContent=(new Date()).getFullYear();

  // Card click: toggle active visual state
  document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click',()=>card.classList.toggle('active'))
  })
  
  // Highlight active nav link based on current path
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && href.endsWith(path)) a.classList.add('active');
    // For single-page index anchors, enable smooth scroll
    if(href && href.startsWith('#')){
      a.addEventListener('click',e=>{
        e.preventDefault();
        const id=a.getAttribute('href').slice(1);
        const el=document.getElementById(id);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      })
    }
  })
  
  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    })
  }, {threshold:0.1});
  
  document.querySelectorAll('.fade-in, .service-card').forEach(el=>{
    observer.observe(el);
  })
  
  // Smooth hover effect on project cards
  document.querySelectorAll('.project-card').forEach(card=>{
    card.addEventListener('mouseenter',function(){
      this.style.transform='translateY(-12px)';
    })
    card.addEventListener('mouseleave',function(){
      this.style.transform='translateY(0)';
    })
  })
})
