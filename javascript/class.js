export default  class Profile{
    
    constructor(input){
         this.input = input
         input = document.getElementById('input').value
      }
    // Personal profile class
    person(){
        const div1 = document.getElementById('div1');
        const div2= document.getElementById('div2');
        
        fetch('https://api.github.com/users/'+this.input)
        .then(data1 => data1.json())
        .then(data1 =>{
    
            document.getElementById('info').style.display = 'none';
            div2.style.display = 'none';
            
            div1.innerHTML = `Name: \xa0\xa0\ ${data1.name} <br>
                             Location: \xa0\xa0\   ${data1.location} <br> 
                             Following: \xa0\xa0\   ${data1.following}<br>  
                             Followers: \xa0\xa0\ ${data1.followers}<br>
                             Blog: \xa0\xa0\ ${data1.blog}<br>
                             Bio: \xa0\xa0\ ${data1.bio}<br>
                             Company: \xa0\xa0\ ${data1.company}<br>
                             Type: \xa0\xa0\ ${data1.type}<br>
                             Public reporstory: \xa0\xa0\ ${data1.public_repos}<br>
                             Email: \xa0\xa0\ ${data1.email}<br>`
           div1.style.display  = 'block';
         })
        .catch(err =>{
            alert(err)
        })
   }
   // personal repo class
   githubPro(){
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
    
    fetch('https://api.github.com/users/'+this.input+'/repos')
    .then(data =>data.json())
    .then( data => {
        
        div1.style.display  = 'none';
        document.getElementById('info').style.display = 'none';
        div1.style.display = 'none';
        let i;
        for(i in data){
           
           const h3 = document.createElement('h3');
           h3.innerHTML = data[i].name;
           h3.classList = 'h3'
           div2.appendChild(h3);

           const link = document.createElement('a');
           link.innerHTML = "Repository";
           link.classList = 'link';
           link.target = '_blank';
           link.setAttribute('href', `${data[i].html_url}`)
           div2.appendChild(link);

           const link1 = document.createElement('a');
           link1.innerHTML = "Live";
           link1.classList = 'link1';
           link1.target = '_blank';
           link1.setAttribute('href', `${data[i].homepage}`)
           div2.appendChild(link1);
 
           const hr = document.createElement('hr');
           hr.classList = 'hr'
           div2.appendChild(hr);

       
           div2.style.display  = 'block';;
     }
       })
    .catch(err => {
        alert(err)
    })
  }
   
 }
