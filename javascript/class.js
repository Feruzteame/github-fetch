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
      .then(data => data.json())
      .then(data =>{
        console.log(data)
        if(this.input === '' ){
          alert('Please put invalid user name.')
        }else{
            document.getElementById('info').style.display = 'none';
            div2.style.display = 'none';
            div1.innerHTML = 
              `<p style='font-size:18px'> <span style='color:blue; font-size:18px'> Name </span> <br/> ${data.name} </p>
              <p style='font-size:18px'> <span style='color:blue; font-size:18px'> Location </span> <br/>${data.location} </p>
              <p style='font-size:18px'> <span style='color:blue; font-size:18px'> Following </span> <br/> ${data.following} </p>
              <p style='font-size:18px'> <span style='color:blue; font-size:18px'> Followers </span> <br/> ${data.followers} </p>
              <p style='font-size:18px'> <span style='color:blue; font-size:18px'> Blog </span> <br/> ${data.blog} </p>
              <p style='font-size:18px'> <span style='color:blue; font-size:18px'> Bio </span> <br/> ${data.bio} </p>
              <p style='font-size:18px'> <span style='color:blue; font-size:18px'> Company </span> <br/> ${data.company} </p>
              <p style='font-size:18px'> <span style='color:blue; font-size:18px'> Type </span> <br/> ${data.type} </p>
              <p style='font-size:18px'> <span style='color:blue; font-size:18px'> Public repository </span> <br/> ${data.public_repos} </p>
              <p style='font-size:18px'> <span style='color:blue; font-size:18px'> Email </span> <br/> ${data.email} </p>`
            div1.style.display  = 'block';
        }
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
      if(this.input === '' ){
          alert('Please put invalid user name.')
        }else{
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
          div2.style.display  = 'block';
       }
      }
    })
    .catch(err => {
        alert(err)
    })
  }
   
 }
