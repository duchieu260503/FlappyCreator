var birdImageInputt1 = document.getElementById("birdImageInput1")
var birdImageInputt2 = document.getElementById("birdImageInput2")
var birdImageInputt3 = document.getElementById("birdImageInput3")
var birdImageInputt4 = document.getElementById("birdImageInput4")
var birdImageInputt5 = document.getElementById("birdImageInput5")


var birdImagee1 = document.getElementById("birdImage1")
var birdImagee2 = document.getElementById("birdImage2")
var birdImagee3 = document.getElementById("birdImage3")
var birdImagee4 = document.getElementById("birdImage4")
var birdImagee5 = document.getElementById("birdImage5")


var flapAudioo = document.getElementsByClassName("flapAudio")
var flapAudioInputt = document.getElementsByClassName("flapAudioInput")
var flapAudioSrcc = document.getElementsByClassName("flapAudioSrc")
var playFlapAudioo = document.getElementsByClassName("playFlapAudio")
var gameCreatorr = document.getElementById("gameCreator")


birdImageInputt1.addEventListener('keyup', (e)=>{
    birdImagee1.src = e.target.value || "data:image/jpeg;base64,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"
})
birdImageInputt2.addEventListener('keyup', (e)=>{
    birdImagee2.src = e.target.value || "https://flappycreator.com/default/tube1.png"
})
birdImageInputt3.addEventListener('keyup', (e)=>{
    birdImagee3.src = e.target.value || "https://flappycreator.com/default/tube2.png"
})
birdImageInputt4.addEventListener('keyup', (e)=>{
    birdImagee4.src = e.target.value || "https://flappycreator.com/default/bg.png"
})
birdImageInputt5.addEventListener('keyup', (e)=>{
    birdImagee5.src = e.target.value || "https://flappycreator.com/default/ground.png"
})

flapAudioInputt[0].addEventListener('keyup', (e)=>{
    flapAudioSrcc[0].src = "sfx/choices/" + (e.target.value) + ".mp3"
})
playFlapAudioo[0].addEventListener('click', ()=>{
    flapAudioo[0].load()
    flapAudioo[0].play()
})

flapAudioInputt[1].addEventListener('keyup', (e)=>{
    flapAudioSrcc[1].src = "sfx/choices/" + (e.target.value) + ".mp3"
})
playFlapAudioo[1].addEventListener('click', ()=>{
    flapAudioo[1].load()
    flapAudioo[1].play()
})

flapAudioInputt[2].addEventListener('keyup', (e)=>{
    flapAudioSrcc[2].src = "sfx/choices/" + (e.target.value) + ".mp3"
})
playFlapAudioo[2].addEventListener('click', ()=>{
    flapAudioo[2].load()
    flapAudioo[2].play()
})


gameCreatorr.addEventListener('click',()=>{
    localStorage.setItem('gameData', JSON.stringify({
        birdImagee1: birdImageInputt1.value,
        birdImagee2: birdImageInputt2.value,
        birdImagee3: birdImageInputt3.value,
        birdImagee4: birdImageInputt4.value,
        birdImagee5: birdImageInputt5.value
    }))
    window.location.href = 'index.html'
})