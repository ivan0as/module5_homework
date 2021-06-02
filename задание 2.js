let x;
x=prompt('Введите сообщение');
if (typeof +x == 'number' && !isNaN(x)) {
  console.log('число');
} else if (x=='true' || x=='false') {
  console.log('логический тип');
} else{
  console.log('строка')
}