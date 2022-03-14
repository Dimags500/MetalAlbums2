MetalAlbums 




הפרויקט הוא בעצם אתר מידע המכיל אמנים של רוק כבד אלבומים שלהם ו שירים   
נעשה שימוש  בטכנולוגיות :


C#
MS-SQL
TypeScript  & JavaScript 
css , html 
NET 6
Entity Framework Core 6.0 
Angular 13
Bootstrap 5
bootswatch theme for Bootstrap
PrimeNG 

lodash



צד שרת נבנה על פי עקרונות Clean Architecture  כמו כן עומד בעקרונות  RESTful API
![2](https://user-images.githubusercontent.com/73039506/158175766-28352c32-c905-458a-b707-dd1ea2de6407.jpg)

ב CORE - -מכילה את כל האישיות ו אבסטרקציות , קיים טיפוס BASE-ENTITY שממנו יורשים Entities אחרים . נעשה שימוש ב Repository Pattern ו כאן מוגדרות ההתנהגות של Repositories .
השכבה עצמיות וללא תלות בשכבות אחרות .

ב - Infrastructure - מאפיינת את התקשרות למסד נתונים ,הגדרות , migrations, context
כאן המימוש ל Repository Interfaces משכבת ה Core  , ו זאת בעצם נתלות בין השכבות 


ב - API - -מרכיבה את כל הפרויקט , ו תלויה בשתי השכבות העליונות יותר  Infrastructure ו Core 
מכילה Controllers שמטפלים בבקשות לקוח , Dtos לחלק מ מחלקות  ו settings לחלק מפונקציונליות שלא מומשה . 

בשל שימוש ב Repository Pattern ו Dependency Injection ה קונטרולרים מסתמכים על אבסטרקציה ו לא מתקשרים ישירות אם מסד נתונים , שכן מאפשר החלפת מסד ללא שינוי או אם שינוי מינורי בקוד בשכבה זה . 


 צד לקוח : 

אפשר לוונט מדף אומנים לאומן ספציפי ו לאלבום ספציפי 

קיימים שתי רמותת משתמש 
רגיל - יכול רק לראות מידע 
מנבל - יכול לערוך  

![3](https://user-images.githubusercontent.com/73039506/158176540-04b0b2b6-7f02-4730-9b18-9f35319f70fe.jpg)




תיקיית services) services ) מכילה
 api.service מתקשר ושולח בקשות לשרת (get,post,put)
 account.service  שמקבל רשימת משתמשים משרת  ו מנהל את מצב התחברות של המשתמש , במידת כניסה\ויציאה השירות  מיידעה את הרשומים 
 . על ידי שימוש ב ReplaySubject  , שם ו סיסמה שמורים ש database ו localStorage בדיקה בצד לקוח , אין שום הצפנות או טוקן  



תיקיית modals מכילה את ה interfaces שמגדירים את האישיות שנשתמש   
תיקיית components מכילה קומפוננטות עיקריות ומשניות 
תיקיית admin מכילה את admin Page Component האחראי על ניהול  dashboard 


![5](https://user-images.githubusercontent.com/73039506/158176808-d32fa271-1d92-45c2-8b14-2657bab7cf93.jpg)




![1](https://user-images.githubusercontent.com/73039506/158176874-d82b21f4-e5e7-4083-8e58-af16e8486edc.jpg)
![2](https://user-images.githubusercontent.com/73039506/158176879-a1f93c51-1a6f-4da7-aa84-d9efaecfca67.jpg)
![3](https://user-images.githubusercontent.com/73039506/158176881-5cceff34-0913-4f36-8005-035f2eed0d09.jpg)

![0](https://user-images.githubusercontent.com/73039506/158176914-2707a944-1888-4f23-9be8-02b1ad374a12.jpg)
![1](https://user-images.githubusercontent.com/73039506/158176924-c4fbd32e-a518-48fa-a72e-2a17d8858ef9.jpg)
![2](https://user-images.githubusercontent.com/73039506/158176926-62a2f2b2-f240-4871-b6a6-5c95efbe18df.jpg)

