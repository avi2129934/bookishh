async function logJSONData(book_name) {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q="+book_name+"&key=AIzaSyDioGY-PUJ5pWATrtYKgY58eD1rrvXU6zM").catch(err=>{
        return 'No Match Found';
    });
    const jsonData = await response.json()
    console.log(jsonData)
    const clean_data = jsonData.items.map((book)=>{
        if(book && book.volumeInfo.ratingsCount===undefined){
            book.volumeInfo.ratingsCount=0;
            book.volumeInfo.averageRating = 'NA';
        }
        book.volumeInfo.saleInfo = book.saleInfo;
        return (book.volumeInfo);
    })
    const final = clean_data.sort((a,b)=>{
        return b.ratingsCount-a.ratingsCount;
    })
    return final;
  }
export default logJSONData;