function toggleNav(){
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}


// רשימה של המערכות
const jsonData = {
    "generators": [
        {
            "id": 1,
            "title": "הקפאת חלונית",
            "content": "יש אפשרות לנעול שורות או עמודות מסוימות במקומן תוך גלילה במערך נתונים גדול. ",
            "tag":"תפעול התכנה",
            "img":"img1.png",
        },
        {
            "id": 2,
            "title": "חיפוש והחלפה",
            "content": "ניתן למצוא מילה בכל הגיליון ואחרי שמוצאים אותה ישנה אפשרות להחליף בטקסט או עיצוב אחר.",
            "tag":"תפעול התכנה",
            "img":"img2.png",
        },
        {
            "id": 3,
            "title": "תנועה בגיליון",
            "content": "פעולות ניווט או גלילה בגיליון באקסל.",
            "tag":"תפעול התכנה",
            "img":"img3.png",
        },
        {
            "id": 4,
            "title": "הסרת נתונים כפולים",
            "content": "מחיקה לצמיתות של ערכים כפולים.",
            "tag":"תפעול התכנה",
            "img":"img4.png",
        },
        {
            "id": 5,
            "title": "סינון נתונים",
            "content": "ישנה אפשרות סינון נתונים בטבלה במידה ונרצה להציג רק את הרשומות שנחוצות.",
            "tag":"תפעול התכנה",
            "img":"img5.png",
        },
        {
            "id": 6,
            "title": "אימות נתונים",
            "content": "מניעת שגיאות הקלדה ושליטה בנתונים.",
            "tag":"תפעול התכנה",
            "img":"img6.png",
        },
        {
            "id": 7,
            "title": "יצירת תרשים",
            "content": "תרשימים עוזרים להציג נתונים בצורה חזותית וברורה. בנוסף, עוזר להבין יחסים והתפלגות של מידע.",
            "tag":"תרשימים וגרפים",
            "img":"img7.png",
        },
        {
            "id": 8,
            "title": "סוגי גרפים",
            "content": "ישנם סוגים שונים של גרפים המתאימים למטרות ונתונים שונים. לדוגמה: גרף עמודות נועד להשוואה בין ערכים במהלך הזמן, גרף עוגה נועד להצגת יחסים של חלקים בקבוצה ועוד.",
            "tag":"תרשימים וגרפים",
            "img":"img8.png",
        },
        {
            "id": 9,
            "title": "עיצוב גרפים",
            "content": "עיצוב הגרפים חשוב לשם הבנה והדגמה באופן יעיל יותר של המידע.",
            "tag":"עיצוב",
            "img":"img9.png",
        },
        {
            "id": 10,
            "title": "עצוב תאים",
            "content": "עיצוב תאים חשוב ליצירת דוחות וטבלאות קלים לקריאה, ניתן להשתמש בצבעים או ברקעים על מנת להדגיש את המידע.",
            "tag":"עיצוב",
            "img":"img10.png",
        },
    ]
}

//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
    // קריאה לפונקציה שתיצור את הרשימה אחרי עליית העמוד
    createItems()
    hideBackButton();
});

