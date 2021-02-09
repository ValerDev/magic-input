let counter = 0;
const comment = document.createElement('span')
const magicInput = document.createElement('textarea')
magicInput.setAttribute('class', 'magicInput')
comment.setAttribute('class', 'comment')

const openTask = () => {
    if (counter === 0) {
        document.querySelector('.input-block').classList.add('activation')
        document.querySelector('.input-block code').removeChild(document.querySelector('.input-block code span'))
        document.querySelectorAll('.input-block>*').forEach(element => {
            element.classList.add('activated')
        });
        counter++
    }
}

const checkSymbol = () => {
    let task = document.querySelector('code')
    if (task.innerText.includes('//')) {
        task.append(comment)
        task.append(magicInput)
        magicInput.focus()
        comment.innerText = magicInput.value
        console.log();
    }
}