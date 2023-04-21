const shineh = ()=>{
    function changeColor() {
        
    }
    const interval = setInterval(changeColor, 1000);

    return () => clearInterval(interval);
}
export default shineh;