// פונקציה ליצירת הרשימה
function createItems() {
    // הבאת האלמנט בו ניצור את הרשימה בדף
    const itemsContainer = document.getElementById('itemsContainer');
     // איפוס של האלמנט
     itemsContainer.innerHTML = "";
    itemsContainer.setAttribute("class","row justify-content-xs-center");


    // // יצירת תגית של רשימה
    // const cardDeck = document.createElement("div");
    // // השמת מזהה לתגית
    // cardDeck.setAttribute("id", "card-deck");
    // // הוספת מחלקה
    // cardDeck.setAttribute("class", "card-deck");

    // מעבר על הרשימה מעלה והוספה של פריט לרשימה בדף בכל סיבוב
    jsonData.generators.forEach(generator => {
        // יצירה של תגית הפריט
        const myCard = document.createElement("div");
        myCard.setAttribute("class", "card col-6");

        const myImg = document.createElement("img");
        myImg.setAttribute("src", `img/${generator.img}`);

        const myCardBody = document.createElement("div");
        myCardBody.setAttribute("class", "card-body");

        const myCardTitle = document.createElement("h5");
        myCardTitle.setAttribute("class", "card-title");
        myCardTitle.innerHTML = `${generator.title}`;
        myCardTitle.setAttribute("id", `id_${generator.id}`);

        const myButton = document.createElement("button");
        myButton.setAttribute("class", "btn btn-primary");
        myButton.innerHTML = "מידע נוסף";
        myButton.addEventListener("click", function () {
            showContentInCard(generator.content, generator.id);
        });

        myCardTitle.addEventListener("mouseover", function () {
            myCardTitle.classList.add("green");
        });
        myCardTitle.addEventListener("mouseout", outTopic);

        myCardTitle.addEventListener("mouseout", function () {
            myCardTitle.classList.remove("green");
        });

        
        

        myCardBody.appendChild(myCardTitle);
        myCardBody.appendChild(myButton);

        myCard.appendChild(myImg);
        myCard.appendChild(myCardBody);

        myCard.setAttribute("data-tag", generator.tag);

        itemsContainer.appendChild(myCard);

      
    });
   
    const resetButton = document.createElement("button");
    resetButton.setAttribute("class", "btn btn-secondary");
    resetButton.innerHTML = "חזור";
    resetButton.addEventListener("click", function () {
        resetSearch();
    });
 
    // הוספת הכפתור לקונטיינר
    itemsContainer.appendChild(resetButton);
hideBackButton();
filterByTag();
}
function showContentInCard(content, id) {
    const cardTitle = document.getElementById(`id_${id}`);
    const cardBody = cardTitle.parentElement;

    // Check if content paragraph already exists
    const existingContent = cardBody.querySelector(".content-paragraph");
    
    // If it exists, remove it
    if (existingContent) {
        cardBody.removeChild(existingContent);
    } else {
        // If it doesn't exist, create a new paragraph and append it
        const contentParagraph = document.createElement("p");
        contentParagraph.innerHTML = content;
        contentParagraph.classList.add("content-paragraph");
        cardBody.appendChild(contentParagraph);
    }
}

function hoverTopic(e){
    const currentId = e.target.id;
    document.getElementById(currentId).classList.add("green");
}

function outTopic(e) {
    const currentId = e.target.id;
    document.getElementById(currentId).classList.remove("green");
}








function resetSearch() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = 'block';
    });
    hideBackButton();

    // הוספת כפתור "חזור"
    const backButton = document.createElement("button");
    backButton.setAttribute("class", "btn btn-secondary");
    backButton.innerHTML = "חזור";
    backButton.addEventListener("click", function () {
        resetSearch();
    });

    const searchContainer = document.querySelector('.search-container');
    searchContainer.appendChild(backButton);
}

function search() {
    // Get the search input value
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Reset the search
    resetSearch();

    // Get all the card titles
    const cardTitles = document.querySelectorAll('.card-title');

    // Loop through each card title and show/hide based on search term
    cardTitles.forEach(title => {
        const titleText = title.textContent.toLowerCase();
        const card = title.closest('.card');

        if (titleText.includes(searchTerm)) {
            // Show the card if the title includes the search term
            card.style.display = 'block';
        } else {
            // Hide the card if the title doesn't include the search term
            card.style.display = 'none';
        }
    });
}

function restoreOriginalData() {
    // ... קוד קיים ...
    // קריאה לפונקציה resetSearch
    resetSearch();
}

function hideBackButton() {
    const backButton = document.querySelector('.btn-secondary');
    if (backButton) {
        backButton.remove();
    }
}

function filterByTag() {
    // Get the selected tag value
    const selectedTag = document.getElementById('tagFilter').value;

    // Reset the search
    resetSearch();

    // Get all the cards
    const cards = document.querySelectorAll('.card');

    // Loop through each card and show/hide based on selected tag
    cards.forEach(card => {
        const cardTag = card.getAttribute('data-tag');

        if (selectedTag === 'all' || cardTag === selectedTag) {
            // Show the card if the selected tag is 'all' or matches the card's tag
            card.style.display = 'block';
        } else {
            // Hide the card if the selected tag doesn't match the card's tag
            card.style.display = 'none';
        }
    });
}

