    const arrInt = [2,1,3,5,4,6,7,8,9,10];
    const arrIntTwo = [12,34,55,22,89,100];
    const studentObj =[{id:1,name:'Quyet',point:'9'},{id:2,name:'Hanh',point:'8'},{id:3,name:'Huy',point:'7'}]
    const nameStudent = ['Trong','Q','Tu','Hanh','Huy','Huy Hoang']

// 1 - Viết chương trình tính biêủ thức sau: S(x,n) = x + x 1 + x 2 + … + xn (5 điểm)
    function equation(x,n){
        let result = x;
        for( let i = 1; i <= n; i++){
            result += x**i;
        }
        console.log('Câu 1) '+ result);
    }
    equation(3,4);
// 2 - Nhập vào 1 mảng số nguyên, tìm phần tử lớn nhất và bé nhất trong mảng
    var maxInNumbers = Math.max.apply(Math, arrInt); 
    var minInNumbers = Math.min.apply(Math, arrInt);
    console.log('Câu 2) Số lớn nhất trong mảng: ' + maxInNumbers);
    console.log('Câu 2) Số bé nhất trong mảng: '+ minInNumbers);
// 3 - Nhập vào 1 mảng số nguyên sắp xếp mảng đó theo thứ tự tăng dần và giảm dần
    function sortArr(arrInt){
        const  ascendArr = arrInt.sort(function(a, b){return a - b});
        console.log('Câu 3) Mảng tăng dần: '+ ascendArr);
        
        const decreaseArr = arrInt.sort(function(a, b){return b - a});
        console.log('Câu 3) Mảng giảm dần: '+ decreaseArr);
    }   
    sortArr(arrInt); 
// 4 - Nhập vào 1 mảng các object hocsinh gồm id và name và điểm. Tính trung bình cộng số điểm của các học sinh,
    function averagePoint(studentObj){
        const newArr = [];
        let result = 0;
        studentObj.forEach(item => {
            const result = newArr.push(Number(item.point))
        });
            result = (newArr.reduce((sum, item) => sum + item, 0))/2;
            console.log('Câu 4) Điểm trung bình của 3 em là: '+result);
    }
    averagePoint(studentObj);
// 5 - tìm người có điểm lớn nhất, bé nhất, tìm người có dài nhất. 
function findPointStudent(studentObj){
    const newArr = [];
    studentObj.forEach(item => {
        newArr.push(Number(item.point))
    });
        const maxPoint = Math.max.apply(Math, newArr); 
        const minPoint = Math.min.apply(Math, newArr);  
        studentObj.filter((item)=>{
            if(item.point == maxPoint){
                console.log('Câu 5) Người có điểm cao nhất: '+item.name);
            }
            if(item.point == minPoint){
                console.log('Câu 5) Người có điểm thấp nhất: '+item.name);
            }
        })
}
findPointStudent(studentObj);

// 6 - Nhập 2 mảng số nguyên. Gộp 2 mảng lại với nhau sắp xếp theo thứ tự tăng dần và giảm dần.
    function mergeArr(arrInt,arrIntTwo){
        const newArr = arrInt.concat(arrIntTwo)
        const  ascendArr = newArr.sort(function(a, b){return a - b});
        console.log('Câu 6) Mảng tăng dần: '+ ascendArr);
        
        const decreaseArr = newArr.sort(function(a, b){return b - a});
        console.log('Câu 6) Mảng giảm dần: '+ decreaseArr);
    }   
    mergeArr(arrInt,arrIntTwo); 
// 7 - Nhập vào mảng số nguyên, tính trung bình cộng của mảng đó 
    const sumInt = arrInt.reduce((sum, item) => sum + item, 0);  
    const average = sumInt/ 2; 
    console.log('Câu 7) Trung bình cộng của mảng: '+ average);
// 8 - Nhập vào 1 mảng các string. Tìm phần tử có độ dài lớn nhất
function findLongestStudent (nameStudent) {
    var maxLength = 0;
    nameStudent.forEach(item => {
            if (item.length > maxLength) {
                maxLength = item.length;
            }
            return maxLength;
    })
    nameStudent.filter(item => {
        if(maxLength == item.length){
            console.log('Câu 8) Người có tên dài nhất là: '+ item);
        }
    })
  }
  
  findLongestStudent(nameStudent)

