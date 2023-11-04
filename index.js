window.onload = function(){
    bookList = []; // book list container
    getJsonObject('data.json',
       function(data) {
             bookList = data; // store the book list into bookList
             console.log(bookList); // print it into console (developer tools)
             console.log(bookList[0]); // print the first book object into console 
             // here you can call methods to laod or refresh the page 
             // loadBooks() or refreshPage()
             addBookList(bookList);      
       },
       function(xhr) { console.error(xhr); }
 ); 

  //dark mode
  const darkToggle = document.getElementById("darkToggle");
  const searchbox = document.getElementById("searchBox");
  const listBox = document.getElementById("listBox");
  const body = document.querySelector("body");
  const thead = document.querySelector("thead");
  const h1 = document.querySelector("h1");
  
  darkToggle.onclick = function(){
      darkToggle.classList.toggle('dark');
      body.classList.toggle('dark');
      thead.classList.toggle('dark');
      searchbox.classList.toggle('dark');
      listBox.classList.toggle('dark');
      h1.classList.toggle('dark');
     
      var tr = document.getElementsByTagName("tr");

      //When certain books have been searched by the user, change this row background color when switching to dark mode.
      for(var i = 0; i < bookList.length; i++){
        if(tr[i+1].style.backgroundColor == "darkmagenta"){
            tr[i+1].style.backgroundColor = "blue";
        }else if(tr[i+1].style.backgroundColor == "blue"){
            tr[i+1].style.backgroundColor = "darkmagenta";
        }else if(tr[i+1].style.backgroundColor == "white"){
            tr[i+1].style.backgroundColor = "rgb(78, 75, 75)";
        }else if(tr[i+1].style.backgroundColor == "rgb(78, 75, 75)"){
            tr[i+1].style.backgroundColor = "white";
        }
      }
      
  };

  //the functuion of search
  var searchBtn = document.getElementById("searchBtn");
  searchBtn.onclick = searchFunc;

  //the fucntion of filter
  var filterBtn = document.getElementById("filterBtn");
  filterBtn.onclick = filterFunc;

  //the function of reset
  var resetBtn = document.getElementById("resetBtn");
  resetBtn.onclick = resetShoppingCart;
       
}

//End users can search books based on their title.
function searchFunc(){
    var body = document.querySelector("body");
    var bodyClassName = body.getAttribute("class");
    
    //Distinguish between normal mode and dark mode
    if(bodyClassName != "dark"){
        for(var i =0; i < bookList.length; i++){
            var tr = document.getElementsByTagName("tr")[i+1];
            tr.style.backgroundColor = "white";
        }

        //The content that the user inputs
        var inputContent = document.getElementById("searchInput").value;
        
        for(var i = 0; i < bookList.length; i++){
            var titleDetail = document.getElementById("title"+i).innerHTML;
            
            if(titleDetail.indexOf(inputContent) != -1 && inputContent != ""){
                var temp = document.getElementsByTagName("tr")[i+1];
                temp.style.backgroundColor = "darkmagenta";
            }
        }
        if(inputContent == ""){
            alert("Search term does not appear in any title!");
        }

    }else{
        for(var i =0; i < bookList.length; i++){
            var tr = document.getElementsByTagName("tr")[i+1];
            tr.style.backgroundColor = "rgb(78, 75, 75)";
        }
        var inputContent = document.getElementById("searchInput").value;
        
        for(var i = 0; i < bookList.length; i++){
            var titleDetail = document.getElementById("title"+i).innerHTML;
            
            if(titleDetail.indexOf(inputContent) != -1 && inputContent != ""){
                var temp = document.getElementsByTagName("tr")[i+1];
                temp.style.backgroundColor = "blue";
                
            }
        }
    }
    
    
}
//End users should be able to filter books through their categories
function filterFunc(){
    for(var i = 0; i < bookList.length; i++){
        var tr = document.getElementsByTagName("tr");
            tr[i+1].style.display = "";
    }

    var categorySelect = document.getElementById("categorySelect");
    var index = categorySelect.selectedIndex;
    var matchRowNumber = new Array();
    //Gets the book category selected by the user
    var categoryText = categorySelect.options[index].text;

    
    var num = 0;
    //Gets the number of matching rows and adds them to the array
    for(var book of bookList){
        num++;
        for(var detail in book){
            if(detail == "category"){
                if(book[detail] == categoryText){
                    matchRowNumber.push(num);
                }  
            }
        }
    }

    if(matchRowNumber.length != 0){
        var flag = false;
        for(var i = 0; i < bookList.length; i++){
            for(var j = 0; j < matchRowNumber.length; j++){

                if(i+1 == matchRowNumber[j]){
                    flag = true;
                    continue;
                }
            }
            if(flag == false){
                var tr = document.getElementsByTagName("tr");
                tr[i+1].style.display = "none";
            }else{
                flag = false;
            }
            }
    }else if(categoryText == "Category"){
        
        for(var i = 0; i < bookList.length; i++){
            var tr = document.getElementsByTagName("tr");
                tr[i+1].style.display = "";
        }
    }else{
        alert("Users select the category that does not contain any book!");
    }

}

//End users should be able to select books and add them to the “Shopping Cart” through check boxes and a button “Add to cart”

