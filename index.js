const getFirstSelector = (selector) => {
   return document.querySelector(selector);
} 

const nestedTarget = () => {
   return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div') ;
}

function increaseRankBy(n) {
  const listRanked = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < listRanked.length; i++) {
    const element = listRanked[i].innerHTML = (i + n).toString()
  }

}