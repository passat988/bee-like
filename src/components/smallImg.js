const SmallImg = (props) => {
   const arrPhoto = props.arrPhoto
   const setCurPhoto = props.setCurPhoto
  const miniImg = arrPhoto.map((img) => (
    <li key={img.photo}>
      <a href={img.photo} onClick={(e)=>{
        e.preventDefault()
        setCurPhoto(img.photo)
        }
      }
         title="Image 2">
        <img src={img.mini} />
      </a>
    </li>
  ));
  return <ul id="thumbs">{miniImg}</ul>;
};

export { SmallImg };
