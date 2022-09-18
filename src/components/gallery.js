import a from "../styles/img/eea204c4-b3e3-437c-a6bd-da27bba3cd4a.jpg"
import b from "../styles/img/eea204c4-b3e3-437c-a6bd-da27bba3cd4a.jpg"
import c from "../styles/img/c0159799-23bc-43c1-bb0d-d547232c0ab6.jpg"
import d from "../styles/img/9212239e-6a93-43ff-b46b-89c5fc089d1a.jpg"
import e from "../styles/img/eea204c4-b3e3-437c-a6bd-da27bba3cd4a.jpg"
import f from "../styles/img/9212239e-6a93-43ff-b46b-89c5fc089d1a.jpg"
import mini1 from "../styles/img/mini1.jpg"
import mini2 from "../styles/img/mini2.jpg"
import mini3 from "../styles/img/mini3.jpg"

const thumbs = document.getElementById('thumbs')

const setPhoto = function(event) {
  event.preventDefault();
  let thumbnail = event.target.closest('a');
  if (!thumbnail) return;
  showThumbnail(thumbnail.href, thumbnail.title);
  
}

function showThumbnail(href, title) {
  const largeImg = document.getElementById('largeImg')
  largeImg.src = href;
  largeImg.alt = title;
}

const Gallery = () => {
    return (
        <section className="gallery">
        <p><img id="largeImg" src={a} alt="Large image"/></p>

        <ul id="thumbs" onClick={setPhoto}>
          <li>
            <a href={b} title="Image 2"><img src={mini1}/></a>
          </li>
          <li>
            <a href={c} title="Image 3"><img src={mini2}/></a>
          </li>
          <li>
            <a href={d} title="Image 4"><img src={mini3}/></a>
          </li>
          <li>
            <a href={e} title="Image 5"><img src={mini1}/></a>
          </li>
          <li>
            <a href={f} title="Image 6"><img src={mini3}/></a>
          </li>
        </ul>
      </section>
    );
  };
  
  export default Gallery;