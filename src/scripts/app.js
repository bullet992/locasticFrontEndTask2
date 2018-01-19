import 'normalize.css';
import './../css/style.scss';
import './navbar.js';
import './responsiveslides.js';
import './loadmore.js';

// *********** SLIDESHOW *********** //
import firstSlide from '../images/1.jpg';
import secondSlide from '../images/2.jpg';
import thirdSlide from '../images/3.jpg';

var img1 = document.getElementById('firstSlide');
img1.src = firstSlide;
var img2 = document.getElementById('secondSlide');
img2.src = secondSlide;
var img3 = document.getElementById('thirdSlide');
img3.src = thirdSlide;

// *********** ARTICLES *********** //
import articlePic from '../images/article.jpg';
var n = 7;
var article = [];
for(var i=1;i<=n;i++) {
  article[i] = document.getElementById('article_img'+i);
  article[i].src = articlePic;
}