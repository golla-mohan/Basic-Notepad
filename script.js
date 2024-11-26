const savebtn=document.getElementById('save')
const edit=document.getElementById('areaoftext')
const clearbtn=document.getElementById('clear')
const themesbtn=document.getElementById('themes')
const body=document.body
savebtn.addEventListener('click',()=>{
    const text=edit.value
    const blod=new Blob([text],{type:'text/plain'})
    const anchor=document.createElement('a')
    anchor.href=URL.createObjectURL(blod)
    anchor.download="note.txt"
    anchor.click()

})
clearbtn.addEventListener('click',()=>{
    edit.value=""
})
themesbtn.addEventListener('click',()=>{
    body.classList.toggle('dark-mode');
})

