import React, { useState } from 'react';
import { app, ref, getStorage, uploadBytes, token } from './firebase';


const storage = getStorage()





function NewChalka() {

  const [nazev, setNazev] = useState("")
  const [img, setImg] = useState("")
  console.log(img);

  function submit(){

    const spaceRef = ref(storage, `images/${img.name}`);
    
    
    console.log(spaceRef);
    uploadBytes(spaceRef, img).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      console.log(snapshot);
      const httpsReference = ref(storage, `https://firebasestorage.googleapis.com/v0/b/chalky-69039.appspot.com/o/images%2F${img.name}?alt=media&token=${token}`);
      console.log(httpsReference);
    });
  }

  return <div>
    <h2>Nová chálka</h2>
    <input onChange={e=>setNazev(e.target.value)} value={nazev} className='newchalkaInput' placeholder='Název chálky' type="text" />
    <input onChange={e=>setImg(e.target.files[0])} type="file" />
    <button onClick={submit}>Poslat</button>
  </div>;
}

export default NewChalka;
