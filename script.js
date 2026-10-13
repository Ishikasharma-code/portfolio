document.getElementById('yr').textContent=new Date().getFullYear();
var R=document.documentElement;
try{var t=localStorage.getItem('th');if(t)R.setAttribute('data-theme',t);else R.setAttribute('data-theme','dark')}catch(e){R.setAttribute('data-theme','dark')}
document.getElementById('th').onclick=function(){var n=R.getAttribute('data-theme')==='dark'?'light':'dark';R.setAttribute('data-theme',n);try{localStorage.setItem('th',n)}catch(e){}};
var nv=document.getElementById('nv');
document.getElementById('mb').onclick=function(){nv.classList.toggle('open')};
nv.onclick=function(){nv.classList.remove('open')};
var el=document.getElementById('ty'),w='Ishika Sharma',i=0;
if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.textContent=w}else{(function k(){el.textContent=w.slice(0,++i);if(i<w.length)setTimeout(k,110)})()}
var links=[].slice.call(nv.querySelectorAll('a'));
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+x.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section').forEach(function(s){io.observe(s)});

document.getElementById('cf').onsubmit=function(ev){ev.preventDefault();
var b='Name: '+n.value+'\nEmail: '+e.value+'\n\n'+m.value;
location.href='mailto:ishikasharma7224@gmail.com?subject='+encodeURIComponent(s.value)+'&body='+encodeURIComponent(b)};
