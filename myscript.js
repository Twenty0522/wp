function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}
console.log(getRandomInt(999)+1);

<form>
<input type="number" ondrop="return false;" onpaste="return false;"
onkeypress="return event.charCode>=48 && event.charCode<=57" required/>
<button type="submit" value="Submit">按我對獎</button>
</form>
