import { useState, useRef } from 'react';
import './App.css';
import TabElem from '../TabElem/TabElem.tsx';
import { doSort, validateDate, validateKm } from './functionsForApp.ts'

/* type BDtype = {
   key: number,
    date: string,
    km: string
} */

function App() {
  

  const [BD, setForm] = useState<any>([
    {key: 123, date:'дд.мм.гг', km: "ч.ч"}
  ]);

  


  const [count, setCount] = useState<any>(0);



  const refDate = useRef<HTMLInputElement>(null);
  const refKm = useRef<HTMLInputElement>(null);



  function butClick (e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    let stut:boolean = true;

 
    
    if (!validateDate(refDate.current?.value) || refDate.current?.value.length > 8) {
      alert('Вводимый формат даты: ДД.ММ.ГГ');
      return
    }

    if (!validateKm(refKm.current?.value)) {
      alert('Расстояние должно указываться только числами');
      return
    }

    /* if (BD.length === 0) { stut = false; } */

    if (BD.length != 0) {
      BD.forEach((element:any) => {
        if (element.date == refDate.current?.value) {
          element.km = Number(element.km) + Number(refKm.current?.value);
          stut = false;
        } 
      });
    }


    /* BD.forEach((element:any) => {
      if (element.date == refDate.current?.value) {
        element.km = Number(element.km) + Number(refKm.current?.value);
        stut = false;
      } 
    }); */

    

    if (!stut){
      setForm(doSort(BD));
      setCount(Math.random());
      /* stut = true; */
    } else {
      BD.push(
        {
          key:Math.random(),
          date: refDate.current?.value,
          km: refKm.current?.value,
          count: {setCount}
        }
      );
      setForm(doSort(BD));
      setCount(Math.random());
      stut = true;
    }
    

    /* console.log(stut) */

  }

  

  return (
    <div className="box" >
      <form className="box__form" >
        <div className="box__form__elem">
          <label htmlFor="date" className="box__form__elem__label">Дата (ДД.ММ.ГГ)</label>
          <br/>
          <input className="box__form__elem__input" type="text" id ="date" ref={ refDate }/>
        </div>
        <div className="box__form__elem">
          <label htmlFor="way" className="box__form__elem__label">Пройдено км</label>
          <br/>
          <input className="box__form__elem__input" type="text" id ="way" ref={ refKm }/>
        </div>
        <button className="box__form__but" onClick={ butClick }>OK</button>
      </form>
      <TabElem inf = {BD} />
    </div>
  )
}

export default App
