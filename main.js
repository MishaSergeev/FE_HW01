// 1. Спрашивать у пользователя память телефона и выводить в документ соответствующую цену к этой памяти
// 2. Спрашивать у пользователя цвет телефона и выводить кратинку соответствующую этому цвету (обратить внимание на то, что пользователь имеет возможность ввести память только тогда, когда выбрал цвет)
// 3. Цена телефона должна зависеть не только от памяти, но и от цвета. К примеру: silver на 128 стоит 500$, а black на 128 стоит 510$. И так далее. 

var memory;
var price = 0;
var photo ='';

while(true){
    var telColour = prompt('Введите цвет телефона : черный, серебро, красный, золото', '');
    if(telColour === null){
        alert('Вы не выбрали цвет телефона');
        break;
    } else if(telColour === 'черный'){
        price = 20;
        photo = '<img src = "https://www.aks.ua/images/products/5dc393cc79a8c704b152316c31a47c1b_large.jpg", alt="">';
        break;
    } else if(telColour === 'серебро'){
        price = 200;
        photo = '<img src = "https://4gazgolder.ru/image/data/icons/6/%20%D1%84%D0%B0%D0%B9%D0%BB%D1%8B%20(8).jpg", alt="">';
        break;
    } else if(telColour === 'красный'){
        price = 100;
        photo = '<img src = "https://img.ktc.ua/img/base/1/9/210519.jpg", alt="">';
        break;
    } else if(telColour === 'золото'){
        price = 50;
        photo = '<img src = "http://luxlux.net/wp-content/uploads/2012/01/33357/Zolotoy-iPhone.jpg", alt="">';
        break;
    }
    else {
        alert('Вы ввели некоректрые данные, попробуйде еще раз');
    }
}

var memories = [{
    val: 2,
    price: 50
  },
  {
    val: 16,
    price: 150
  },
  {
    val: 32,
    price: 300
  },
  {
    val:64,
    price: 600
  }
]

memory: while (true) {
  memory = prompt('Выбирите номинал карты памяти (GB) : 2, 16, 32, 64','');
  if (memory === null) {
    alert('Вы  не выбрали номинал карты памяти..');
    break; 
  } 
  
  for (var i = 0; i < memories.length; i++) {
    if (+memory === memories[i].val) {
      price = memories[i].price+price;
      break memory;
    
  }

}{
    alert('Вы ввели некоректрые данные, попробуйде еще раз');
}

}

document.write('<h1>Цена: ' + price + ' грн/шт </h1>');
document.write(photo);
