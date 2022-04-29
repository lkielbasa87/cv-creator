  // forms queries
  const educationForm1 = document.querySelector('.education-form');
  const descriptionForm1 = document.querySelector('.description-form');

  // inputs queries
  const inputEducationFromLabel = document.querySelector('#inputEducationFromLabel');
  const inputEducationFrom = document.querySelector('#inputEducationFrom');
  const inputEducationToLabel = document.querySelector('#inputEducationToLabel');
  const inputEducationTo = document.querySelector('#inputEducationTo');
  const inputSchool = document.querySelector('#inputSchool');
  const inputSubject = document.querySelector('#inputSubject');
  const inputTitle = document.querySelector('#inputTitle'); 
  const highschoolEducationFromLabel = document.querySelector('#highschool-education-from-label');
  const highschoolEducationToLabel = document.querySelector('#highschool-education-to-label');
  const highschoolEducationFrom = document.querySelector('#highschool-education-from');
  const highschoolEducationTo = document.querySelector('#highschool-education-to');
  const highschoolName = document.querySelector('#highschool-name');
  const highschoolProfile = document.querySelector('#highschool-profile');

  // box queries
  const firstEntry = document.querySelector('#first-entry');
  const firstEntryHighschool = document.querySelector('#first-entry-highschool');
  const eduDateFrom = document.querySelector('#edu-date-from');
  const eduDateTo = document.querySelector('#edu-date-to');
  const school = document.querySelector('#school');
  const subject = document.querySelector('#subject');
  const eduTitle = document.querySelector('#edu-title');
  
  // boolean variables
  let universitySwitch;
  let highSchoolSwitch;

  // buttons queries
  const educationFormButtonBack = document.querySelector('#educationFormButtonBack');
 
  // articles queries
  const education = document.querySelector('.education');
  const educationHighschool = document.querySelector('.education-highschool');

  // popup query
  const popupWrapper = document.querySelector('.popup-wrapper');
  const popup = document.querySelector('.popup');
  const popupPara = document.querySelector('.popupPara');
  const popupClose = document.querySelector('.popup-close');

  // functions
  const mandatoryField = (message) => {
    // Show message if mandatory field is empty
      popupWrapper.style.display = 'block';
      popupPara.textContent = message;
      popupClose.addEventListener('click', () => {
        popupWrapper.style.display = 'none';    
        popupPara.textContent = '';    
      });    
  };
  


  let optionsArray = Array.from(document.querySelector('#inputEducationSort').options);
  optionsArray.forEach(option => {
    option.addEventListener('click', (e) =>{
      // console.log(e.target.value);
      switch(e.target.value){
        case 'university':
          universitySwitch = true;
          highSchoolSwitch = false;
          // visible elements
          inputEducationFromLabel.style.display = 'block'
          inputEducationFrom.style.display = 'block';
          inputEducationToLabel.style.display = 'block';
          inputEducationTo.style.display = 'block'
          inputSchool.style.display = 'block';
          inputSubject.style.display = 'block';
          inputTitle.style.display = 'block';     
          // invisible elements     
          highschoolEducationFromLabel.style.display = 'none';
          highschoolEducationFrom.style.display = 'none';
          highschoolEducationToLabel.style.display = 'none';
          highschoolEducationTo.style.display = 'none';
          highschoolName.style.display = 'none';
          highschoolProfile.style.display = 'none';   
          break;      
        case 'highschool':
          highSchoolSwitch = true;
          universitySwitch = false;
          // visible elements
          highschoolEducationFromLabel.style.display = 'block';
          highschoolEducationFrom.style.display = 'block';
          highschoolEducationToLabel.style.display = 'block';
          highschoolEducationTo.style.display = 'block';
          highschoolName.style.display = 'block';
          highschoolProfile.style.display = 'block';
          // invisible elements
          inputEducationFromLabel.style.display = 'none';
          inputEducationFrom.style.display = 'none';
          inputEducationToLabel.style.display = 'none';
          inputEducationTo.style.display = 'none';
          inputSchool.style.display = 'none';
          inputSubject.style.display = 'none';
          inputTitle.style.display = 'none';
          break;
        }
      });
    });

    educationForm1.addEventListener('submit', e => {
      e.preventDefault();
      let eduArticle = document.createElement('article');
      let eduArticleHighschool = document.createElement('article');
      let testDate = new Date().toISOString().slice(0,10);
      let dateTo;
    
    if(highschoolEducationFrom.value == '' && highSchoolSwitch){
      popupWrapper.style.display = 'block';
      popupPara.textContent = 'Proszę uzupełnić datę rozpoczęcia etapu edukacji';
      popupClose.addEventListener('click', () => {
        popupWrapper.style.display = 'none';
        popupPara.textContent = '';
      });
    } else if((highschoolEducationTo.value < highschoolEducationFrom.value) && (highschoolEducationTo.value != '') && highSchoolSwitch){
      popupWrapper.style.display = 'block';
      popupPara.textContent = 'Data zakończenia etapu edukacji nie może byc mniejsza niż data rozpoczęcia';
      popupClose.addEventListener('click', () => {
        popupWrapper.style.display = 'none';
        popupPara.textContent = '';
      });
    } else if(highschoolEducationTo.value == '' && highSchoolSwitch){
      popupWrapper.style.display = 'block';
      let currentDateHighschoolDiv = document.createElement('div');
      currentDateHighschoolDiv.innerHTML = `
        <p>Czy obecnie nadal się tu kształcisz?</p><br>
        <button class="currentDateButtonHighschool btn btn-primary">Tak</button>
        <button class="diffrentDateButtonHighschool btn btn-primary">Nie</button>
      `;
      popup.append(currentDateHighschoolDiv);
      popupClose.addEventListener('click', () => {
        popupWrapper.style.display = 'none';
        currentDateHighschoolDiv.remove();
      });
      const currentDateButtonHighschool = document.querySelector('.currentDateButtonHighschool');
      const diffrentDateButtonHighschool = document.querySelector('.diffrentDateButtonHighschool');
      currentDateButtonHighschool.addEventListener('click', () => {
        let todayHighschool = new Date().toISOString().slice(0,10);
        highschoolEducationTo.value = todayHighschool;
        currentDateHighschoolDiv.remove();
        popupWrapper.style.display = 'none';
      });
      diffrentDateButtonHighschool.addEventListener('click', () => {
        currentDateHighschoolDiv.remove();
        popupPara.textContent = 'W takim razie proszę uzupełnić datę zakończenia etapu edukacji';
        popupClose.addEventListener('click', () => {
          popupWrapper.style.display = 'none';
          popupPara.textContent = '';
        });
      });
    } else if(highschoolName.value == '' && highSchoolSwitch){
      popupWrapper.style.display = 'block';
      popupPara.textContent = 'Proszę uzupełnić nazwę szkoły';
      popupClose.addEventListener('click', () => {
        popupWrapper.style.display = 'none';
        popupPara.textContent = '';
      });
    } else if(highschoolProfile.value == '' && highSchoolSwitch){
      popupWrapper.style.display = 'block';
      popupPara.textContent = 'Proszę uzupełnić nazwę profilu / wyuczonego zawodu';
      popupClose.addEventListener('click', () => {
        popupWrapper.style.display = 'none';
        popupPara.textContent = '';
      })
      ///////////////////////////////////////////////////////////////////////////////////////
    } else {
      if(highschoolEducationTo.value >= testDate && highSchoolSwitch){
        dateTo = 'obecnie';        
      } else {
        dateTo = highschoolEducationTo.value;
      }
      eduArticleHighschool.setAttribute('class', 'entry');
      eduArticleHighschool.innerHTML = `
      <div class="edu-date">
        <p>${highschoolEducationFrom.value}</p>
        <p>-</p>
        <p class="dateToP">${dateTo}</p>        
      </div>
      <div class="edu-info">
        <article>
          <h3>${highschoolName.value}</h3>
          <p>${highschoolProfile.value}</p>          
        </article>
      </div>
      <div class="entry-remove">x</div>
      `;

      if(Array.from(educationHighschool.children).includes(firstEntryHighschool) && Array.from(education.children).includes(firstEntry) && highSchoolSwitch){
        firstEntryHighschool.remove();
        firstEntry.remove();
      }

      if(highSchoolSwitch){
        educationHighschool.append(eduArticleHighschool);
      
        let datesToP = document.querySelectorAll('.dateToP');
        
        let datesToPArray = Array.from(datesToP);

        datesToPArray.sort((a,b) => {
          a = a.innerText.split("-").join("");
          b = b.innerText.split('-').join('');        
          return a - b ;
        });
        datesToPArray.reverse();
        for(let i = 0; i < datesToPArray.length; i++){
          // console.log(datesToPArray[i]);
          if(datesToPArray[i].innerText === 'obecnie'){
            console.log('pojawił się testowy ciąg znaków');
            datesToPArray[i] = datesToPArray[0];
          } else {
            educationHighschool.appendChild(datesToPArray[i].parentElement.parentElement);
          }       
        }
      }
    
      
      highschoolEducationFrom.value = '';
      highschoolEducationTo.value = '';
      highschoolName.value = '';
      highschoolProfile.value = '';         

    } 

    if(inputEducationFrom.value == '' && universitySwitch){
      popupWrapper.style.display = 'block';
      popupPara.textContent = 'Proszę uzupełnić datę rozpoczęcia etapu edukacji';
      popupClose.addEventListener('click', () => {
        popupWrapper.style.display = 'none';    
        popupPara.textContent = '';    
      });
    } else if((inputEducationTo.value < inputEducationFrom.value) && (inputEducationTo.value != '') && universitySwitch){
      popupWrapper.style.display = 'block';
      popupPara.textContent = 'Data zakończenia etapu edukacji nie może być mniejsza niż data rozpoczęcia';
      popupClose.addEventListener('click', () => {
        popupWrapper.style.display = 'none';    
        popupPara.textContent = '';    
      });
    } else if(inputEducationTo.value == '' && universitySwitch){
      popupWrapper.style.display = 'block';
      let currentDateDiv = document.createElement('div');
      currentDateDiv.innerHTML = `
        <p>Czy obecnie nadal się tu kształcisz?</p><br>
        <button class="currentDateButton btn btn-primary">Tak</button>
        <button class="diffrentDateButton btn btn-primary">Nie</button>
      `;
      popup.append(currentDateDiv);
      popupClose.addEventListener('click', () => {
        popupWrapper.style.display = 'none';
        currentDateDiv.remove();
      });
      const currentDateButton = document.querySelector('.currentDateButton');
      const diffrentDateButton = document.querySelector('.diffrentDateButton');
      currentDateButton.addEventListener('click', () => {
        let today = new Date().toISOString().slice(0,10);
        inputEducationTo.value = today;
        currentDateDiv.remove();
        popupWrapper.style.display = 'none';
      });  
      diffrentDateButton.addEventListener('click', () => {
        currentDateDiv.remove();
        popupPara.textContent = 'W takim razie proszę uzupełnić datę zakończenia etapu edukacji';
        popupClose.addEventListener('click', () => {
          popupWrapper.style.display = 'none';    
          popupPara.textContent = '';    
        });        
      });    
    } else if(inputSchool.value == '' && universitySwitch){
      popupWrapper.style.display = 'block';
      popupPara.textContent = 'Proszę uzupełnić nazwę uczelni';
      popupClose.addEventListener('click', () => {
        popupWrapper.style.display = 'none';    
        popupPara.textContent = '';    
      });
      
    } else if(inputSubject.value == '' && universitySwitch){
      popupWrapper.style.display = 'block';
      popupPara.textContent = 'Proszę uzupełnić nazwę kierunku';
      popupClose.addEventListener('click', () => {
        popupWrapper.style.display = 'none';
        popupPara.textContent = '';
      });
    } else if(inputTitle.value == '' && universitySwitch){
      popupWrapper.style.display = 'block';
      let optionalTitleDiv = document.createElement('div');
      optionalTitleDiv.innerHTML = `
      <p>Czy chcesz uzupełnić informację o uzyskanym tytule naukowym?</p><br>
      <button class="ifTitleYes btn btn-primary">Tak</button>
      <button class="ifTitleNo btn btn-primary">Nie</button>
      `;
      popup.append(optionalTitleDiv);
      popupClose.addEventListener('click', () => {
        popupWrapper.style.display = 'none';
        optionalTitleDiv.remove();
      });
      const ifTitleYes = document.querySelector('.ifTitleYes');
      const ifTitleNo = document.querySelector('.ifTitleNo');
      ifTitleYes.addEventListener('click', ()=>{
        optionalTitleDiv.remove();
        popupPara.textContent = 'W takim razie proszę uzupełnić właściwe pole';
        popupClose.addEventListener('click', () => {
          popupWrapper.style.display = 'none';    
          popupPara.textContent = '';    
        });        
      });
      ifTitleNo.addEventListener('click', () => {             
        optionalTitleDiv.remove();
        popupWrapper.style.display = 'none';

        if(inputEducationTo.value === testDate){
          dateTo = 'obecnie';        
        } else {
          dateTo = inputEducationTo.value;
        }
        eduArticle.setAttribute('class', 'entry');
        eduArticle.innerHTML = `
        <div class="edu-date">
          <p>${inputEducationFrom.value}</p>
          <p>-</p>
          <p>${dateTo}</p>        
        </div>
        <div class="edu-info">
          <article>
            <h3>${inputSchool.value}</h3>
            <p>${inputSubject.value}</p>            
          </article>
        </div>
        <div class="entry-remove">x</div>
        `;
        education.append(eduArticle);
        inputEducationFrom.value = '';
        inputEducationTo.value = '';
        inputSchool.value = '';
        inputSubject.value = '';
      });
    }
//////////////////////////////////////////////////////////////////////////
    else {

      if(inputEducationTo.value >= testDate && universitySwitch){
        dateTo = 'obecnie';        
      } else {
        dateTo = inputEducationTo.value;
      }
      eduArticle.setAttribute('class', 'entry');
      eduArticle.innerHTML = `
      <div class="edu-date">
        <p>${inputEducationFrom.value}</p>
        <p>-</p>
        <p class="dateToP">${dateTo}</p>        
      </div>
      <div class="edu-info">
        <article>
          <h3>${inputSchool.value}</h3>
          <p>${inputSubject.value}</p>
          <p>Uzyskany tytuł: ${inputTitle.value}</p>
        </article>
      </div>
      <div class="entry-remove">x</div>
      `;
      
      if(Array.from(education.children).includes(firstEntry) && Array.from(educationHighschool.children).includes(firstEntryHighschool) && universitySwitch){
        firstEntry.remove();
        firstEntryHighschool.remove();
      }

      if(universitySwitch){
        education.append(eduArticle);
            
        let datesToP = document.querySelectorAll('.dateToP');
        
        let datesToPArray = Array.from(datesToP);

        datesToPArray.sort((a,b) => {
          a = a.innerText.split("-").join("");
          b = b.innerText.split('-').join('');        
          return a - b ;
        });
        datesToPArray.reverse();
        for(let i = 0; i < datesToPArray.length; i++){
          // console.log(datesToPArray[i]);
          if(datesToPArray[i].innerText === 'obecnie'){
            console.log('pojawił się testowy ciąg znaków');
            datesToPArray[i] = datesToPArray[0];
          } else {
            education.appendChild(datesToPArray[i].parentElement.parentElement);
          }       
        }
      }
     
      
      inputEducationFrom.value = '';
      inputEducationTo.value = '';
      inputSchool.value = '';
      inputSubject.value = '';
      inputTitle.value = '';      
    };
  

    // Usuwanie wpisu
    const entryRemove = document.querySelectorAll('.entry-remove');
    entryRemove.forEach(entry => {
      entry.addEventListener('click', (e) => {
        e.target.parentElement.remove();
      });
    });    

  });
      
  
  

  // Przejście do poprzedniego formularza
  educationFormButtonBack.addEventListener('click', () => {
    educationForm1.style.display = 'none';
    descriptionForm1.style.display = 'block';
    
  });

  