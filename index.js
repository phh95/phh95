const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

---
### My GitHub Contributions    

![](https://raw.githubusercontent.com/phh95/phh95/main/assets/github-contribution-grid-snake.svg)          

### About me      

[![Angola peng's GitHub stats](https://github-readme-stats.vercel.app/api?username=phh95&show_icons=true&theme=radical)](https://github.com/anuraghazra/github-readme-stats)
![Angola peng's Most used languages](https://github-readme-stats.vercel.app/api/top-langs/?username=phh95&layout=compact&hide_border=true&langs_count=10)

I'm angola, a new-media editor.    

- 🔭 I’m currently striving for a better life in Guangzhou.     
- 🤔 My blog 👉 https://penghh.fun/         
- 💬 Ask me some questions about Effeciency Tools 👉 https://wx.zsxq.com/dweb2/index/group/88512424255582
- 📫 My E-mail: 602646761#qq.com          
- 🔧 My Power Tools: </br>   
![](https://img.shields.io/badge/%E5%86%99%E4%BD%9C%E5%B7%A5%E5%85%B7-VS%20Code-blue)     
![VS Code](https://img.shields.io/badge/%E5%86%99%E4%BD%9C%E5%B7%A5%E5%85%B7-VS%20Code-blue)     
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=flat-square&logo=Visual-Studio-Code&logoColor=white)       
![MWeb](https://img.shields.io/badge/%E5%9B%BE%E5%BA%8A-MWeb-lightgrey)          
![Git](https://img.shields.io/badge/-Git-black?style=plastic&logo=git)     
\
`

console.log(readme)
