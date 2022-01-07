var animData = {
	wrapper: document.querySelector('#loading'),
	animType: 'svg',
	loop: true,
	prerender: true,
	autoplay: true,
	path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader.json'
};
var anim = bodymovin.loadAnimation(animData);
anim.setSpeed(3.4);


const notionDocId = "935a33f2f7cf4fb2b21f068828e9547c"

fetch("https://potion-api.now.sh/html?id=" + notionDocId)
  .then(res => res.text())
  .then(text => {
    document.querySelector("main").innerHTML = text
  })
