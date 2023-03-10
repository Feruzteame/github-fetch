import Repository from './class.js'
import Profile from './class.js'

// personal profile call
function call1(){
  const input = document.getElementById('input').value;
  let get = new Profile(input)
  get.person();
}
// personal repo call
function call2(){
  const input = document.getElementById('input').value;
  let get = new Repository(input)
  get.githubPro();
 }

document.getElementById('submit3').addEventListener('click', call1);
document.getElementById('submit2').addEventListener('click', call2);
