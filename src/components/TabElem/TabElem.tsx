import './TabElem.css';




function TabElem({ inf }:any) {



  function action(e: React.MouseEvent<HTMLElement>) {
    let comp:any = e.target;
    comp.parentElement.classList.add("cover");
    
  }

 

  let elems: any = [];

  inf.forEach( (e: any) => {
    elems.push ( 
      <div className="tab-box__tabel__elems" key = {e.key}>
        <div className="tab-box__tabel__elems__elem">{e.date}</div>
        <div className="tab-box__tabel__elems__elem">{e.km}</div>
        <div className="tab-box__tabel__elems__elem" onClick={action}>✎ ✘</div>
      </div>
    )
    
  });


  return (
    <div className="tab-box">
      <div className="tab-box__titles">
        <span className="tab-box__titles_itile">Дата (ДД.ММ.ГГ)</span>
        <span className="tab-box__titles_itile">Пройдено км</span>
        <span className="tab-box__titles_itile">Действия</span>
      </div>
      <div className="tab-box__tabel">
        { elems }
      </div>
    </div>
  )
}

export default TabElem
