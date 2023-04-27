const colorChange = ()=>{
  const getrnd = ()=>{
    return (5+Math.floor(Math.random()))*20;
  }
  const colors = ["#FF4136", "#0074D9", "#2ECC40", "#FFDC00", "#B10DC9",'#26de09',"#f4d422","#6fbec1","#eaeca5","#2fcea1","#b76280","#df379e"]
    let index = 0;

    function changeColor() {
      const words = document.getElementsByClassName("book-span");

      if (words.length > 0) {
        const colorIndex = Math.floor(Math.random() * colors.length);
        const color = colors[colorIndex];
        words[index].style.textShadow = `2px 2px ${getrnd()}px${color},-2px 2px ${getrnd()}px${color}, 2px -2px ${getrnd()}px${color} ,-2px -2px ${getrnd()}px${color}`;
        index++;
        if (index >= words.length) {
          index = 0;
        }
      }
    }
    const interval = setInterval(changeColor, 1000);

    return () => clearInterval(interval);
  }

export default colorChange;