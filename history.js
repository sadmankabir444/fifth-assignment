document.getElementById('show-history-form')
.addEventListener('click', function(){
    console.log('show history btn clicked')
    showSectionById('show-history-form');
})

function showSectionById(id){
    document.getElementById('history-form').classList.add('hidden');
    document.getElementById('donation-form').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

document.getElementById('show-donation-form').addEventListener('click', function(){
    showSectionById('donation-form')
})
document.getElementById('show-history-form').addEventListener('click', function(){
    showSectionById('history-form')
})