//The total book number in shopping cart.
var shoppingCartTotalNum = 0;
function checkboxChoose(obj){
    var checkBox = document.getElementsByName("checkBox");

    for(var i = 0; i < checkBox.length; i++){
        checkBox[i].checked = false;
    }
    obj.checked = true;
    var addButton = document.getElementById("addBtn");
    addButton.onclick = function(){
       var inputNum = prompt("Please enter the amount you want to add to the cart:");
       if(isNaN(inputNum)){
            alert("Please enter an integer greater than or equal to 0!！")
       }else if(isNaN(parseInt(inputNum))){
            alert("Please enter an integer greater than or equal to 0!")
       }else if(inputNum < 0){
            alert("Please enter an integer greater than or equal to 0！")
       }else if(parseInt(inputNum)!=inputNum){
            alert("Please enter an integer greater than or equal to 0!");
       }else{
            shoppingCartTotalNum = parseInt(inputNum) + parseInt(shoppingCartTotalNum);
            obj.checked = false;
            var shoppingCart = document.getElementById("shoppingCart");
            shoppingCart.innerHTML = "(" + shoppingCartTotalNum + ")";
       }
    };
}

//End users can clear the shopping cart through the “Reset the cart” button.
function resetShoppingCart(){
    
    if(window.confirm("Is it okay to reset the cart?")){
        shoppingCartTotalNum = 0;
        var shoppingCart = document.getElementById("shoppingCart");
        shoppingCart.innerHTML = "(" + shoppingCartTotalNum + ")"; 
    }
}


//Dispaly booklist
function addBookList(bookList){
    var col = [];
    for(var i = 0; i < bookList.length; i++){
        for(var key in bookList[i]){
            if(col.indexOf(key) === -1){
                col.push(key);
            }
        }
    }
    
    var table = document.getElementById("Category");
    var tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
    
    for(var i = 0; i < bookList.length; i++){
        var tr = tableBody.insertRow(-1);
        for(var j = 0; j < col.length; j++){
            if(j==0){
                var firstRow = tr.insertCell(-1);
                var inputCheckbox = document.createElement("input");
                inputCheckbox.setAttribute("type", "checkbox");
                inputCheckbox.setAttribute("name", "checkBox");
                inputCheckbox.setAttribute("onclick", "checkboxChoose(this)");

                firstRow.appendChild(inputCheckbox);
                var img = document.createElement("img");
                img.src = bookList[i][col[j]];
                img.height = 120;
                img.width = 80;
                firstRow.appendChild(img);

            }else if(j==5){
                 
                 var ratingNumber = bookList[i][col[j]];
                 var ratingImgOne = document.createElement("img");
                 var ratingImgTwo = document.createElement("img");
                 var ratingImgThree = document.createElement("img");
                 var ratingImgFour = document.createElement("img");
                 var ratingImgFive = document.createElement("img");

                 switch(ratingNumber){
                    case "1":
                        ratingImgOne.src = "images/star-16.ico";
                        ratingImgTwo.src = "images/outline-star-16.ico";
                        ratingImgThree.src = "images/outline-star-16.ico";
                        ratingImgFour.src = "images/outline-star-16.ico";
                        ratingImgFive.src = "images/outline-star-16.ico";
                        break;
                    case "2":
                        ratingImgOne.src = "images/star-16.ico";
                        ratingImgTwo.src = "images/star-16.ico";
                        ratingImgThree.src = "images/outline-star-16.ico";
                        ratingImgFour.src = "images/outline-star-16.ico";
                        ratingImgFive.src = "images/outline-star-16.ico";
                        break;
                    case "3":
                        ratingImgOne.src = "images/star-16.ico";
                        ratingImgTwo.src = "images/star-16.ico";
                        ratingImgThree.src = "images/star-16.ico";
                        ratingImgFour.src = "images/outline-star-16.ico";
                        ratingImgFive.src = "images/outline-star-16.ico";
                        break;
                    case "4":
                        ratingImgOne.src = "images/star-16.ico";
                        ratingImgTwo.src = "images/star-16.ico";
                        ratingImgThree.src = "images/star-16.ico";
                        ratingImgFour.src = "images/star-16.ico";
                        ratingImgFive.src = "images/outline-star-16.ico";
                        break;
                    case "5":
                        ratingImgOne.src = "images/star-16.ico";
                        ratingImgTwo.src = "images/star-16.ico";
                        ratingImgThree.src = "images/star-16.ico";
                        ratingImgFour.src = "images/star-16.ico";
                        ratingImgFive.src = "images/star-16.ico";
                        break;
                                            
                 }
                 
                 var tabCell1 = tr.insertCell(2);
                 tabCell1.appendChild(ratingImgOne);
                 tabCell1.appendChild(ratingImgTwo);
                 tabCell1.appendChild(ratingImgThree);
                 tabCell1.appendChild(ratingImgFour);
                 tabCell1.appendChild(ratingImgFive);

                 
                

            }else if(j==1){
                var tabCell = tr.insertCell(-1);
                tabCell.setAttribute("id","title"+i);
                tabCell.innerHTML = bookList[i][col[j]]

            }else{
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = bookList[i][col[j]]
            }
            
        }

    }    
}


function getJsonObject(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success) success(JSON.parse(xhr.responseText));
            } else {
                if (error) error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
