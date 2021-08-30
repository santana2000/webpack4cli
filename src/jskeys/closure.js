// 闭包示例
for (var i = 0; i < 5; i++) {

    /*     console.log(i); // 0 1 2 3 4
    
        console.log(i++); // 0 2 4
    
        // 提出问题
        setTimeout(() => {
            console.log(i++);
        }, 10);
    
        // 方案一 （此处匿名函数传入的参数x与setTimeout里的函数形成闭包环境）
        // 通过闭包模拟出一个块级作用域
        (function (x) {
            setTimeout(() => {
                console.log(x++);
            }, 10);
        })(i); */


    // 方案二 （添加外部辅助函数，形成闭包）
    // 如果用var定义add的话，就回到全局作用域了，add函数不停的被覆盖，最后停在tempAdd(4)
    let add = tempAdd(i);
    setTimeout(() => {
        add();
    }, 10);

    // 方案三 （块级作用域）
    /* let add = i;
    setTimeout(() => {
        console.log(add++);
    }, 10); */
}

function tempAdd(i) {
    // let x = i;
    function addCount() {
        console.log(i++);
    }
    return addCount;
}

// --------------------- x++ -----------------------

// let z = 2;

//console.log(z++);

// console.log(++z);