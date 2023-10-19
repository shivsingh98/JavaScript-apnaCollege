const student = {
    name : 'Shiv Singh',
    age : 24,
    marks : 94.9,
    city: 'Lucknow'
   };

   console.log(student.city);

   // create a post

   const post = {
    username: "@shivsingh",
    content: "This is my #firstPost",
    likes: 160,
    reports: 5,
    tags: ["justcoder", "sanatanSharnam"]
   };

   // getting value
   console.log(post.username); // using . operator
   console.log(post['username']);
   console.log(post.tags[0]);

   const obj = {
    1: "a",
    2: "b",
    true: "C",
    null: "d",
    undefined: "e"
   };
  
   console.log(obj[null]);

   // updating value
   console.log(student.city)// lucknow
   student.city = "mumbai";
   console.log(student.city)// mumbai
    // adding new property
    student.isAdult = true;
    console.log(student.isAdult); // true
    console.log(student); 
    console.log(delete student.city); 

    // Nested object

    const classInfo = {
        aman: {
          grade: 'F',
          city: "Delhi",
        },
        shiv: {
          grade: 'A+',
          city: "Lucknow",
        },
        Ravi: {
          grade: 'A',
          city: "Sitapur",
        }
      };

      console.log(classInfo);
      classInfo.Ravi.city = "Lucknow";
      console.log(classInfo);
      console.log(classInfo.aman.grade);

      // array of objects

    const classInfo1 = [
        {
          name: 'aman',
          grade: 'F',
          city: "Delhi",
        },
         {
          name: 'Ravi',
          grade: 'A+',
          city: "Lucknow",
        },
         {
          name: 'Ravi',
          grade: 'A',
          city: "Sitapur",
        }
    ];

      console.log(classInfo1);
      classInfo1[2].city = "Lucknow";
      console.log(classInfo1);
      console.log(classInfo1[1].name);
        // generating random number between 1 to 10
      console.log(Math.floor(Math.random()*10+1));