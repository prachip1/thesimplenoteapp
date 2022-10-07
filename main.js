const addThemebtn = document.querySelector('.add_card');

const cardThemes = document.querySelector('.card_themes');
const cardTheme = cardThemes.querySelectorAll('.card_theme');
const cardCont = document.querySelector('.card_con');

let count = 0;

const editable = [];
addThemebtn.addEventListener('click', () =>{

    if(count%2 ==0){
        for(let i =0; i<cardTheme.length; i++){
            setTimeout(function(){
                cardTheme[i].style.transform = `translateY(0px)` ;
                cardTheme[i].style.display = 'block';
            }, 50 * i);
        }

    }
    else{
        for(let i =0; i<cardTheme.length; i++){
            setTimeout(function(){
                cardTheme[cardTheme.length -1 - i].style.transform = `translateY(${cardTheme.length -1 - i} * -40px)` ;
                cardTheme[cardTheme.length -1 - i].style.display = 'none';
            }, 50 * i);
        }
    }
  count += 1;
   
})

cardTheme.forEach(elem => {

    elem.addEventListener('click',() =>{

        if(document.querySelector('.card_template')) {
            document.querySelector('.card_template').remove();
        }
        
        let color = elem.style.backgroundColor;


    const card = document.createElement('div');
    card.classList.add('card', 'addAnim');

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let months = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];

    card.innerHTML = `
    <div class="card addAnim">
      <span class="card_title">
        Lorem ipsum doolor sit amet consectetur adipisicing elit
        </span>
        <span class="card_footer">
        <small>${months[month]} ${day}, ${year}</small>
         <small class="card_edit"><i class="fas fa-pen"></i></small>
         <span>
         </div>`;

         card.style.backgroundColor = color;
         cardCont.prepend(card);

         const cards = document.querySelectorAll('.card');

         cards.forEach((card, cardCount) =>{
           
            editable[cardCount] = false;

            card.querySelector('.card_edit').addEventListener('click', ()=>{

           if(editable[cardCount]){

            card.querySelector('.card_title').contentEditable = 'false';
            editable[cardCount] = false;
            card.querySelector('.card_edit').innerHTML = '<i class="fas fa-pen"></i>'
           }
           
           else{

            card.querySelector('.card_title').contentEditable = 'true';
            editable[cardCount] = true;
            card.querySelector('.card_edit').innerHTML = '<i class="fas fa-save"></i>'

           }
         })
         })
    })

  
      
})
